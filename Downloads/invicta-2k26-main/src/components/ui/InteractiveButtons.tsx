"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface RippleButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary" | "gradient";
    rippleColor?: string;
}

export default function RippleButton({
    children,
    onClick,
    className = "",
    variant = "primary",
    rippleColor = "rgba(255, 255, 255, 0.3)",
}: RippleButtonProps) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 600);

        onClick?.();
    };

    const variants = {
        primary: "bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white",
        secondary: "bg-white/10 text-white border border-white/20",
        gradient: "bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white",
    };

    return (
        <motion.button
            ref={buttonRef}
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold transition-shadow ${variants[variant]} ${className}`}
            style={{ boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3)" }}
        >
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute w-20 h-20 rounded-full pointer-events-none"
                    style={{
                        left: ripple.x - 40,
                        top: ripple.y - 40,
                        backgroundColor: rippleColor,
                    }}
                />
            ))}
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}

// Magnetic Button
export function MagneticButton({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`inline-block cursor-pointer ${className}`}
        >
            {children}
        </motion.div>
    );
}

// Hold to Confirm Button
export function HoldToConfirmButton({
    children,
    onConfirm,
    holdDuration = 1500,
    className = "",
}: {
    children: React.ReactNode;
    onConfirm: () => void;
    holdDuration?: number;
    className?: string;
}) {
    const [progress, setProgress] = useState(0);
    const [isHolding, setIsHolding] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseDown = () => {
        setIsHolding(true);
        const startTime = Date.now();
        intervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(elapsed / holdDuration, 1);
            setProgress(newProgress);
            if (newProgress >= 1) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                onConfirm();
                setProgress(0);
                setIsHolding(false);
            }
        }, 16);
    };

    const handleMouseUp = () => {
        setIsHolding(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setProgress(0);
    };

    return (
        <motion.button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white ${className}`}
        >
            {/* Progress bar */}
            <motion.div
                className="absolute inset-0 bg-white/30"
                style={{ scaleX: progress, transformOrigin: "left" }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
