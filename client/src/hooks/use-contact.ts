import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let errorMessage = "Failed to submit form. Please try again.";
        try {
          const errorData = await res.json();
          if (res.status === 400) {
            const parsed = api.contact.create.responses[400].parse(errorData);
            errorMessage = parsed.message;
          } else {
            const parsed = api.contact.create.responses[500].parse(errorData);
            errorMessage = parsed.message;
          }
        } catch (e) {
          // Fallback to generic error if parsing fails
        }
        throw new Error(errorMessage);
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
