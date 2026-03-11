"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Text Animations
import { Typewriter, WavyText, ScatterText, RevealText } from "@/components/ui/TextAnimations";

// Interactive Buttons
import RippleButton, { MagneticButton, HoldToConfirmButton } from "@/components/ui/InteractiveButtons";

// Carousels
import Carousel, { CoverflowCarousel, InfiniteCarousel } from "@/components/ui/Carousel";

// Loaders
import { LoadingSpinner, PulseLoader, BarsLoader, OrbitLoader, MorphingLoader, TypingLoader } from "@/components/ui/Loaders";

// Interactions
import { DraggableCard, ScrollFade, HoverCard3D, NotificationToast, FloatingActionButton } from "@/components/ui/Interactions";

// Scroll Animations
import { ScrollProgress, RevealOnScroll, ParallaxContainer, ScrollZoom } from "@/components/ui/ScrollAnimations";

const carouselItems = [
    { id: 1, title: "Hackathon 2K26", description: "Build the future", gradient: "from-[#8B5CF6] to-[#6366F1]" },
    { id: 2, title: "Robo Race", description: "Build and race", gradient: "from-[#EC4899] to-[#F472B6]" },
    { id: 3, title: "AI Challenge", description: "Push the limits", gradient: "from-[#10B981] to-[#34D399]" },
    { id: 4, title: "Web-athon", description: "Code non-stop", gradient: "from-[#F59E0B] to-[#FBBF24]" },
    { id: 5, title: "CTF Competition", description: "Hack. Defend. Win.", gradient: "from-[#06B6D4] to-[#22D3EE]" },
];

