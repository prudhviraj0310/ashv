"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface CarouselItem {
    id: number;
    title: string;
    description?: string;
    gradient: string;
}

interface CarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    interval?: number;
}

export default function Carousel({ items, autoPlay = true, interval = 4000 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, items.length]);

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Main Carousel */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`absolute inset-0 bg-gradient-to-br ${items[currentIndex].gradient} flex items-center justify-center`}
                    >
                        <div className="text-center text-white p-8">
                            <h3 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold mb-4">
                                {items[currentIndex].title}
                            </h3>
                            {items[currentIndex].description && (
                                <p className="text-white/80">{items[currentIndex].description}</p>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {items.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-[#8B5CF6]" : "bg-white/30"
                            }`}
                        whileHover={{ scale: 1.2 }}
                        animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>
        </div>
    );
}

// Coverflow Carousel
export function CoverflowCarousel({ items }: { items: CarouselItem[] }) {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2));

    return (
        <div className="relative h-[300px] flex items-center justify-center perspective-[1000px]">
            {items.map((item, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                const isActive = offset === 0;

                return (
                    <motion.div
                        key={item.id}
                        onClick={() => setCurrentIndex(index)}
                        animate={{
                            x: offset * 150,
                            z: -absOffset * 100,
                            rotateY: offset * -15,
                            scale: isActive ? 1 : 0.8,
                            opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`absolute w-[200px] h-[250px] rounded-xl cursor-pointer bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                        style={{
                            transformStyle: "preserve-3d",
                            zIndex: items.length - absOffset,
                        }}
                    >
                        <span className="font-[family-name:var(--font-orbitron)] text-white font-bold text-center px-4">
                            {item.title}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}

// Infinite Loop Carousel
export function InfiniteCarousel({ items }: { items: CarouselItem[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="overflow-hidden" ref={containerRef}>
            <motion.div
                className="flex gap-6"
                animate={{ x: [0, -50 * items.length * 4] }}
                transition={{
                    repeat: Infinity,
                    duration: items.length * 5,
                    ease: "linear",
                }}
            >
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <motion.div
                        key={`${item.id}-${index}`}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className={`flex-shrink-0 w-[200px] h-[120px] rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                    >
                        <span className="font-[family-name:var(--font-orbitron)] text-white font-bold text-sm text-center px-4">
                            {item.title}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
