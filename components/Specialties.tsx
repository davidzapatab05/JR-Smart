"use client"

import React from "react"
import { motion } from "framer-motion"
import { Smartphone, ShieldCheck, Droplets, Battery, Shield, Clock, Users, Wrench } from "lucide-react"

export const Specialties = () => {
    const specialties = [
        {
            icon: Smartphone,
            title: "Cambio de Pantalla",
            desc: "Sustitución de módulos LCD/OLED y táctil por roturas o manchas.",
            features: ["Calibración TrueTone", "Módulos Originales", "Acabado Perfecto"]
        },
        {
            icon: Battery,
            title: "Reemplazo de Batería",
            desc: "Sustitución de celdas agotadas para recuperar la autonomía original.",
            features: ["Salud 100% Garantizada", "Sin Mensajes de Error", "Ciclos Nuevos"]
        },
        {
            icon: Wrench,
            title: "Hardware Periférico",
            desc: "Reparación de cámaras, altavoces, auriculares y puertos de carga.",
            features: ["Diagnóstico de Carga", "Micrófonos Claros", "Lentes de Cámara"]
        },
        {
            icon: Shield,
            title: "Estructura y Estética",
            desc: "Renovación de tapas traseras, chasis y botones físicos.",
            features: ["Acabados Fabriles", "Botones Clicky", "Ajuste de Chasis"]
        },
        {
            icon: ShieldCheck,
            title: "Software y Sistemas",
            desc: "Solución a bootloops, errores críticos y actualizaciones.",
            features: ["Flasheo de Sistema", "Eliminación de Virus", "Updates Oficiales"]
        },
        {
            icon: Users,
            title: "Desbloqueos y Red",
            desc: "Liberación de operadoras y remoción de bloqueos de seguridad.",
            features: ["Liberación por IMEI", "Cuenta Google (FRP)", "Código y Patrón"]
        },
        {
            icon: Clock,
            title: "Mantenimiento Preventivo",
            desc: "Limpieza profunda de rejillas, micrófonos y puertos de carga.",
            features: ["Optimización de Carga", "Audio Cristalino", "Vida Útil Extendida"]
        },
        {
            icon: Droplets,
            title: "Rescate de Equipos",
            desc: "Baño químico por ultrasonido para dispositivos mojados.",
            features: ["Limpieza Ultrasónica", "Recuperación de Placa", "Corte de Corrosión"]
        }
    ]

    return (
        <section className="min-h-screen flex flex-col justify-center py-32 px-4 bg-white dark:bg-[#020617] relative scroll-mt-24" id="especialidades">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                        Servicios <span className="text-blue-600">Premium.</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl">
                        Estándar de calidad Apple y Android.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                    {specialties.map((spec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group relative h-full flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-2"
                        >
                            <div className="flex-1">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <spec.icon className="w-6 h-6 text-slate-900 dark:text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{spec.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4">{spec.desc}</p>
                            </div>

                            {/* Render features only if they exist */}
                            {spec.features && (
                                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                    {spec.features.map((f, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-medium">
                                            <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
