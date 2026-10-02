import Container from "@/components/container";
import { Button } from "@/components/ui/button";
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
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Clock3,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";

const phoneRegex = /^\+?[0-9\s().-]{7,20}$/;

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || phoneRegex.test(val),
      "Please enter a valid phone number"
    ),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "4095a598-11e0-487c-9adc-ba07aa640467";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const fieldClassName =
  "h-12 border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/75 focus-visible:border-primary focus-visible:ring-primary/25";

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    setIsSuccess(false);

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", `${data.firstName} ${data.lastName}`);
      formData.append("first_name", data.firstName);
      formData.append("last_name", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone ?? "");
      formData.append("subject", `New Litigon website enquiry: ${data.subject}`);
      formData.append("message", data.message);
      formData.append("from_name", "Litigon Website");

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Web3Forms submission failed");
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });

      form.reset();
      setIsSuccess(true);
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });

      setError("Failed to send message. Please try again later.");
    }
  };

  const onInvalid = (_errors: FieldErrors<ContactFormValues>) => {
    requestAnimationFrame(() => errorSummaryRef.current?.focus());
  };

  const hasValidationErrors = Object.keys(form.formState.errors).length > 0;

  return (
    <section id="contact-form" className="relative z-20 -mt-10 pb-20 md:-mt-14 md:pb-28">
      <Container>
        <div className="grid overflow-hidden rounded-[28px] border border-border/80 bg-card shadow-[0_28px_80px_rgba(26,26,26,0.13)] lg:grid-cols-[0.76fr_1.24fr]">
          <aside className="relative overflow-hidden bg-[#1a1a1a] p-7 text-white sm:p-9 lg:p-11">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Direct contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Talk to our team
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                Choose the channel that works best for you. We usually respond within one business
                day.
              </p>

              <div className="mt-9 space-y-3">
                <a
                  href="tel:+966575111122"
                  className="group flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 transition-colors hover:border-primary/60 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  dir="ltr"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/45">Phone</span>
                    <span className="mt-0.5 block font-medium text-white">+966 57 511 1122</span>
                  </span>
                </a>

                <a
                  href="mailto:Info@litigon.sa"
                  className="group flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 transition-colors hover:border-primary/60 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  dir="ltr"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/45">Email</span>
                    <span className="mt-0.5 block break-all font-medium text-white">Info@litigon.sa</span>
                  </span>
                </a>

                <a
                  href="https://maps.google.com/?q=24.801777,46.601017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 transition-colors hover:border-primary/60 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/45">Head Office</span>
                    <span className="mt-0.5 block text-sm font-medium leading-5 text-white">
                      Riyadh, 5660 Anas Ibn Malik st., Al Malqa Dist., P.O. Box 13525
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs text-white/45">Follow us</span>
                <div className="flex gap-2">
                  <a
                    href="https://www.instagram.com/litigon.sa?stkn=Mml6NnliNGU0M3Z4&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Litigon on Instagram"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-white/80 transition-colors hover:border-primary/60 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/litigonsa?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Litigon on X"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-white/80 transition-colors hover:border-primary/60 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <XLogo className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href="https://linkedin.com/company/litigon-sa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Litigon on LinkedIn"
                    title="LinkedIn"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-white/80 transition-colors hover:border-primary/60 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="p-7 sm:p-9 lg:p-11 xl:p-14">
            <div className="max-w-[680px]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Event enquiry
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                Tell us about your event
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Share the essentials below and we’ll come back with the right next step.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                noValidate
                className="mt-9 space-y-6"
                aria-busy={form.formState.isSubmitting}
              >
                {hasValidationErrors && (
                  <div
                    ref={errorSummaryRef}
                    role="alert"
                    tabIndex={-1}
                    className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-700 outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    <p className="font-semibold">There is a problem with your submission.</p>
                    <p className="mt-1">Please review the highlighted fields and try again.</p>
                  </div>
                )}

            {/* First Name and Last Name - Two Columns */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name <span aria-hidden="true" className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        autoComplete="given-name"
                        required
                        {...field}
                        className={fieldClassName}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name <span aria-hidden="true" className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        autoComplete="family-name"
                        required
                        {...field}
                        className={fieldClassName}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email and Phone - Two Columns */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email <span aria-hidden="true" className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        autoComplete="email"
                        required
                        {...field}
                        className={fieldClassName}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone <span className="font-normal text-muted-foreground">(Optional)</span></FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Phone"
                        autoComplete="tel"
                        {...field}
                        className={fieldClassName}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Subject - Full Width */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject <span aria-hidden="true" className="text-primary">*</span></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      required
                      {...field}
                      className={fieldClassName}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message - Full Width */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message <span aria-hidden="true" className="text-primary">*</span></FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type Message"
                      required
                      className="min-h-[150px] resize-y border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/75 focus-visible:border-primary focus-visible:ring-primary/25"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button
                type="submit"
                size="lg"
                className="min-h-12 w-full bg-primary text-white hover:bg-primary/90 sm:w-auto sm:min-w-52"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send a Message
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
              <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Your information is only used to respond to this enquiry.
              </p>
            </div>

            {isSuccess && (
              <div role="status" aria-live="polite" className="flex gap-3 rounded-2xl border border-green-600/20 bg-green-600/10 p-4 text-sm text-green-800">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="mt-1">We'll get back to you as soon as possible.</p>
                </div>
              </div>
            )}

            {error && (
              <p role="alert" aria-live="assertive" className="rounded-2xl border border-red-500/25 bg-red-500/10 p-4 text-sm font-medium text-red-700">
                {error}
              </p>
            )}
          </form>
        </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
