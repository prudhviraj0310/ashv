"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "../ui/TextAnimations";
import RippleButton from "../ui/InteractiveButtons";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#0A0A0F]"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero-bg.png"
                    alt="INVICTA Concert Background"
                    fill
                    priority
                    className="object-cover object-center opacity-60"
                    quality={100}
                />

                {/* Advanced Gradients for that "Cyberpunk Lux" depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#8B5CF6]/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#EC4899]/20 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y: y2, opacity }}
                className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
            >
                {/* Glitch/Cyber Text Effect */}
                <div className="mb-4">
                    <span className="font-[family-name:var(--font-orbitron)] text-[#06B6D4] tracking-[0.3em] text-sm md:text-base font-bold uppercase border border-[#06B6D4]/30 px-4 py-1 rounded-full bg-[#06B6D4]/5 backdrop-blur-sm">
                        March 31 • 2026
                    </span>
                </div>

                {/* Main Title Architecture */}
                <div className="relative mb-6">
                    <h1 className="heading-hero text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        INVICTA
                    </h1>
                    <div className="absolute -top-10 -right-4 md:-right-12 rotate-12">
                        <span className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                            2K26
                        </span>
                    </div>
                </div>

                {/* Animated Subtitle */}
                <div className="h-20 flex items-center justify-center mb-8">
                    <Typewriter
                        text={["ONE-DAY TECH FEST", "INNOVATE • BUILD • COMPETE", "INVICTA 2K26"]}
                        speed={50}
                        waitTime={2000}
                        className="font-[family-name:var(--font-orbitron)] text-xl md:text-3xl text-white/80 font-bold tracking-widest"
                        cursorClassName="bg-[#EC4899]"
                    />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-6 mt-4 items-center">
                    <Link href="/register">
                        <RippleButton
                            className="bg-white text-black font-black text-lg px-12 py-4 rounded-full min-w-[200px]"
                            rippleColor="rgba(0,0,0,0.1)"
                        >
                            REGISTER NOW
                        </RippleButton>
                    </Link>

                    <Link href="/showcase">
                        <button className="group relative px-8 py-4 rounded-full overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 transition-all hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <span className="relative z-10 font-[family-name:var(--font-orbitron)] font-bold text-white tracking-wider flex items-center gap-2">
                                EXPLORE EVENTS
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll to Explore</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Overlay to blend with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent z-20" />
        </section>
    );
}
