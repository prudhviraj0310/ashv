"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? "py-4" : "py-6"
                }`}
        >
            {/* Desktop Navbar Island */}
            <div className={`hidden lg:flex items-center gap-1 p-2 rounded-full border transition-all duration-300 ${scrolled
                ? "bg-[#12121A]/80 backdrop-blur-xl border-white/10 shadow-lg shadow-purple-500/5"
                : "bg-transparent border-transparent"
                }`}>
                {/* Logo */}
                <Link href="/" className="px-6 py-2">
                    <span className="font-[family-name:var(--font-orbitron)] font-bold text-xl tracking-wider uppercase">
                        INVICTA<span className="text-[#06B6D4]">2K26</span>
                    </span>
                </Link>

                <div className="w-[1px] h-6 bg-white/10 mx-2" />

                {/* Links */}
                <nav className="flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={`relative z-10 ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}>
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA */}
                <Link href="/register" className="ml-2 pr-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-sm font-bold shadow-lg shadow-purple-500/20"
                    >
                        Register
                    </motion.button>
                </Link>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden w-full px-4">
                <div className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${scrolled || isOpen
                    ? "bg-[#12121A]/90 backdrop-blur-xl border-white/10"
                    : "bg-transparent border-transparent"
                    }`}>
                    <Link href="/">
                        <span className="font-[family-name:var(--font-orbitron)] font-bold text-xl uppercase">
                            INVICTA<span className="text-[#06B6D4]">2K26</span>
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5"
                    >
                        <div className="flex flex-col gap-1.5 w-5">
                            <motion.span
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                                className="w-full h-0.5 bg-white origin-center"
                            />
                            <motion.span
                                animate={{ opacity: isOpen ? 0 : 1 }}
                                className="w-full h-0.5 bg-white"
                            />
                            <motion.span
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                                className="w-full h-0.5 bg-white origin-center"
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -20, height: 0 }}
                            className="overflow-hidden mt-2"
                        >
                            <div className="bg-[#12121A]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${pathname === link.href
                                                ? "bg-white/10 text-white"
                                                : "text-white/60 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-2 border-t border-white/5 mt-2"
                                >
                                    <Link href="/register" onClick={() => setIsOpen(false)}>
                                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-bold">
                                            Register Now
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
