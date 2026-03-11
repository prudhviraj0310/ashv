"use client";

import { motion } from "framer-motion";
import { RevealOnScroll } from "./ScrollAnimations";

// INVICTA Event highlights for the ticker
const tickerItems = [
    { id: 1, title: "Hackathon 2K26", category: "Technical", gradient: "from-[#8B5CF6] to-[#6366F1]" },
    { id: 2, title: "Code Golf", category: "Technical", gradient: "from-[#EC4899] to-[#F472B6]" },
    { id: 3, title: "Robo Race", category: "Technical", gradient: "from-[#06B6D4] to-[#22D3EE]" },
    { id: 4, title: "Web-athon", category: "Technical", gradient: "from-[#F59E0B] to-[#FBBF24]" },
    { id: 5, title: "AI Challenge", category: "Technical", gradient: "from-[#10B981] to-[#34D399]" },
    { id: 6, title: "CTF Competition", category: "Technical", gradient: "from-[#EC4899] to-[#8B5CF6]" },
];

function TickerColumn({ items, direction = "up", speed = 25 }: {
    items: typeof tickerItems;
    direction?: "up" | "down";
    speed?: number;
}) {
    const duration = items.length * speed;

    return (
        <div className="relative h-[600px] overflow-hidden mask-gradient-y">
            {/* Gradient Overlay for Fade Effect */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0A0A0F] to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10" />

            <motion.div
                className="flex flex-col gap-6"
                animate={{
                    y: direction === "up" ? [0, "-50%"] : ["-50%", 0],
                }}
                transition={{
                    y: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: duration,
                        ease: "linear",
                    },
                }}
            >
                {/* Duplicate items for seamless loop */}
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <motion.div
                        key={`${item.id}-${index}`}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className={`w-40 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden cursor-pointer relative group bg-gradient-to-br ${item.gradient} p-[1px]`}
                    >
                        <div className="absolute inset-0 bg-[#0A0A0F]/20 backdrop-blur-[2px]" />

                        {/* Content Container */}
                        <div className="h-full w-full bg-[#0A0A0F]/40 backdrop-blur-md rounded-2xl relative overflow-hidden flex flex-col items-center justify-center p-4 text-center group-hover:bg-[#0A0A0F]/20 transition-colors">
                            <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />

                            <span className="relative z-10 text-white/50 text-xs uppercase tracking-[0.2em] mb-3 border border-white/10 px-2 py-1 rounded-full bg-black/20">
                                {item.category}
                            </span>
                            <h3 className="relative z-10 font-[family-name:var(--font-orbitron)] text-white font-bold text-lg md:text-xl drop-shadow-md">
                                {item.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default function VerticalTicker() {
    // Create columns with mixed items for visual variety
    const column1 = [tickerItems[0], tickerItems[1], tickerItems[2], tickerItems[3]];
    const column2 = [tickerItems[4], tickerItems[5], tickerItems[0], tickerItems[1]];
    const column3 = [tickerItems[2], tickerItems[3], tickerItems[4], tickerItems[5]];

    return (
        <section className="py-24 bg-[#0A0A0F] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <span className="inline-block text-[#06B6D4] text-sm uppercase tracking-widest mb-4 font-bold">
                            Highlights
                        </span>
                        <h2 className="heading-section font-[family-name:var(--font-orbitron)]">
                            <span className="neon-text">Event</span>{" "}
                            <span className="text-white">Showcase</span>
                        </h2>
                    </RevealOnScroll>
                </div>

                {/* Ticker Grid */}
                <RevealOnScroll delay={0.2}>
                    <div className="flex justify-center items-center gap-6 md:gap-12 skew-x-[-2deg] transform-gpu">
                        <TickerColumn items={column1} direction="up" speed={20} />
                        <div className="mt-24 md:mt-32">
                            <TickerColumn items={column2} direction="down" speed={25} />
                        </div>
                        <TickerColumn items={column3} direction="up" speed={22} />
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
