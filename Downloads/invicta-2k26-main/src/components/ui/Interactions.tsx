"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Draggable Card
export function DraggableCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    return (
        <motion.div
            drag
            dragElastic={0.1}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            style={{ x, y, rotateX, rotateY }}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
            className={`cursor-grab ${className}`}
        >
            {children}
        </motion.div>
    );
}

// Staggered List
export function StaggeredList({
    items,
    renderItem,
}: {
    items: unknown[];
    renderItem: (item: unknown, index: number) => React.ReactNode;
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {items.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {renderItem(item, index)}
                </motion.div>
            ))}
        </motion.div>
    );
}

// Scroll Fade
export function ScrollFade({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Hover Card with 3D effect
export function HoverCard3D({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]));
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]));

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xVal = (e.clientX - rect.left) / rect.width - 0.5;
        const yVal = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xVal);
        y.set(yVal);
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`perspective-[1000px] ${className}`}
        >
            {children}
        </motion.div>
    );
}

// Notification Toast
export function NotificationToast({
    message,
    type = "info",
    onClose,
}: {
    message: string;
    type?: "info" | "success" | "warning" | "error";
    onClose: () => void;
}) {
    const colors = {
        info: "from-[#06B6D4] to-[#3B82F6]",
        success: "from-[#10B981] to-[#06B6D4]",
        warning: "from-[#F59E0B] to-[#EF4444]",
        error: "from-[#EF4444] to-[#EC4899]",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className={`fixed top-6 left-1/2 px-6 py-4 rounded-xl text-white font-medium z-50 bg-gradient-to-r ${colors[type]} shadow-2xl`}
        >
            <div className="flex items-center gap-3">
                <span>{message}</span>
                <button onClick={onClose} className="text-white/70 hover:text-white">
                    ✕
                </button>
            </div>
        </motion.div>
    );
}

// Floating Action Button
export function FloatingActionButton({
    icon,
    onClick,
    items,
}: {
    icon: React.ReactNode;
    onClick?: () => void;
    items?: { icon: React.ReactNode; onClick: () => void; label: string }[];
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Menu items */}
            {items && (
                <motion.div className="absolute bottom-16 right-0 flex flex-col gap-3">
                    {items.map((item, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                            transition={{ delay: isOpen ? index * 0.1 : 0 }}
                            onClick={item.onClick}
                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            title={item.label}
                        >
                            {item.icon}
                        </motion.button>
                    ))}
                </motion.div>
            )}

            {/* Main FAB */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={items ? () => setIsOpen(!isOpen) : onClick}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white shadow-lg"
                style={{ boxShadow: "0 10px 40px rgba(139, 92, 246, 0.4)" }}
            >
                <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
                    {icon}
                </motion.div>
            </motion.button>
        </div>
    );
}
