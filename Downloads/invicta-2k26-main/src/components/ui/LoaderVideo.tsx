"use client";

import { useState, useRef } from "react";

interface LoaderVideoProps {
    videoSrc?: string;
    onComplete?: () => void;
}

export default function LoaderVideo({
    videoSrc = "/ashv-loader.mp4",
    onComplete,
}: LoaderVideoProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoEnd = () => {
        // Start fade out when video ends
        setIsFadingOut(true);

        // Remove loader completely after fade animation (500ms)
        setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
        }, 500);
    };

    // Don't render if loading is complete
    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0F] transition-opacity duration-500 ease-out ${isFadingOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
