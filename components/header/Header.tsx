"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

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

    const scrollToQuote = () => {
        const element = document.getElementById("cotizar")
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
            setMobileMenuOpen(false)
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${isScrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                                onClick={() => {
                                    if (item.id === "top") {
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    } else {
                                        const element = document.getElementById(item.id)
                                        if (element) {
                                            const offset = 80
                                            const bodyRect = document.body.getBoundingClientRect().top
                                            const elementRect = element.getBoundingClientRect().top
                                            const elementPosition = elementRect - bodyRect
                                            const offsetPosition = elementPosition - offset

                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: "smooth"
                                            })
                                        }
                                    }
                                }}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>
                    <ModeToggle />
                    <Button
                        onClick={scrollToQuote}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all"
                    >
                        Cotizar Ahora
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ModeToggle />
                    <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="text-slate-900 dark:text-white" /> : <Menu className="text-slate-900 dark:text-white" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-4">
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
                                    onClick={() => {
                                        if (item.id === "top") {
                                            window.scrollTo({ top: 0, behavior: "smooth" })
                                            setMobileMenuOpen(false)
                                        } else {
                                            const element = document.getElementById(item.id)
                                            if (element) {
                                                const offset = 80
                                                const bodyRect = document.body.getBoundingClientRect().top
                                                const elementRect = element.getBoundingClientRect().top
                                                const elementPosition = elementRect - bodyRect
                                                const offsetPosition = elementPosition - offset

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: "smooth"
                                                })
                                                setMobileMenuOpen(false)
                                            }
                                        }
                                    }}
                                    className="block w-full text-left py-2 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Button onClick={scrollToQuote} className="w-full bg-blue-600 text-white">
                                Cotizar Ahora
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
