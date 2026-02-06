"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const MotionImage = motion(Image)

export const FlashSplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [isOpening, setIsOpening] = useState(false)

    useEffect(() => {
        // Significantly reduced timers for better performance metrics
        const timer1 = setTimeout(() => setIsOpening(true), 600)
        const timer2 = setTimeout(() => onComplete(), 1500)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [onComplete])

    // Unified deep formal navy background color
    const BG_COLOR = "#001A4D"

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none bg-transparent">
            {/* Logo Center with Fade-Out */}
            <AnimatePresence>
                {!isOpening && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ willChange: "transform, opacity" }}
                        className="absolute inset-0 z-[20] flex items-center justify-center p-8"
                    >
                        <div className="relative group">
                            {/* Technical Glow Backdrop */}
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150 animate-pulse" />

                            <MotionImage
                                src="/jr.png"
                                alt="JR Smart Logo"
                                width={400}
                                height={400}
                                priority
                                fetchPriority="high"
                                className="w-64 md:w-96 h-auto relative z-10 drop-shadow-[0_0_50px_rgba(0,51,204,0.5)]"
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top curtain */}
            <motion.div
                initial={{ y: 0 }}
                animate={isOpening ? { y: "-100%" } : { y: 0 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                style={{
                    backgroundColor: BG_COLOR,
                    zIndex: 10,
                    pointerEvents: "auto",
                    willChange: "transform"
                }}
                className="absolute inset-0"
            />

            {/* Bottom curtain (using translate and a slightly different ease for a layered feel) */}
            <motion.div
                initial={{ y: 0 }}
                animate={isOpening ? { y: "100%" } : { y: 0 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                style={{
                    backgroundColor: "#001233", // Slightly darker for depth
                    zIndex: 11,
                    pointerEvents: "auto",
                    willChange: "transform"
                }}
                className="absolute inset-x-0 bottom-0 h-1/2"
            />

            {/* Solid Background Backstop */}
            <motion.div
                animate={{ opacity: isOpening ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-[9]"
                style={{ backgroundColor: BG_COLOR, willChange: "opacity" }}
            />
        </div>
    )
}
