"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
    {
        title: "Technical Coordinators",
        phone: "Madan lakshminadh.A, Ruchitha.P",
        icon: "💻",
    },
    {
        title: "Non-Technical Coordinators",
        phone: "Charan teja reddy. Y, Bhavitha reddy.S",
        icon: "🎭",
    },
    {
        title: "Registrations",
        phone: "+91 9398983918",
        icon: "📝",
    },
    {
        title: "General Enquiries",
        phone: "+91 9398983918",
        icon: "📞",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <main id="main-layout" className="bg-[#0A0A0F] min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16">
                <div className="container-custom text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-[#06B6D4] text-sm uppercase tracking-widest mb-4"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-hero font-[family-name:var(--font-orbitron)] mb-6"
                    >
                        <span className="neon-text">Contact</span>{" "}
                        <span className="text-white">Us</span>
                    </motion.h1>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12">
                <div className="container-custom">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {contactInfo.map((contact, index) => (
                            <motion.a
                                key={contact.title}
                                href={contact.title.includes("Registration") || contact.title.includes("Enquiry") ? `tel:${contact.phone.replace(/\s/g, "")}` : "#"}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-card p-6 text-center group"
                            >
                                <span className="text-4xl mb-4 block">{contact.icon}</span>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {contact.title}
                                </h3>
                                <p className="text-[#06B6D4] group-hover:text-[#22D3EE] transition-colors">
                                    {contact.phone}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-12 border-t border-white/5">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]">
                                Send us a Message
                            </h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="glass-card p-8 text-center"
                                >
                                    <span className="text-6xl mb-4 block">✅</span>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-white/60">
                                        We&apos;ll get back to you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                required
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                            >
                                                <option value="" className="bg-[#12121A]">Select subject</option>
                                                <option value="registration" className="bg-[#12121A]">Registration</option>
                                                <option value="sponsorship" className="bg-[#12121A]">Sponsorship</option>
                                                <option value="general" className="bg-[#12121A]">General Inquiry</option>
                                                <option value="other" className="bg-[#12121A]">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-white/60 text-sm mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors resize-none"
                                            placeholder="Your message..."
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn-primary w-full disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>

                        {/* Map & Address */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]">
                                Visit Us
                            </h2>

                            <div className="glass-card p-6 mb-6">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Madanapalle institute of technology and science
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    angallu, madanapalle<br />
                                    andhra Pradesh
                                </p>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-white/60">
                                        <span className="text-white">Email:</span> invicta2k26@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Map Embed Placeholder */}
                            <div className="aspect-video rounded-2xl overflow-hidden glass">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5881193068775!2d78.49661731482225!3d13.549969690464857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb26eb7e8d0c5c5%3A0x3de07f2a26eb22c!2sMadanapalle%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
