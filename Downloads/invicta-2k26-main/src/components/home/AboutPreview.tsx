"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollCounter, RevealOnScroll } from "../ui/ScrollAnimations";

const stats = [
    { label: "Events", value: 20, suffix: "+" },
    { label: "Participants", value: 3000, suffix: "+", duration: 2.5 },
    { label: "Prizes Worth", value: 3, suffix: "L+" },
    { label: "Hours", value: 12, suffix: "+" },
];

export default function AboutPreview() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0A0A0F]" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/10 blur-[150px] pointer-events-none -translate-y-1/2" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <RevealOnScroll>
                            <span className="inline-block text-[#06B6D4] text-sm uppercase tracking-widest mb-4 font-bold">
                                About The Fest
                            </span>
                            <h2 className="heading-section font-[family-name:var(--font-orbitron)] mb-6">
                                <span className="neon-text">Experience</span>{" "}
                                <span className="text-white">The Thrill</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-6">
                                Experience the enormous excitement at &apos;INVICTA 2K26&apos;,
                                our one-day Technical Fest! Dive into hackathons,
                                coding challenges, robotics, and cutting-edge tech innovations.
                            </p>
                            <p className="text-white/60 leading-relaxed mb-8">
                                Compete with the best minds, build real-world projects,
                                and showcase your technical prowess. Join us for an action-packed
                                day of innovation, learning, and boundless tech fun!
                            </p>
                            <Link href="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-bold text-white relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Learn More</span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </motion.button>
                            </Link>
                        </RevealOnScroll>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <RevealOnScroll key={stat.label} delay={index * 0.1}>
                                <div className="glass-card p-8 text-center group hover:border-[#8B5CF6]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                                    <div className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold neon-text mb-2 flex justify-center">
                                        <ScrollCounter from={0} to={stat.value} duration={stat.duration || 2} />
                                        <span>{stat.suffix}</span>
                                    </div>
                                    <p className="text-white/50 text-sm uppercase tracking-wider group-hover:text-white/80 transition-colors">
                                        {stat.label}
                                    </p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
