import { PageTransition } from "@/components/layout/PageTransition";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Loader2, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      }
    });
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Have a project in mind or need tech support? Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form, or reach out directly using the information below. We look forward to hearing from you.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-none shadow-none bg-slate-50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-muted-foreground text-sm">hello@ohhdennyservices.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-none bg-slate-50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                      <p className="text-muted-foreground text-sm">Typically within 24 business hours</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-slate-50 focus-visible:ring-primary h-12" {...field} />
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
                              <FormLabel className="text-foreground">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" className="bg-slate-50 focus-visible:ring-primary h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" type="tel" className="bg-slate-50 focus-visible:ring-primary h-12" {...field} value={field.value || ''} />
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
                            <FormLabel className="text-foreground">How can we help you?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us a bit about your project or the issue you're facing..." 
                                className="resize-none min-h-[150px] bg-slate-50 focus-visible:ring-primary p-4" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full h-12 text-base font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" 
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          "Send Message"
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
