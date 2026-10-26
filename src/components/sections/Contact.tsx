"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface ContactMethod {
  title: string;
  description: string;
  value: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    description: "Best for inquiries, collaborations, and formal opportunities.",
    value: "rakibhasan98840@gmail.com",
    href: "mailto:rakibhasan98840@gmail.com",
    icon: Mail,
    color: "#9B7BFF",
  },
  {
    title: "WhatsApp",
    description: "Direct instant messaging via WhatsApp.",
    value: "01753569884",
    href: "https://wa.me/8801753569884",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    title: "Phone",
    description: "Available during standard business hours in Bangladesh.",
    value: "01753569884",
    href: "tel:01753569884",
    icon: Phone,
    color: "#55D6FF",
  },
  {
    title: "GitHub",
    description: "Inspect open-source codebases, commits, and experiments.",
    value: "md-rakib-hasan1",
    href: "https://github.com/md-rakib-hasan1",
    icon: FaGithub,
    color: "#F4F5FA",
  },
  {
    title: "LinkedIn",
    description: "Connect professionally and follow my tech updates.",
    value: "md-rakib-hasan1",
    href: "https://linkedin.com/in/md-rakib-hasan1",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  const showToast = (type: "success" | "error", toastMessage: string) => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    setToast({ type, message: toastMessage });
    toastTimer.current = setTimeout(() => {
      setToast(null);
      toastTimer.current = null;
    }, 6000);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("error", "Please fill in all required fields.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      showToast("error", "Please provide a valid email address.");
      return;
    }

    setIsSending(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error(
          "The contact form service is currently not configured. Please email me directly at rakibhasan98840@gmail.com or message me on WhatsApp.",
        );
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || "New message from Portfolio Contact Form",
          message: message.trim(),
          from_name: "Rakib Hasan Portfolio",
          replyto: email.trim(),
        }),
      });

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Your message could not be delivered. Please try again.",
        );
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      showToast("success", "Message sent successfully! I will reply as soon as possible.");
    } catch (error) {
      showToast(
        "error",
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please reach out via email.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle =
    "mt-2 w-full rounded-xl border border-[rgba(163,169,186,0.16)] bg-[#111522] px-4 py-3 text-sm text-[#F4F5FA] outline-none transition-colors placeholder:text-[#6C7488] focus:border-[#9B7BFF] focus:ring-2 focus:ring-[#9B7BFF]/20";

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[rgba(163,169,186,0.12)] bg-[#090B12] section-padding"
    >
      {/* Toast Alert */}
      {toast && (
        <div
          role={toast.type === "success" ? "status" : "alert"}
          aria-live="polite"
          className={`fixed right-5 top-24 z-[70] flex max-w-sm items-start gap-3 rounded-2xl border p-4 text-sm shadow-2xl backdrop-blur-2xl transition-all ${
            toast.type === "success"
              ? "border-emerald-500/30 bg-[#0F1420]/95 text-emerald-300 shadow-emerald-500/10"
              : "border-rose-500/30 bg-[#0F1420]/95 text-rose-300 shadow-rose-500/10"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 size={19} className="shrink-0 mt-0.5 text-emerald-400" />
          ) : (
            <CircleAlert size={19} className="shrink-0 mt-0.5 text-rose-400" />
          )}
          <span className="leading-snug">{toast.message}</span>
        </div>
      )}

      {/* Atmospheric lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[380px] rounded-full bg-[#9B7BFF]/[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 size-[360px] rounded-full bg-[#55D6FF]/[0.08] blur-[130px]"
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#9B7BFF] uppercase">
            Let&apos;s Connect
          </p>

          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#F4F5FA] sm:text-4xl md:text-5xl">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
            Have a project idea, questions about my work, or junior frontend
            opportunities? Send a message below or reach out directly on WhatsApp or email.
          </p>
        </div>

        {/* Two-Column Grid: Form (Left) & Methods (Right) */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left: Contact Form */}
          <div className="glass-card p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl border border-[#9B7BFF]/20 bg-[#9B7BFF]/10 text-[#9B7BFF]">
                <Send size={19} />
              </span>

              <div>
                <h3 className="text-lg font-bold text-[#F4F5FA]">
                  Send Me a Message
                </h3>
                <p className="text-xs text-[#A3A9BA]">
                  I typically respond within 24 hours.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold tracking-wide text-[#D5DBE8] uppercase"
                >
                  Your Name <span className="text-[#9B7BFF]">*</span>
                </label>

                <div className="relative">
                  <UserRound
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-[25px] -translate-y-1/2 text-[#6C7488]"
                  />
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={`${inputStyle} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold tracking-wide text-[#D5DBE8] uppercase"
                >
                  Your Email <span className="text-[#9B7BFF]">*</span>
                </label>

                <div className="relative">
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-[25px] -translate-y-1/2 text-[#6C7488]"
                  />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={`${inputStyle} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold tracking-wide text-[#D5DBE8] uppercase"
                >
                  Subject
                </label>

                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-[25px] -translate-y-1/2 text-[#6C7488]"
                  />
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    maxLength={150}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What is this about? (e.g. Project inquiry)"
                    className={`${inputStyle} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold tracking-wide text-[#D5DBE8] uppercase"
                >
                  Message <span className="text-[#9B7BFF]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, idea, or questions..."
                  className={`${inputStyle} min-h-32 resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#7B58EE] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#9B7BFF]/25 transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <span>Sending message...</span>
                    <LoaderCircle size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>

              <p className="text-[11px] leading-5 text-[#6C7488]">
                Protected communication. Your message is safely sent directly to my mailbox.
              </p>
            </form>
          </div>

          {/* Right: Contact Methods & Direct Channels */}
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#F4F5FA]">
                Direct Contact Channels
              </h3>
              <p className="mt-1 text-xs text-[#A3A9BA]">
                Feel free to choose whichever medium is most convenient for you.
              </p>
            </div>

            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isExternal = method.href.startsWith("http");

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="glass-card group flex items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-1 sm:p-5"
                >
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:scale-105"
                    style={{ color: method.color }}
                  >
                    <Icon size={20} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[#F4F5FA]">
                        {method.title}
                      </span>
                    </div>

                    <p className="mt-0.5 text-xs text-[#A3A9BA] truncate">
                      {method.description}
                    </p>

                    <p className="mt-1.5 text-xs font-semibold text-[#55D6FF] truncate">
                      {method.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-[#6C7488] transition-transform group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
