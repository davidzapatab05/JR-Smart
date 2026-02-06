"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { BRAND } from "@/lib/constants"

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", updateScroll)
        return () => window.removeEventListener("scroll", updateScroll)
    }, [])

    const handleScrollTo = (id: string) => {
        // Toggle menu off first
        setMobileMenuOpen(false);

        // Slight delay to allow layout to settle after state change
        setTimeout(() => {
            if (id === "top") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 90;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }, 150);
    };

    const handleWhatsApp = () => {
        const url = `${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;
        window.open(url, "_blank");
        setMobileMenuOpen(false);
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-4 ${isScrolled || mobileMenuOpen ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-[110]">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
                    onClick={() => handleScrollTo("top")}
                >
                    <Image
                        src="/jr.png"
                        alt="JR Smart Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-6">
                        {[
                            { name: "Inicio", id: "top" },
                            { name: "Marcas", id: "marcas" },
                            { name: "Servicios", id: "especialidades" },
                            { name: "Proceso", id: "proceso" },
                            { name: "Opiniones", id: "testimonios" },
                            { name: "Contáctenos", id: "cotizar" },
                        ].map((item) => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => handleScrollTo(item.id)}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>
                    <ModeToggle />
                    <Button
                        type="button"
                        onClick={handleWhatsApp}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all"
                    >
                        Cotizar Ahora
                    </Button>
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle />
                    <button
                        type="button"
                        className="p-2 flex items-center justify-center transition-transform active:scale-95 z-[120] outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {mobileMenuOpen ? (
                            <X className="text-slate-900 dark:text-white w-6 h-6" />
                        ) : (
                            <Menu className="text-slate-900 dark:text-white w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Slide Down */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white dark:bg-slate-950 relative z-[105] shadow-2xl"
                    >
                        <div className="px-6 py-6 space-y-1">
                            {[
                                { name: "Inicio", id: "top" },
                                { name: "Marcas", id: "marcas" },
                                { name: "Servicios", id: "especialidades" },
                                { name: "Proceso", id: "proceso" },
                                { name: "Opiniones", id: "testimonios" },
                                { name: "Contáctenos", id: "cotizar" },
                            ].map((item, idx) => (
                                <motion.button
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileTap={{ scale: 0.98, backgroundColor: "rgba(0,0,0,0.02)" }}
                                    key={item.name}
                                    type="button"
                                    onClick={() => handleScrollTo(item.id)}
                                    className="block w-full text-left py-2 text-base font-medium text-slate-700 dark:text-slate-200 border-b border-slate-50/50 dark:border-slate-900/30 last:border-0 outline-none"
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                            <div className="pt-3">
                                <button
                                    type="button"
                                    onClick={handleWhatsApp}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-bold rounded-lg shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform outline-none"
                                >
                                    Cotizar Ahora
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
