import { z } from "zod";
import { contactInputSchema } from "./schema";
import { sendContactEmail } from "./email";
import { verifyTurnstileToken } from "./turnstile";

export type ContactProcessResult =
  | { status: 201; body: { ok: true } }
  | { status: 400; body: { message: string; field?: string } }
  | { status: 403; body: { message: string } }
  | { status: 500; body: { message: string } };

function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  return Boolean(body.website || body.url || body.company_url);
}

export async function processContactSubmission(
  rawBody: unknown,
  options: { ip?: string } = {},
): Promise<ContactProcessResult> {
  if (!rawBody || typeof rawBody !== "object") {
    return { status: 400, body: { message: "Invalid request body" } };
  }

  const body = rawBody as Record<string, unknown>;

  // Bots that fill honeypots get a fake success — no email sent.
  if (isHoneypotTriggered(body)) {
    return { status: 201, body: { ok: true } };
  }

  try {
    const input = contactInputSchema.parse(body);
    const turnstileOk = await verifyTurnstileToken(
      input.turnstileToken,
      options.ip,
    );

    if (!turnstileOk) {
      return {
        status: 403,
        body: { message: "Security check failed. Please try again." },
      };
    }

    await sendContactEmail(input);
    return { status: 201, body: { ok: true } };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        status: 400,
        body: {
          message: err.errors[0]?.message ?? "Invalid input",
          field: err.errors[0]?.path.join("."),
        },
      };
    }

    console.error("Contact form error:", err);
    return { status: 500, body: { message: "Internal server error" } };
  }
}