export default function ShowcasePage() {
    const [showNotification, setShowNotification] = useState(false);

    return (
        <main className="bg-[#0A0A0F] min-h-screen pt-24">
            {/* Scroll Progress */}
            <ScrollProgress />

            {/* Hero */}
            <section className="py-20">
                <div className="container-custom text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-[#06B6D4] text-sm uppercase tracking-widest mb-4"
                    >
                        Motion Components
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-hero font-[family-name:var(--font-orbitron)] mb-6"
                    >
                        <span className="neon-text">Animation</span>{" "}
                        <span className="text-white">Showcase</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto"
                    >
                        Explore all the Motion.dev components integrated into INVICTA
                    </motion.p>
                </div>
            </section>

            {/* Text Animations Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <h2 className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-12">
                        <span className="text-white">Text </span>
                        <span className="neon-text-alt">Animations</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Typewriter */}
                        <div className="glass-card p-8 text-center">
                            <h3 className="text-white/50 text-sm uppercase tracking-widest mb-4">Typewriter</h3>
                            <p className="font-[family-name:var(--font-orbitron)] text-2xl text-white">
                                <Typewriter
                                    text={["Welcome to INVICTA 2K26", "One-Day Tech Fest", "Innovate • Build • Compete"]}
                                    className="text-[#8B5CF6]"
                                />
                            </p>
                        </div>

                        {/* Wavy Text */}
                        <div className="glass-card p-8 text-center">
                            <h3 className="text-white/50 text-sm uppercase tracking-widest mb-4">Wavy Text</h3>
                            <WavyText
                                text="INVICTA"
                                className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-[#EC4899]"
                            />
                        </div>

                        {/* Scatter Text */}
                        <div className="glass-card p-8 text-center">
                            <h3 className="text-white/50 text-sm uppercase tracking-widest mb-4">Scatter Text (Hover)</h3>
                            <ScatterText
                                text="HOVER ME"
                                className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-[#06B6D4]"
                            />
                        </div>

                        {/* Reveal Text */}
                        <div className="glass-card p-8 text-center">
                            <h3 className="text-white/50 text-sm uppercase tracking-widest mb-4">Reveal Text</h3>
                            <RevealText
                                text="Tech Innovation Hackathon Excellence"
                                className="font-[family-name:var(--font-orbitron)] text-xl text-[#F59E0B]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Buttons Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <h2 className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-12">
                        <span className="text-white">Interactive </span>
                        <span className="neon-text">Buttons</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        <RippleButton variant="primary">
                            Ripple Effect
                        </RippleButton>

                        <RippleButton variant="gradient">
                            Gradient Ripple
                        </RippleButton>

                        <MagneticButton>
                            <div className="px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/20">
                                Magnetic Button
                            </div>
                        </MagneticButton>

                        <HoldToConfirmButton onConfirm={() => setShowNotification(true)}>
                            Hold to Confirm
                        </HoldToConfirmButton>
                    </div>
                </div>
            </section>

            {/* Loaders Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <h2 className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-12">
                        <span className="text-white">Loading </span>
                        <span className="neon-text-alt">Spinners</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        <div className="glass-card p-6 flex flex-col items-center gap-4">
                            <LoadingSpinner />
                            <span className="text-white/50 text-xs">Spinner</span>
                        </div>
                        <div className="glass-card p-6 flex flex-col items-center gap-4">
                            <PulseLoader />
                            <span className="text-white/50 text-xs">Pulse</span>
                        </div>
                        <div className="glass-card p-6 flex flex-col items-center gap-4">
                            <BarsLoader />
                            <span className="text-white/50 text-xs">Bars</span>
                        </div>
                        <div className="glass-card p-6 flex flex-col items-center gap-4">
                            <OrbitLoader />
                            <span className="text-white/50 text-xs">Orbit</span>
                        </div>
                        <div className="glass-card p-6 flex flex-col items-center gap-4">
                            <MorphingLoader />
                            <span className="text-white/50 text-xs">Morphing</span>
                        </div>
                        <div className="glass-card p-6 flex flex-col items-center gap-4">
                            <TypingLoader />
                            <span className="text-white/50 text-xs">Typing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <h2 className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-12">
                        <span className="text-white">Carousel </span>
                        <span className="neon-text">Carousel</span>
                    </h2>

                    <div className="space-y-16">
                        <div>
                            <h3 className="text-white/50 text-center mb-8 uppercase tracking-widest text-sm">Standard Carousel</h3>
                            <Carousel items={carouselItems} />
                        </div>

                        <div>
                            <h3 className="text-white/50 text-center mb-8 uppercase tracking-widest text-sm">Coverflow Effect</h3>
                            <CoverflowCarousel items={carouselItems} />
                        </div>

                        <div>
                            <h3 className="text-white/50 text-center mb-8 uppercase tracking-widest text-sm">Infinite Loop</h3>
                            <InfiniteCarousel items={carouselItems} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Draggable & 3D Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <h2 className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-12">
                        <span className="text-white">3D & </span>
                        <span className="neon-text-alt">Drag</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        <DraggableCard className="w-48 h-64 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center">
                            <span className="text-white font-bold text-center px-4">
                                Drag Me!
                            </span>
                        </DraggableCard>

                        <HoverCard3D className="w-48 h-64 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#10B981] flex items-center justify-center">
                            <span className="text-white font-bold text-center px-4">
                                3D Hover
                            </span>
                        </HoverCard3D>
                    </div>
                </div>
            </section>

            {/* Scroll Reveal Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <h2 className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-12">
                        <span className="text-white">Scroll </span>
                        <span className="neon-text">Reveals</span>
                    </h2>

                    <div className="space-y-8">
                        <RevealOnScroll direction="up">
                            <div className="glass-card p-8 text-center">
                                <p className="text-white text-xl">Reveal from Bottom ↑</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll direction="left">
                            <div className="glass-card p-8 text-center">
                                <p className="text-white text-xl">Reveal from Right →</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll direction="right">
                            <div className="glass-card p-8 text-center">
                                <p className="text-white text-xl">← Reveal from Left</p>
                            </div>
                        </RevealOnScroll>

                        <ScrollZoom>
                            <div className="glass-card p-8 text-center bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20">
                                <p className="text-white text-xl font-bold">Scroll Zoom Effect</p>
                            </div>
                        </ScrollZoom>
                    </div>
                </div>
            </section>

            {/* Parallax Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container-custom">
                    <h2 className="heading-section font-[family-name:var(--font-orbitron)] text-center mb-12">
                        <span className="text-white">Parallax </span>
                        <span className="neon-text-alt">Layers</span>
                    </h2>

                    <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#0A0A0F] to-[#1a1a2e]">
                        <ParallaxContainer speed={-0.5} className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-[#8B5CF6]/30 blur-3xl" />
                        </ParallaxContainer>
                        <ParallaxContainer speed={0.3} className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 rounded-full bg-[#EC4899]/20 blur-2xl" />
                        </ParallaxContainer>
                        <ParallaxContainer speed={0.5} className="absolute inset-0 flex items-center justify-center">
                            <span className="font-[family-name:var(--font-orbitron)] text-4xl font-bold text-white">
                                PARALLAX
                            </span>
                        </ParallaxContainer>
                    </div>
                </div>
            </section>

            {/* Notification */}
            <AnimatePresence>
                {showNotification && (
                    <NotificationToast
                        message="Action confirmed! 🎉"
                        type="success"
                        onClose={() => setShowNotification(false)}
                    />
                )}
            </AnimatePresence>

            {/* FAB */}
            <FloatingActionButton
                icon={<span className="text-xl">+</span>}
                items={[
                    { icon: "🎨", onClick: () => { }, label: "Showcase" },
                    { icon: "📅", onClick: () => { }, label: "Events" },
                    { icon: "📞", onClick: () => { }, label: "Contact" },
                ]}
            />
        </main>
    );
}
