"use client";

import { SponsorsTicker } from "../ui/HorizontalTicker";

const sponsors = [
    "Google", "Microsoft", "Amazon", "Tesla", "SpaceX", "Apple", "Meta", "Netflix"
];

export default function SponsorsCarousel() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0A0F]/50">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />
            <SponsorsTicker sponsors={sponsors} />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F472B6]/20 to-transparent" />
        </section>
    );
}
