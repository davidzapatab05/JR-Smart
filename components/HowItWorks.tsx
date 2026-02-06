"use client"

import React from "react"
import { motion } from "framer-motion"
import { MessageSquare, Calculator, Search, CheckCircle } from "lucide-react"

export const HowItWorks = () => {
    const steps = [
        {
            icon: MessageSquare,
            title: "1. Escríbenos",
            desc: "Cuéntanos qué le pasa a tu equipo vía WhatsApp."
        },
        {
            icon: Search,
            title: "2. Evaluamos",
            desc: "Nuestros técnicos analizan el problema al instante."
        },
        {
            icon: Calculator,
            title: "3. Cotizamos",
            desc: "Recibes un presupuesto exacto y agenda tu visita."
        },
        {
            icon: CheckCircle,
            title: "4. Listo",
            desc: "Reparación express y entrega garantizada."
        }
    ]

    return (
        <section id="proceso" className="min-h-screen flex flex-col justify-center py-32 px-6 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-300 scroll-mt-24">

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                    ¿Cómo funciona?
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-16">
                    Proceso simple, transparente y sin fricción. Recupera tu equipo en 4 pasos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mb-24">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-slate-800 dark:via-blue-900/50 dark:to-slate-800 -z-10" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.2, type: "spring" }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-500/20 transition-all duration-300 relative z-10">
                                <step.icon className="w-10 h-10 text-blue-600 dark:text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[200px]">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info / Security Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800"
                >
                    <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500" /> Sin Pérdida de Datos
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Tus fotos y archivos están seguros. No borramos nada sin tu autorización.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" /> Repuestos Originales
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Usamos componentes genuinos para garantizar el rendimiento de fábrica.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-500" /> Garantía Escrita
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Todos nuestros servicios incluyen garantía de 3 meses en mano de obra.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
