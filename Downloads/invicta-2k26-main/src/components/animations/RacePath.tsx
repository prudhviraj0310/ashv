"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export default function RacePath() {
    const pathRef = useRef<SVGPathElement>(null);
    const streakRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!pathRef.current || !streakRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            // Desktop: Full Path Animation with the "streak" following the race path
            gsap.set(streakRef.current, {
                xPercent: -50,
                yPercent: -50,
                immediateRender: false
            });

            gsap.to(streakRef.current, {
                scrollTrigger: {
                    trigger: "#main-layout",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    immediateRender: false,
                },
                motionPath: {
                    path: pathRef.current!,
                    align: pathRef.current!,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                },
                ease: "none",
            });
        });

        mm.add("(max-width: 1023px)", () => {
            // Mobile: Simple Top Progress Bar (Better for Battery)
            gsap.to(".mobile-progress-bar", {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    immediateRender: false,
                },
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-40" id="race-path-container">
            {/* Desktop: SVG Race Path */}
            <svg
                className="hidden lg:block w-full h-full opacity-[0.08]"
                viewBox="0 0 1920 4000"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="50%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                </defs>
                <path
                    ref={pathRef}
                    d="M -100,100 
             C 400,200 800,100 1000,400 
             S 1400,800 1000,1200 
             S 200,1600 800,2000 
             S 1600,2400 1000,2800 
             S 200,3200 1000,3600
             S 1800,3800 2000,4000"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                />
            </svg>

            {/* Desktop: The Streak/Horse that follows the path */}
            <div
                ref={streakRef}
                className="hidden lg:block absolute will-change-transform"
                style={{ top: 0, left: 0 }}
            >
                <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-[#06B6D4] rounded-full blur-xl opacity-60" />
                    {/* Core streak */}
                    <div className="relative w-4 h-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
                    {/* Trail */}
                    <div className="absolute top-1/2 right-full -translate-y-1/2 w-12 h-1 bg-gradient-to-l from-[#06B6D4] to-transparent rounded-full" />
                </div>
            </div>

            {/* Mobile: Top Progress Bar */}
            <div className="mobile-progress-bar lg:hidden fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#EC4899] origin-left scale-x-0 will-change-transform" />
        </div>
    );
}
