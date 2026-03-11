"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import CountdownTimer from "@/components/ui/CountdownTimer";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { useLoader } from "@/context/LoaderContext";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { loadingComplete } = useLoader();

  // Target date: March 31, 2026
  const targetDate = new Date("2026-03-31T00:00:00");

  useEffect(() => {
    if (!heroRef.current || !loadingComplete) return;

    // GSAP Timeline for "Cold Start" effect - text assembles like a high-end machine
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      delay: 0.2
    });

    // Loader gate slides up
    tl.to(".loader-gate", {
      yPercent: -100,
      duration: 1.2,
    })
      // Hero title characters reveal with skew
      .from(".hero-title-char", {
        y: 120,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        skewY: 7,
      }, "-=0.6")
      // Tagline fades in
      .from(".hero-tagline", {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, "-=0.5")
      // Hero glow effect scales in
      .from(".hero-glow", {
        scale: 0.5,
        opacity: 0,
        duration: 1.5
      }, "-=1")
      // Description and countdown appear
      .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.6
      }, "-=0.8")
      .from(".hero-countdown", {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.8
      }, "-=0.4")
      // CTA buttons slide in
      .from(".hero-cta", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6
      }, "-=0.4")
      // Nav items animate in from top
      .from(".nav-item", {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5
      }, "-=0.8")
      // Scroll indicator appears
      .from(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 0.6
      }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [loadingComplete]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Loader Gate - slides up on load */}
      <div
        ref={loaderRef}
        className="loader-gate fixed inset-0 z-50 bg-[#0A0A0F] flex items-center justify-center will-change-transform"
      >
        <div className="font-[family-name:var(--font-orbitron)] text-4xl neon-text animate-pulse uppercase">
          INVICTA
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Hero Glow - animated glow effect */}
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8B5CF6]/20 blur-[150px] pointer-events-none will-change-transform" />
      <div className="hero-glow absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/15 blur-[100px] pointer-events-none will-change-transform" />

      {/* Particles */}
      <ParticleBackground />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-block mb-6 hero-description">
          <span className="glass px-6 py-2 text-sm text-white/80 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            March 2026 • MITS, Madanapalle
          </span>
        </div>

        {/* Title with individual character spans for GSAP */}
        <h1 className="heading-hero font-[family-name:var(--font-orbitron)] mb-4 overflow-hidden">
          <span className="inline-block">
            {"INVICTA".split("").map((char, i) => (
              <span
                key={i}
                className="hero-title-char inline-block neon-text will-change-transform"
                style={{ opacity: 0 }} // Initially hidden for animation
              >
                {char}
              </span>
            ))}
          </span>
          <span className="inline-block ml-4">
            {"2K26".split("").map((char, i) => (
              <span
                key={i}
                className="hero-title-char inline-block text-white will-change-transform"
                style={{ opacity: 0 }} // Initially hidden for animation
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        {/* Tagline */}
        <p className="hero-tagline text-xl md:text-2xl text-white/70 mb-4 font-[family-name:var(--font-orbitron)] will-change-transform">
          One-Day Tech Fest
        </p>

        {/* Description */}
        <p className="hero-description text-white/50 max-w-2xl mx-auto mb-12 text-lg will-change-transform">
          Experience the enormous excitement at the one-day
          Technical Fest!
        </p>

        {/* Countdown */}
        <div className="hero-countdown mb-12 will-change-transform">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-6">
            Countdown to INVICTA 2K26
          </p>
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* CTA Buttons - using Framer Motion for interactions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/events" className="hero-cta">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore Events
            </motion.button>
          </Link>
          <Link href="https://forms.gle/4N1n1bX4YcE4U8u9" target="_blank" rel="noopener noreferrer" className="hero-cta">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Register Now
            </motion.button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
