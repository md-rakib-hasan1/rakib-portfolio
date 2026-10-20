
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
    ArrowUpRight,
    CheckCircle2,
    CircleAlert,
    LoaderCircle,
    Mail,
    MessageCircle,
    Send,
    UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactMethods = [
    {
        title: "Email",
        description: "For project inquiries and opportunities.",
        value: "rakibhasan98840@gmail.com",
        href: "mailto:rakibhasan98840@gmail.com",
        icon: Mail,
        iconColor: "#ea4335",
    },
    {
        title: "GitHub",
        description: "Explore my code and projects.",
        value: "md-rakib-hasan1",
        href: "https://github.com/md-rakib-hasan1",
        icon: FaGithub,
        iconColor: "#ffffff",
    },
    {
        title: "LinkedIn",
        description: "Let's connect professionally.",
        value: "Connect with me",
        href: "https://www.linkedin.com/in/md-rakib-hasan1",
        icon: FaLinkedin,
        iconColor: "#0a66c2",
    },
    {
        title: "WhatsApp",
        description: "Message me directly on WhatsApp.",
        value: "01753569884",
        href: "https://wa.me/8801753569884",
        icon: MessageCircle,
        iconColor: "#25d366",
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

    useEffect(
        () => () => {
            if (toastTimer.current) {
                clearTimeout(toastTimer.current);
            }
        },
        [],
    );

    const showToast = (type: "success" | "error", toastMessage: string) => {
        if (toastTimer.current) {
            clearTimeout(toastTimer.current);
        }

        setToast({ type, message: toastMessage });
        toastTimer.current = setTimeout(() => {
            setToast(null);
            toastTimer.current = null;
        }, 5000);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSending(true);

        try {
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
            if (!accessKey) {
                throw new Error(
                    "The contact form is temporarily unavailable. Please email me directly at rakibhasan98840@gmail.com.",
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
                    name,
                    email,
                    subject,
                    message,
                    from_name: "Rakib Hasan Portfolio",
                    replyto: email,
                }),
            });

            const result: { success?: boolean; message?: string } =
                await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Your message could not be sent. Please try again.",
                );
            }

            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            showToast("success", "Message sent successfully!");
        } catch (error) {
            showToast(
                "error",
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.",
            );
        } finally {
            setIsSending(false);
        }
    };

    const inputClassName =
        "mt-2 w-full rounded-xl border border-white/10 bg-[#080f1d]/80 px-4 py-3 text-sm text-[#f1f5fc] outline-none transition-colors placeholder:text-[#657995] focus:border-[#3987ff]/70 focus:ring-2 focus:ring-blue-500/10";

    return (
        <section
            id="contact"
            className="relative overflow-hidden border-t border-white/[0.06] bg-[#080f1d] section-padding"
        >
            {toast && (
                <div
                    role={toast.type === "success" ? "status" : "alert"}
                    className={`fixed right-5 top-24 z-[60] flex max-w-sm items-center gap-3 rounded-xl border px-4 py-3 text-sm shadow-xl backdrop-blur-xl ${
                        toast.type === "success"
                            ? "border-emerald-400/30 bg-[#0d192b]/95 text-emerald-300"
                            : "border-red-400/30 bg-[#0d192b]/95 text-red-300"
                    }`}
                >
                    {toast.type === "success" ? (
                        <CheckCircle2 size={19} className="shrink-0" />
                    ) : (
                        <CircleAlert size={19} className="shrink-0" />
                    )}
                    <span>{toast.message}</span>
                </div>
            )}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-20 size-[360px] rounded-full bg-blue-500/[0.09] blur-[120px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 size-[320px] rounded-full bg-sky-400/[0.07] blur-[110px]"
            />

            <div className="container relative">
                {/* Section heading */}
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#8ab8ff] uppercase">
                        Get in touch
                    </p>

                    <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#f1f5fc] sm:text-4xl md:text-5xl">
                        Let&apos;s Start a{" "}
                        <span className="gradient-text">Conversation</span>
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
                        Have a project idea, question, or opportunity? Send me a message
                        or reach out through your preferred platform.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
                    {/* Left: Contact form */}
                    <div className="glass-card p-5 sm:p-8">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="flex size-11 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/10 text-[#8ab8ff]">
                                <Send size={20} />
                            </span>

                            <div>
                                <h3 className="text-lg font-semibold text-[#f1f5fc]">
                                    Send Me a Message
                                </h3>
                                <p className="mt-1 text-xs text-[#91a3bd]">
                                    Fill in the details below.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="text-sm font-medium text-[#d5e2f5]"
                                >
                                    Your Name
                                </label>

                                <div className="relative">
                                    <UserRound
                                        size={17}
                                        className="pointer-events-none absolute left-4 top-[25px] -translate-y-1/2 text-[#7386a2]"
                                    />

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        maxLength={100}
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        placeholder="Enter your name"
                                        className={`${inputClassName} pl-11`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="text-sm font-medium text-[#d5e2f5]"
                                >
                                    Your Email
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={17}
                                        className="pointer-events-none absolute left-4 top-[25px] -translate-y-1/2 text-[#7386a2]"
                                    />

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        maxLength={254}
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder="you@example.com"
                                        className={`${inputClassName} pl-11`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className="text-sm font-medium text-[#d5e2f5]"
                                >
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    required
                                    maxLength={150}
                                    value={subject}
                                    onChange={(event) => setSubject(event.target.value)}
                                    placeholder="What is this about?"
                                    className={inputClassName}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="text-sm font-medium text-[#d5e2f5]"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    minLength={10}
                                    maxLength={5000}
                                    rows={5}
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    placeholder="Write your message here..."
                                    className={`${inputClassName} min-h-32 resize-y`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3987ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#2875ed] hover:shadow-blue-500/30"
                            >
                                {isSending ? (
                                    <>
                                        Sending...
                                        <LoaderCircle size={17} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </>
                                )}
                            </button>

                            <p className="text-xs leading-5 text-[#7386a2]">
                                Your message will be sent securely to my email.
                            </p>
                        </form>
                    </div>

                    {/* Right: Contact cards */}
                    <div>
                        <div className="mb-5">
                            <h3 className="text-lg font-semibold text-[#f1f5fc]">
                                Other Ways to Connect
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#91a3bd]">
                                Choose whichever platform works best for you.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            {contactMethods.map((method) => {
                                const Icon = method.icon;

                                const isExternal = method.href.startsWith("https://");

                                return (
                                    <a
                                        key={method.title}
                                        href={method.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        className="glass-card group flex items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/25 hover:bg-[#12233b]/70 sm:p-5"
                                    >
                                        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/10 transition-colors group-hover:bg-blue-400/15">
                                            <Icon size={21} color={method.iconColor} />
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="block font-semibold text-[#f1f5fc]">
                                                {method.title}
                                            </span>

                                            <span className="mt-1 block text-xs leading-5 text-[#91a3bd]">
                                                {method.description}
                                            </span>

                                            <span className="mt-2 block truncate text-sm text-[#8ab8ff]">
                                                {method.value}
                                            </span>
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            className="shrink-0 text-[#7386a2] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8ab8ff]"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
