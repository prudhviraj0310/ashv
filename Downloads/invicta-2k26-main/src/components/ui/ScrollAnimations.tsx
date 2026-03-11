"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Scroll Progress Indicator
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] origin-left z-50"
            style={{ scaleX }}
        />
    );
}

// Scroll Pinning Section
export function ScrollPinSection({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div ref={ref} className={`relative min-h-[200vh] ${className}`}>
            <motion.div
                className="sticky top-0 h-screen flex items-center justify-center"
                style={{ opacity, scale, y }}
            >
                {children}
            </motion.div>
        </div>
    );
}

// Reveal on Scroll
export function RevealOnScroll({
    children,
    direction = "up",
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const directions = {
        up: { y: [100, 0] },
        down: { y: [-100, 0] },
        left: { x: [100, 0] },
        right: { x: [-100, 0] },
    };

    // Use delay to offset the start of the animation within the scroll progress
    // Ensure the start point doesn't exceed 0.9 to guarantee some animation range
    const start = Math.min(delay, 0.9);

    const opacity = useTransform(scrollYProgress, [start, 1], [0, 1]);
    const transform = useTransform(
        scrollYProgress,
        [start, 1],
        (directions[direction] as { [key: string]: number[] })[
        Object.keys(directions[direction])[0]
        ]
    );

    const style = {
        opacity,
        ...(direction === "up" || direction === "down" ? { y: transform } : { x: transform }),
    };

    return (
        <motion.div ref={ref} style={style} className={className}>
            {children}
        </motion.div>
    );
}

// Parallax Container
export function ParallaxContainer({
    children,
    speed = 0.5,
    className = "",
}: {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}

// Scroll Counter
export function ScrollCounter({
    to,
    from = 0,
    duration = 2, // Included for interface compatibility, currently driven by scroll
    suffix = "",
    prefix = "",
    className = "",
}: {
    to: number;
    from?: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const count = useTransform(scrollYProgress, [0, 1], [from, to]);
    const rounded = useTransform(count, (value) => Math.round(value));

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

// Horizontal Scroll Section
export function HorizontalScrollSection({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <div ref={containerRef} className={`relative h-[400vh] ${className}`}>
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                <motion.div className="flex gap-8" style={{ x }}>
                    {children}
                </motion.div>
            </div>
        </div>
    );
}

// Scroll Zoom
export function ScrollZoom({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div ref={ref} style={{ scale, opacity }} className={className}>
            {children}
        </motion.div>
    );
}
