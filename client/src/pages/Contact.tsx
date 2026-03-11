import { PageTransition } from "@/components/layout/PageTransition";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiX, SiLinkedin } from "react-icons/si";

export default function Contact() {
  const mutation = useSubmitContact();

  const form = useForm<ContactInput>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactInput) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8
            text-center max-w-3xl"
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold
              text-foreground mb-6"
          >
            Contact
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Looking for some website help? Have a tech question?
            Send us a message!
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <Card className="border-none shadow-none bg-slate-50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:ohhdennyservicesllc@gmail.com"
                        className="text-muted-foreground text-sm
                          hover:text-primary transition-colors"
                        data-testid="link-email"
                      >
                        ohhdennyservicesllc@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-none bg-slate-50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Location
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Selma, Texas
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-none bg-slate-50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Social
                    </h4>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground
                          hover:text-primary transition-colors"
                        data-testid="link-twitter"
                        aria-label="Twitter"
                      >
                        <SiX className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground
                          hover:text-primary transition-colors"
                        data-testid="link-linkedin"
                        aria-label="LinkedIn"
                      >
                        <SiLinkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">
                    Send us a message and we will respond as quickly
                    as possible.
                  </p>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                      data-testid="form-contact"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="bg-slate-50
                                  focus-visible:ring-primary h-12"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Email *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                type="email"
                                className="bg-slate-50
                                  focus-visible:ring-primary h-12"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Message *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="How can we help?"
                                className="resize-none min-h-[150px]
                                  bg-slate-50
                                  focus-visible:ring-primary"
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-semibold"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
