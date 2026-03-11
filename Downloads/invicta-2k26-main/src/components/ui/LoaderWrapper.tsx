"use client";

import { useState } from "react";
import LoaderVideo from "./LoaderVideo";
import { LoaderProvider, useLoader } from "@/context/LoaderContext";

interface LoaderWrapperProps {
  children: React.ReactNode;
  videoSrc?: string;
}

function LoaderContent({ children, videoSrc }: LoaderWrapperProps) {
  const { loadingComplete, setLoadingComplete } = useLoader();
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleLoaderComplete = () => {
    setIsContentVisible(true);
    setLoadingComplete(true);
  };

  return (
    <>
      <LoaderVideo
        videoSrc={videoSrc}
        onComplete={handleLoaderComplete}
      />
      <div
        className={`transition-opacity duration-500 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default function LoaderWrapper(props: LoaderWrapperProps) {
  return (
    <LoaderProvider>
      <LoaderContent {...props} />
    </LoaderProvider>
  );
}
