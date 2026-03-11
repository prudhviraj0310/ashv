"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function ModeExample({
    mode,
    icon,
    state,
}: {
    mode: "sync" | "wait" | "popLayout";
    icon: React.ReactNode;
    state: boolean;
}) {
    const defaultEase: [number, number, number, number] = [0.26, 0.02, 0.23, 0.94];
    const motionProps = {
        style: {
            ...baseCircleStyle,
            backgroundColor: state ? "#8B5CF6" : "transparent",
            color: state ? "#0f1115" : "#f5f5f5",
            border: state ? "2px solid #8B5CF6" : "2px solid rgba(255,255,255,0.3)",
            boxShadow: state ? "0 0 30px rgba(139, 92, 246, 0.5)" : "none",
        },
        initial: { opacity: 0, scale: 0.6 },
        animate: {
            opacity: 1,
            scale: 1,
        },
        exit: {
            opacity: 0,
            scale: 0.8,
        },
        transition: {
            duration: 0.3,
            ease: (mode === "wait" ? [0.02, 0.35, 0.25, 0.99] : defaultEase) as [number, number, number, number],
        },
    };

    return (
        <div style={modeSection}>
            <div style={iconContainer}>
                <AnimatePresence mode={mode}>
                    <motion.div key={String(state)} {...motionProps}>
                        {icon}
                    </motion.div>
                </AnimatePresence>
            </div>
            <code className="font-[family-name:var(--font-orbitron)]" style={modeTitle}>
                {mode}
            </code>
        </div>
    );
}

export default function AnimatePresenceModes() {
    const [state, setState] = useState(true);

    const switchItems = () => {
        setState((prev) => !prev);
    };

    return (
        <div style={container}>
            <div className="text-center mb-8">
                <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white mb-2">
                    Animation Modes
                </h3>
                <p className="text-white/60 text-sm">Click switch to see different animation behaviors</p>
            </div>

            <div style={modesContainer}>
                <ModeExample mode="sync" icon={<SyncIcon />} state={state} />
                <ModeExample mode="wait" icon={<WaitIcon />} state={state} />
                <ModeExample
                    mode="popLayout"
                    icon={<PopLayoutIcon />}
                    state={state}
                />
            </div>

            <motion.button
                style={button}
                onClick={switchItems}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="font-[family-name:var(--font-orbitron)]"
            >
                Switch
            </motion.button>
        </div>
    );
}

function SyncIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
        </svg>
    );
}

function WaitIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2v4" />
            <path d="m16.2 7.8 2.9-2.9" />
            <path d="M18 12h4" />
            <path d="m16.2 16.2 2.9 2.9" />
            <path d="M12 18v4" />
            <path d="m4.9 19.1 2.9-2.9" />
            <path d="M2 12h4" />
            <path d="m4.9 4.9 2.9 2.9" />
        </svg>
    );
}

function PopLayoutIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
            <path d="m21 3-9 9" />
            <path d="M15 3h6v6" />
        </svg>
    );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    color: "#f5f5f5",
    borderRadius: "12px",
    padding: "40px 20px",
};

const modesContainer: React.CSSProperties = {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
};

const modeSection: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
};

const iconContainer: React.CSSProperties = {
    width: "80px",
    height: "80px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

const modeTitle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#a78bfa",
    opacity: "0.9",
};

const button: React.CSSProperties = {
    background: "linear-gradient(135deg, #EC4899, #8B5CF6)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 32px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    outline: "none",
    letterSpacing: "0.05em",
};

const baseCircleStyle: React.CSSProperties = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    willChange: "transform",
    boxSizing: "border-box",
    flexShrink: 0,
};
