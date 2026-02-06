"use client"

import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { FlashSplashScreen } from "@/components/FlashSplashScreen"

export const SplashWrapper = ({ children }: { children: React.ReactNode }) => {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <>
            {children}
            <AnimatePresence>
                {showSplash && (
                    <FlashSplashScreen key="splash" onComplete={() => setShowSplash(false)} />
                )}
            </AnimatePresence>
        </>
    );
}
