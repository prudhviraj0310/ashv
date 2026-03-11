"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sponsorTiers = [
    {
        tier: "Title Sponsor",
        price: "₹5,00,000+",
        color: "from-[#F59E0B] to-[#EAB308]",
        benefits: [
            "Prime logo placement on all materials",
            "Exclusive brand activation zone",
            "Main stage naming rights",
            "Social media feature posts",
            "VIP passes (20)",
            "Direct engagement with 5000+ students",
        ],
        sponsors: [{ name: "Your Brand Here", logo: "🏆" }],
    },
    {
        tier: "Gold Sponsor",
        price: "₹2,00,000+",
        color: "from-[#8B5CF6] to-[#6366F1]",
        benefits: [
            "Logo on main banners",
            "Branded booth space",
            "Event category sponsorship",
            "Social media mentions",
            "VIP passes (10)",
        ],
        sponsors: [
            { name: "Sponsor 1", logo: "🥇" },
            { name: "Sponsor 2", logo: "🥇" },
        ],
    },
    {
        tier: "Silver Sponsor",
        price: "₹1,00,000+",
        color: "from-[#06B6D4] to-[#22D3EE]",
        benefits: [
            "Logo on event materials",
            "Booth space in fest area",
            "Social media mention",
            "VIP passes (5)",
        ],
        sponsors: [
            { name: "Sponsor 3", logo: "🥈" },
            { name: "Sponsor 4", logo: "🥈" },
            { name: "Sponsor 5", logo: "🥈" },
        ],
    },
    {
        tier: "Event Partner",
        price: "₹50,000+",
        color: "from-[#10B981] to-[#34D399]",
        benefits: [
            "Logo on specific event",
            "Mentions during event",
            "Passes (3)",
        ],
        sponsors: [
            { name: "Partner 1", logo: "🤝" },
            { name: "Partner 2", logo: "🤝" },
            { name: "Partner 3", logo: "🤝" },
            { name: "Partner 4", logo: "🤝" },
        ],
    },
];

export default function SponsorsPage() {
    return (
        <main id="main-layout" className="bg-[#0A0A0F] min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16">
                <div className="container-custom text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-[#F59E0B] text-sm uppercase tracking-widest mb-4"
                    >
                        Partner With Us
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-hero font-[family-name:var(--font-orbitron)] mb-6"
                    >
                        <span className="text-white">Our</span>{" "}
                        <span className="neon-text">Sponsors</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-lg"
                    >
                        Join hands with INVICTA 2K26 and connect with over 3000 talented students
                        from across the nation
                    </motion.p>
                </div>
            </section>

            {/* Sponsor Tiers */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="space-y-16">
                        {sponsorTiers.map((tier, tierIndex) => (
                            <motion.div
                                key={tier.tier}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: tierIndex * 0.1 }}
                            >
                                {/* Tier Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                                    <div>
                                        <h2 className={`text-3xl font-bold font-[family-name:var(--font-orbitron)] bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                                            {tier.tier}
                                        </h2>
                                        <p className="text-white/60 mt-1">{tier.price}</p>
                                    </div>
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`mt-4 md:mt-0 px-6 py-2 rounded-full bg-gradient-to-r ${tier.color} text-white font-semibold`}
                                        >
                                            Become a {tier.tier}
                                        </motion.button>
                                    </Link>
                                </div>

                                <div className="grid lg:grid-cols-3 gap-8">
                                    {/* Benefits */}
                                    <div className="glass-card p-6">
                                        <h3 className="text-white font-semibold mb-4">Benefits</h3>
                                        <ul className="space-y-3">
                                            {tier.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                                                    <span className={`text-transparent bg-gradient-to-r ${tier.color} bg-clip-text`}>
                                                        ✓
                                                    </span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Current Sponsors */}
                                    <div className="lg:col-span-2">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {tier.sponsors.map((sponsor, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -5, scale: 1.02 }}
                                                    className="glass p-6 text-center"
                                                >
                                                    <span className="text-4xl mb-2 block">{sponsor.logo}</span>
                                                    <p className="text-white/70 text-sm">{sponsor.name}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]">
                            Ready to Sponsor?
                        </h2>
                        <p className="text-white/60 mb-8">
                            Get in touch with our sponsorship team and let&apos;s create something amazing together.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(245, 158, 11, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EAB308] text-white font-bold text-lg shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                            >
                                Contact Sponsorship Team
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
