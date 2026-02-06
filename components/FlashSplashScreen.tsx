"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const FlashSplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [isOpening, setIsOpening] = useState(false)

    useEffect(() => {
        const timer1 = setTimeout(() => setIsOpening(true), 1200)
        const timer2 = setTimeout(() => onComplete(), 2500)

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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 z-[20] flex items-center justify-center p-8"
                    >
                        <div className="relative group">
                            {/* Technical Glow Backdrop */}
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150 animate-pulse" />

                            <motion.img
                                src="/jr.png"
                                alt="JR Smart Logo"
                                className="w-64 md:w-96 h-auto relative z-10 drop-shadow-[0_0_50px_rgba(0,51,204,0.5)]"
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top-Left Curtain */}
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={isOpening ? {
                    x: "-100%",
                    y: "-100%",
                } : { x: 0, y: 0 }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                style={{
                    backgroundColor: BG_COLOR,
                    clipPath: "polygon(-1% -1%, 101% -1%, -1% 101%)",
                    zIndex: 10,
                    pointerEvents: "auto"
                }}
                className="absolute inset-0"
            />

            {/* Bottom-Right Curtain */}
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={isOpening ? {
                    x: "100%",
                    y: "100%",
                } : { x: 0, y: 0 }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                style={{
                    backgroundColor: BG_COLOR,
                    clipPath: "polygon(101% -1%, 101% 101%, -1% 101%)",
                    zIndex: 10,
                    pointerEvents: "auto"
                }}
                className="absolute inset-0"
            />

            {/* Solid Background Backstop */}
            <motion.div
                animate={{ opacity: isOpening ? 0 : 1 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 z-[9]"
                style={{ backgroundColor: BG_COLOR }}
            />
        </div>
    )
}
