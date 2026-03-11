"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HoverCard3D } from "../ui/Interactions";
import { RevealOnScroll } from "../ui/ScrollAnimations";

const events = [
    {
        id: "technical",
        title: "Technical",
        description: "Showcase your coding skills, robotics, and tech innovations.",
        icon: "💻",
        gradient: "from-[#8B5CF6] to-[#6366F1]",
        count: "Technical Events",
    },
    {
        id: "non-technical",
        title: "Non-Technical",
        description: "Express yourself through various non-technical events.",
        icon: "🎭",
        gradient: "from-[#EC4899] to-[#F472B6]",
        count: "Non-Technical Events",
    },
];

export default function EventCards() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <span className="inline-block text-[#06B6D4] text-sm uppercase tracking-widest mb-4 font-bold">
                            What&apos;s Happening
                        </span>
                        <h2 className="heading-section font-[family-name:var(--font-orbitron)] mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                                Event Categories
                            </span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] mx-auto rounded-full" />
                    </RevealOnScroll>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <RevealOnScroll key={event.id} delay={index * 0.1}>
                            <Link href={`/events#${event.id}`}>
                                <HoverCard3D className="h-full">
                                    <div className="bg-[#12121A]/80 backdrop-blur-xl border border-white/5 p-8 rounded-2xl h-full flex flex-col group hover:border-white/10 transition-all duration-300 relative overflow-hidden">

                                        {/* Gradient Background on Hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg shadow-black/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                            {event.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed flex-grow">
                                            {event.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                                            <span className="py-1 px-3 rounded-full bg-white/5 text-xs text-white/40 border border-white/5">
                                                {event.count}
                                            </span>
                                            <span className="text-[#06B6D4] text-sm font-bold group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                                                Explore
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </HoverCard3D>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-16">
                    <RevealOnScroll>
                        <Link href="/events">
                            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 active:scale-95">
                                View Full Schedule
                            </button>
                        </Link>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
