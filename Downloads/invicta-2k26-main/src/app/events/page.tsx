"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const categories = [
    { id: "all", label: "All Events" },
    { id: "technical", label: "Technical" },
    { id: "non-technical", label: "Non-Technical" },
];

const eventsData = [
    // Technical Events
    { id: 1, title: "Algoverse", category: "technical", description: "Challenges logical thinking, coding, and problem-solving skills through exciting rounds like Puzzle Craft, Code Connect, and Binary World.", prize: "Exciting Prizes", team: "1-3 members", banner: "/events/algoverse.png", registerLink: "https://forms.gle/wSgasixFt4SGpBHJ8" },
    { id: 2, title: "Gradient Gang", category: "technical", description: "Full Stack Web Development event focused on building innovative and responsive web applications using modern web technologies.", prize: "Exciting Prizes", team: "1-4 members", banner: "/events/gradient-gang.png", registerLink: "https://forms.gle/7wFvmdjYjHsF7cs6A" },
    { id: 3, title: "Paper Nova", category: "technical", description: "Technical paper presentation event showcasing innovative ideas, research, and projects in emerging technologies.", prize: "Exciting Prizes", team: "1-3 members", banner: "/events/papernova.png", registerLink: "https://forms.gle/4QCZZzVTxD6pry9R7" },
    { id: 4, title: "The Pixel Alchemist", category: "technical", description: "Image Super-Resolution Challenge — transform low-resolution images into high-resolution visuals using deep learning and AI modeling.", prize: "Exciting Prizes", team: "1-3 members", banner: "/events/pixel-alchemist.png", registerLink: "https://forms.gle/4zANnot6qN4QhBNS9" },
    { id: 5, title: "VisionCipher", category: "technical", description: "AI-powered challenge that transforms images into precise and creative text prompts, highlighting visual analysis and prompt-engineering skills.", prize: "Exciting Prizes", team: "1-3 members", banner: "/events/visioncipher.png", registerLink: "https://forms.gle/x5xszxKahYXK7ffe6" },
    // Non-Technical Events
    { id: 6, title: "E-Sports", category: "non-technical", description: "Thrilling gaming action with BGMI, Free Fire, and Ludo — showcase your skills and compete for victory!", prize: "Exciting Prizes", team: "1-4 members", banner: "/events/esports.jpeg", registerLink: "https://forms.gle/V1TiJpJM3bsdgSLg8" },
    { id: 7, title: "Fast & Furious", category: "non-technical", description: "Fun-filled event packed with crazy games, quick challenges, and exciting tasks that test your speed and teamwork.", prize: "Exciting Prizes", team: "2-4 members", banner: "/events/fast-and-furious.png", registerLink: "https://forms.gle/DoGpN9Zi8qsjdCyK9" },
    { id: 8, title: "Puzzle Pop", category: "non-technical", description: "Test your intelligence through exciting rounds like Brain Boost, Mind Spark, and Secret Search. Crack the codes and solve the puzzles!", prize: "Exciting Prizes", team: "1-3 members", banner: "/events/puzzle-pop.jpeg", registerLink: "https://forms.gle/wtJxn12ZhSuUXaPD6" },
    { id: 9, title: "Reel Riot", category: "non-technical", description: "Creative event encouraging participants to showcase ideas through engaging reels and digital storytelling with themes like Reel vs Real and memes.", prize: "Exciting Prizes", team: "1-3 members", banner: "/events/reelrlot.jpeg", registerLink: "https://forms.gle/FRbiTuYrgpBApjLx8" },
    { id: 10, title: "Screen Spark", category: "non-technical", description: "Thrilling movie-themed competition that challenges participants to identify films, stars, and dialogues through creative and entertaining rounds.", prize: "Exciting Prizes", team: "1-4 members", banner: "/events/screen-spark.jpeg", registerLink: "https://forms.gle/G3YtYTtEaCWpemP3A" },
];

const categoryColors: Record<string, string> = {
    technical: "from-[#8B5CF6] to-[#6366F1]",
    "non-technical": "from-[#EC4899] to-[#F472B6]",
};

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredEvents = activeCategory === "all"
        ? eventsData
        : eventsData.filter(e => e.category === activeCategory);

    useEffect(() => {
        if (!gridRef.current) return;

        gsap.fromTo(
            gridRef.current.querySelectorAll(".event-card"),
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.out",
                immediateRender: false,
            }
        );
    }, [activeCategory]);

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
                        {eventsData.length} Events
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-hero font-[family-name:var(--font-orbitron)] mb-6"
                    >
                        <span className="neon-text">All</span>{" "}
                        <span className="text-white">Events</span>
                    </motion.h1>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="sticky top-16 z-30 py-4 bg-[#0A0A0F]/80 backdrop-blur-xl border-y border-white/5">
                <div className="container-custom">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === cat.id
                                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-glow-purple"
                                    : "glass text-white/70 hover:text-white"
                                    }`}
                            >
                                {cat.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-16">
                <div className="container-custom">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            ref={gridRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filteredEvents.map((event) => (
                                <motion.div
                                    key={event.id}
                                    layout
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="event-card glass-card overflow-hidden cursor-pointer group"
                                >
                                    {/* Banner Image */}
                                    {event.banner && (
                                        <div className="relative w-full h-48 overflow-hidden">
                                            <img
                                                src={event.banner}
                                                alt={event.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] to-transparent" />
                                        </div>
                                    )}

                                    <div className="p-6">
                                    {/* Category Badge */}
                                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[event.category]} text-white text-xs font-semibold mb-4`}>
                                        {event.category}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-orbitron)] group-hover:neon-text transition-all duration-300">
                                        {event.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/50 text-sm mb-4">
                                        {event.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-2 pt-4 border-t border-white/10">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/40">Prize</span>
                                            <span className="text-[#10B981] font-semibold">{event.prize}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/40">Team</span>
                                            <span className="text-white/70">{event.team}</span>
                                        </div>
                                    </div>

                                    {/* Register Button */}
                                    <Link href={event.registerLink} target="_blank" rel="noopener noreferrer" className="mt-4 block">
                                        <motion.button
                                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.5)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white text-sm font-semibold transition-all duration-300"
                                        >
                                            Register Now
                                        </motion.button>
                                    </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Register CTA */}
            <section className="py-16 border-t border-white/5">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)]">
                        Ready to Compete?
                    </h2>
                    <Link href="https://forms.gle/4N1n1bX4YcE4U8u9" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(139, 92, 246, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Register for Events
                        </motion.button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
