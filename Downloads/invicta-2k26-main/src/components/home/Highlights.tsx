"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
    {
        title: "Celebrity Night",
        description: "Star-studded evening with celebrity performances",
        image: "/images/celebrity.jpg",
        tag: "Premium Show",
    },
    {
        title: "Musical Night",
        description: "Live performances from renowned artists",
        image: "/images/musical.jpg",
        tag: "Live Concert",
    },
    {
        title: "DJ Night",
        description: "Dance the night away with top DJs",
        image: "/images/dj.jpg",
        tag: "EDM Party",
    },
    {
        title: "Food Stalls",
        description: "Diverse cuisines from around the country",
        image: "/images/food.jpg",
        tag: "Taste Fest",
    },
];

export default function Highlights() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !scrollRef.current) return;

        const scrollContainer = scrollRef.current;
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        gsap.to(scrollContainer, {
            scrollLeft: scrollWidth,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${scrollWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#0A0A0F] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#EC4899]/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/10 blur-[150px] pointer-events-none" />

            <div className="min-h-screen flex flex-col justify-center py-20">
                {/* Header */}
                <div className="container-custom mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-[#EC4899] text-sm uppercase tracking-widest mb-4"
                    >
                        Don&apos;t Miss
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="heading-section font-[family-name:var(--font-orbitron)]"
                    >
                        <span className="neon-text-alt">Special</span>{" "}
                        <span className="text-white">Highlights</span>
                    </motion.h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 px-8 overflow-x-auto scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 w-[350px] md:w-[450px] group"
                        >
                            <div className="glass-card overflow-hidden h-[400px] relative">
                                {/* Gradient Background (placeholder for image) */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${index % 4 === 0
                                            ? "from-[#8B5CF6]/30 to-[#6366F1]/30"
                                            : index % 4 === 1
                                                ? "from-[#EC4899]/30 to-[#F472B6]/30"
                                                : index % 4 === 2
                                                    ? "from-[#06B6D4]/30 to-[#22D3EE]/30"
                                                    : "from-[#F59E0B]/30 to-[#FBBF24]/30"
                                        } group-hover:scale-110 transition-transform duration-500`}
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Tag */}
                                <div className="absolute top-4 left-4">
                                    <span className="glass px-4 py-1 text-xs uppercase tracking-wider text-white/80">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-orbitron)]">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll Hint */}
                <div className="container-custom mt-8">
                    <p className="text-white/40 text-sm flex items-center gap-2">
                        <span>Scroll to explore</span>
                        <motion.span
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>
                    </p>
                </div>
            </div>
        </section>
    );
}
