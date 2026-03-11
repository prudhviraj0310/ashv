"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timeUnits = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {timeUnits.map((unit) => (
                <div
                    key={unit.label}
                    className="glass-card p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center group hover:border-[#8B5CF6]/50 transition-all duration-300"
                >
                    <div className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold neon-text mb-1">
                        {String(unit.value).padStart(2, "0")}
                    </div>
                    <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider">
                        {unit.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
