
"use client";

import { useState, type FormEvent } from "react";
import {
    ArrowUpRight,
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const recipient = "rakibhasan98840@gmail.com";
        const emailSubject = encodeURIComponent(subject);
        const emailBody = encodeURIComponent(
            `Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
        );

        window.location.href =
            `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    };

    const inputClassName =
        "mt-2 w-full rounded-xl border border-white/10 bg-[#080f1d]/80 px-4 py-3 text-sm text-[#f1f5fc] outline-none transition-colors placeholder:text-[#657995] focus:border-[#3987ff]/70 focus:ring-2 focus:ring-blue-500/10";

    return (
        <section
            id="contact"
            className="relative overflow-hidden border-t border-white/[0.06] bg-[#080f1d] section-padding"
        >
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
                                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3987ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#2875ed] hover:shadow-blue-500/30"
                            >
                                Send Message
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </button>

                            <p className="text-xs leading-5 text-[#7386a2]">
                                Submitting opens your email app with the message prepared.
                                You will need to send the email from there.
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
