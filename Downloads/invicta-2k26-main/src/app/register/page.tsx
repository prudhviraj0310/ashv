"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const events = [
    // Technical
    { id: "algoverse", name: "Algoverse", category: "Technical", fee: 200, registerLink: "https://forms.gle/wSgasixFt4SGpBHJ8" },
    { id: "gradientgang", name: "Gradient Gang", category: "Technical", fee: 300, registerLink: "https://forms.gle/7wFvmdjYjHsF7cs6A" },
    { id: "papernova", name: "Paper Nova", category: "Technical", fee: 100, registerLink: "https://forms.gle/4QCZZzVTxD6pry9R7" },
    { id: "pixelalchemist", name: "The Pixel Alchemist", category: "Technical", fee: 200, registerLink: "https://forms.gle/4zANnot6qN4QhBNS9" },
    { id: "visioncipher", name: "VisionCipher", category: "Technical", fee: 200, registerLink: "https://forms.gle/x5xszxKahYXK7ffe6" },
    // Non-Technical
    { id: "esports", name: "E-Sports", category: "Non-Technical", fee: 150, registerLink: "https://forms.gle/V1TiJpJM3bsdgSLg8" },
    { id: "fastfurious", name: "Fast & Furious", category: "Non-Technical", fee: 100, registerLink: "https://forms.gle/DoGpN9Zi8qsjdCyK9" },
    { id: "puzzlepop", name: "Puzzle Pop", category: "Non-Technical", fee: 100, registerLink: "https://forms.gle/wtJxn12ZhSuUXaPD6" },
    { id: "reelriot", name: "Reel Riot", category: "Non-Technical", fee: 100, registerLink: "https://forms.gle/FRbiTuYrgpBApjLx8" },
    { id: "screenspark", name: "Screen Spark", category: "Non-Technical", fee: 100, registerLink: "https://forms.gle/G3YtYTtEaCWpemP3A" },
];

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        selectedEvents: [] as string[],
    });

    const handleEventToggle = (eventId: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedEvents: prev.selectedEvents.includes(eventId)
                ? prev.selectedEvents.filter((e) => e !== eventId)
                : [...prev.selectedEvents, eventId],
        }));
    };

    const totalFee = formData.selectedEvents.reduce((sum, eventId) => {
        const event = events.find((e) => e.id === eventId);
        return sum + (event?.fee || 0);
    }, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Handle final submission
            alert("Registration submitted! You will receive a confirmation email.");
        }
    };

    return (
        <main id="main-layout" className="bg-[#0A0A0F] min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16">
                <div className="container-custom text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-[#10B981] text-sm uppercase tracking-widest mb-4"
                    >
                        Join INVICTA 2K26
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-hero font-[family-name:var(--font-orbitron)] mb-6"
                    >
                        <span className="text-white">Register</span>{" "}
                        <span className="neon-text">Now</span>
                    </motion.h1>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="py-8">
                <div className="container-custom max-w-3xl">
                    <div className="flex items-center justify-between mb-12">
                        {["Personal Info", "Select Events", "Review & Pay"].map((label, index) => (
                            <div key={label} className="flex items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step > index + 1
                                            ? "bg-[#10B981] text-white"
                                            : step === index + 1
                                                ? "bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white"
                                                : "glass text-white/50"
                                        }`}
                                >
                                    {step > index + 1 ? "✓" : index + 1}
                                </div>
                                <span
                                    className={`ml-3 hidden sm:block ${step >= index + 1 ? "text-white" : "text-white/50"
                                        }`}
                                >
                                    {label}
                                </span>
                                {index < 2 && (
                                    <div
                                        className={`w-12 sm:w-24 h-1 mx-4 rounded-full transition-all duration-300 ${step > index + 1 ? "bg-[#10B981]" : "bg-white/10"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="py-8">
                <div className="container-custom max-w-3xl">
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-card p-8"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-white/60 text-sm mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">Phone *</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">College *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.college}
                                                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                                placeholder="Your college name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">Year *</label>
                                            <select
                                                required
                                                value={formData.year}
                                                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white focus:border-[#8B5CF6] focus:outline-none transition-colors"
                                            >
                                                <option value="" className="bg-[#12121A]">Select year</option>
                                                <option value="1" className="bg-[#12121A]">1st Year</option>
                                                <option value="2" className="bg-[#12121A]">2nd Year</option>
                                                <option value="3" className="bg-[#12121A]">3rd Year</option>
                                                <option value="4" className="bg-[#12121A]">4th Year</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Select Events */}
                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-card p-8"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Select Events</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {events.map((event) => (
                                        <motion.div
                                            key={event.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleEventToggle(event.id)}
                                            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${formData.selectedEvents.includes(event.id)
                                                    ? "bg-gradient-to-r from-[#8B5CF6]/20 to-[#06B6D4]/20 border-2 border-[#8B5CF6]"
                                                    : "glass border border-white/10 hover:border-white/20"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-white font-semibold">{event.name}</h3>
                                                    <p className="text-white/50 text-sm">{event.category}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[#10B981] font-bold">₹{event.fee}</p>
                                                    {formData.selectedEvents.includes(event.id) && (
                                                        <span className="text-[#8B5CF6] text-sm">✓ Selected</span>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 glass rounded-xl flex justify-between items-center">
                                    <span className="text-white/60">
                                        {formData.selectedEvents.length} events selected
                                    </span>
                                    <span className="text-2xl font-bold neon-text">₹{totalFee}</span>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Review */}
                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-card p-8"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Review & Pay</h2>
                                <div className="space-y-6">
                                    <div className="p-4 glass rounded-xl">
                                        <h3 className="text-white/60 text-sm mb-2">Personal Details</h3>
                                        <p className="text-white">{formData.name}</p>
                                        <p className="text-white/70">{formData.email} • {formData.phone}</p>
                                        <p className="text-white/70">{formData.college} • Year {formData.year}</p>
                                    </div>
                                    <div className="p-4 glass rounded-xl">
                                        <h3 className="text-white/60 text-sm mb-2">Selected Events</h3>
                                        <div className="space-y-2">
                                            {formData.selectedEvents.map((eventId) => {
                                                const event = events.find((e) => e.id === eventId);
                                                return event ? (
                                                    <div key={event.id} className="flex justify-between">
                                                        <span className="text-white">{event.name}</span>
                                                        <span className="text-white/70">₹{event.fee}</span>
                                                    </div>
                                                ) : null;
                                            })}
                                            <div className="pt-4 mt-4 border-t border-white/10 flex justify-between">
                                                <span className="text-white font-bold">Total</span>
                                                <span className="text-2xl font-bold neon-text">₹{totalFee}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            {step > 1 && (
                                <motion.button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-outline"
                                >
                                    ← Previous
                                </motion.button>
                            )}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(139, 92, 246, 0.6)" }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary ml-auto"
                                disabled={step === 2 && formData.selectedEvents.length === 0}
                            >
                                {step === 3 ? "Complete Registration" : "Next →"}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
