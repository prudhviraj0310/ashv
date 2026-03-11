"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import AnimatePresenceModes from "@/components/ui/AnimatePresenceModes";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { label: "Events", value: "20+" },
    { label: "Participants", value: "3000+" },
    { label: "Prize Pool", value: "₹3L+" },
    { label: "Hours", value: "12+" },
];

const timeline = [
    { year: "2015", title: "The Beginning", description: "INVICTA was born as a small departmental tech fest" },
    { year: "2017", title: "Growing Strong", description: "Expanded to inter-college level with 1000+ participants" },
    { year: "2019", title: "State Recognition", description: "Became one of the largest tech fests in Andhra Pradesh" },
    { year: "2023", title: "Going National", description: "Attracted participants from across India" },
    { year: "2026", title: "INVICTA 2K26", description: "Bigger, better, and more exciting than ever!" },
];

export default function AboutPage() {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!timelineRef.current) return;

        const items = timelineRef.current.querySelectorAll(".timeline-item");

        items.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                        immediateRender: false,
                    },
                }
            );
        });
    }, []);

    return (
        <main id="main-layout" className="bg-[#0A0A0F] min-h-screen pt-24">
            {/* Hero */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block text-[#06B6D4] text-sm uppercase tracking-widest mb-4"
                            >
                                Our Story
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="heading-hero font-[family-name:var(--font-orbitron)] mb-6"
                            >
                                <span className="neon-text">About</span>{" "}
                                <span className="text-white">INVICTA</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-white/60 text-lg leading-relaxed mb-6"
                            >
                                INVICTA 2K26 is the annual Technical Fest of
                                Madanapalle Institute of Technology & Science (MITS). What started as a small
                                departmental gathering has evolved into one of the most anticipated college
                                tech fests in Andhra Pradesh.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-white/50 leading-relaxed"
                            >
                                Every year, thousands of students from across the nation converge at our campus
                                to showcase their talents in hackathons, coding challenges, robotics,
                                AI competitions, and startup pitching. INVICTA is not just a fest – it&apos;s an
                                experience that transforms lives and creates memories that last forever.
                            </motion.p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="glass-card p-8 text-center"
                                >
                                    <div className="font-[family-name:var(--font-orbitron)] text-4xl font-bold neon-text mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-white/50 uppercase tracking-wider text-sm">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About MITS */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-section font-[family-name:var(--font-orbitron)] mb-8"
                        >
                            <span className="text-white">About </span>
                            <span className="neon-text-alt">MITS</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60 text-lg leading-relaxed mb-6"
                        >
                            Madanapalle Institute of Technology & Science (MITS) is a premier engineering
                            institution located in the serene town of Madanapalle, Andhra Pradesh. Established
                            with a vision to provide quality education, MITS has grown to become one of the
                            top engineering colleges in the region.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/50 leading-relaxed"
                        >
                            With state-of-the-art infrastructure, experienced faculty, and a vibrant campus
                            life, MITS nurtures the next generation of engineers, innovators, and leaders.
                            INVICTA is a testament to the creativity and spirit of our students.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-16"
                    >
                        <span className="neon-text">Our</span>{" "}
                        <span className="text-white">Journey</span>
                    </motion.h2>

                    <div ref={timelineRef} className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B5CF6] via-[#06B6D4] to-[#EC4899] hidden md:block" />

                        {timeline.map((item, index) => (
                            <div
                                key={item.year}
                                className={`timeline-item relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="glass-card p-6"
                                    >
                                        <span className="text-[#8B5CF6] font-[family-name:var(--font-orbitron)] text-2xl font-bold">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
                                        <p className="text-white/50 text-sm mt-2">{item.description}</p>
                                    </motion.div>
                                </div>

                                {/* Center Dot */}
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] shadow-glow-purple" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Animation Demo */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-8"
                    >
                        <span className="text-white">Interactive </span>
                        <span className="neon-text">Demo</span>
                    </motion.h2>
                    <AnimatePresenceModes />
                </div>
            </section>
        </main>
    );
}
