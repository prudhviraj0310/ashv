"use client";

import { motion } from "framer-motion";

const tickerItems = [
    "HACKATHON 2K26",
    "ROBO RACE",
    "CODE GOLF",
    "WEB-ATHON",
    "AI CHALLENGE",
    "CTF COMPETITION",
    "PAPER PRESENTATION",
    "POSTER PRESENTATION",
    "MODEL MAKING",
    "STARTUP PITCHING",
];

export default function HorizontalTicker() {
    return (
        <div className="relative py-6 bg-gradient-to-r from-[#8B5CF6]/10 via-[#EC4899]/10 to-[#06B6D4]/10 border-y border-white/10 overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

            {/* Ticker */}
            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{
                    x: [0, -2000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {/* Duplicate items for seamless loop */}
                {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
                    <div key={index} className="flex items-center gap-8">
                        <span className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-bold text-white/80 hover:text-white transition-colors">
                            {item}
                        </span>
                        <span className="text-[#8B5CF6] text-2xl">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// Reverse direction ticker
export function HorizontalTickerReverse() {
    const items = [
        "TECH",
        "CODE",
        "BUILD",
        "INNOVATION",
        "HACKATHON",
        "EXCELLENCE",
        "ROBOTICS",
        "AI",
    ];

    return (
        <div className="relative py-4 bg-black/30 border-y border-white/5 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{
                    x: [-2000, 0],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    },
                }}
            >
                {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
                    <span
                        key={index}
                        className="font-[family-name:var(--font-orbitron)] text-lg text-white/50 uppercase tracking-widest"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

// Sponsors ticker with logos/text
export function SponsorsTicker({ sponsors }: { sponsors: string[] }) {
    return (
        <div className="relative py-8 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

            <motion.div
                className="flex gap-16 items-center whitespace-nowrap"
                animate={{
                    x: [0, -1500],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <span className="font-[family-name:var(--font-orbitron)] text-white/70 font-semibold">
                            {sponsor}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// Announcement ticker with pause on hover
export function AnnouncementTicker({ announcements }: { announcements: string[] }) {
    return (
        <div className="relative py-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] overflow-hidden group">
            <motion.div
                className="flex gap-16 whitespace-nowrap"
                animate={{
                    x: [0, -2000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {[...announcements, ...announcements, ...announcements].map((text, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className="text-white font-semibold">{text}</span>
                        <span className="text-white/60">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
