"use client";

import { motion } from "framer-motion";

// SVG Loading Spinner
export function LoadingSpinner({ size = 40, color = "#8B5CF6" }: { size?: number; color?: string }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 50 50"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="80 150"
            />
        </motion.svg>
    );
}

// Pulse Loader
export function PulseLoader({ size = 12, color = "#8B5CF6" }: { size?: number; color?: string }) {
    return (
        <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={index}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: index * 0.15,
                        ease: "easeInOut",
                    }}
                    className="rounded-full"
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
}

// Bars Loader
export function BarsLoader({ size = 40, color = "#8B5CF6" }: { size?: number; color?: string }) {
    return (
        <div className="flex gap-1 items-end" style={{ height: size }}>
            {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                    key={index}
                    animate={{
                        height: ["40%", "100%", "40%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "easeInOut",
                    }}
                    className="rounded-sm"
                    style={{
                        width: size / 8,
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
}

// Orbit Loader
export function OrbitLoader({ size = 50, color = "#8B5CF6" }: { size?: number; color?: string }) {
    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* Outer ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{ borderTopColor: color }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            {/* Inner ring */}
            <motion.div
                className="absolute inset-2 rounded-full border-2 border-transparent"
                style={{ borderBottomColor: color, opacity: 0.6 }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            {/* Center dot */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: size / 5,
                    height: size / 5,
                    backgroundColor: color,
                    top: "50%",
                    left: "50%",
                    marginTop: -size / 10,
                    marginLeft: -size / 10,
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
            />
        </div>
    );
}

// Morphing Shape Loader
export function MorphingLoader({ size = 50, color = "#8B5CF6" }: { size?: number; color?: string }) {
    return (
        <motion.div
            animate={{
                borderRadius: ["25%", "50%", "25%"],
                rotate: [0, 180, 360],
            }}
            transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
            }}
            style={{
                width: size,
                height: size,
                backgroundColor: color,
            }}
        />
    );
}

// Typing Loader (chat style)
export function TypingLoader() {
    return (
        <div className="flex gap-1 items-center px-4 py-2 rounded-full bg-white/10">
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [0, -5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeInOut",
                    }}
                    className="w-2 h-2 rounded-full bg-white/60"
                />
            ))}
        </div>
    );
}
