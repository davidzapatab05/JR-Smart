"use client"

import React from "react"
import { motion } from "framer-motion"
import { Smartphone, ShieldCheck, Droplets, Battery, Shield, Clock, Users, Wrench, Monitor, HardDrive, FileText, RefreshCw } from "lucide-react"

export const Specialties = () => {
    const specialties = [
        // --- SERVICIOS MÓVILES (4 Cards) ---
        {
            icon: Smartphone,
            title: "Pantallas y Visores",
            desc: "Cambio de cristales rotos y pantallas completas (LCD/OLED).",
            features: ["Calibración TrueTone", "Acabado Original", "Garantía Escrita"]
        },
        {
            icon: Battery,
            title: "Batería y Energía",
            desc: "Reemplazo de baterías y reparación de puertos de carga.",
            features: ["Ciclos Nuevos", "Sin Mensajes de Error", "Carga Rápida Activa"]
        },
        {
            icon: ShieldCheck,
            title: "Placa y Circuitos",
            desc: "Microsoldadura, equipos mojados y fallas de encendido.",
            features: ["Rescate de Datos", "Limpieza Ultrasónica", "Schematics Oficiales"]
        },
        {
            icon: Users,
            title: "Software y Señal",
            desc: "Desbloqueos de red, cuentas Google/iCloud y flasheo.",
            features: ["Liberación Permanente", "Señal Estable", "Actualizaciones Seguras"]
        },

        // --- SERVICIOS PC/LAPTOP (4 Cards) ---
        {
            icon: HardDrive,
            title: "Repotenciación PC",
            desc: "Discos Sólidos (SSD/NVMe) y aumento de memoria RAM.",
            features: ["Inicio en Segundos", "Multitarea Fluida", "Marcas Premium"]
        },
        {
            icon: RefreshCw,
            title: "Formateo y Sistema",
            desc: "Instalación limpia de Windows 10/11 con drivers originales.",
            features: ["Sin Bloatware", "Optimización Gamer", "Respaldo de Archivos"]
        },
        {
            icon: Shield, // Using Shield for security/os upgrade
            title: "Actualización a Win 11",
            desc: "Pasamos tu equipo de Windows 10 a 11 (si es compatible).",
            features: ["Verificación TPM", "Licencia Digital", "Sin Pérdida de Datos"]
        },
        {
            icon: FileText,
            title: "Office y Licencias",
            desc: "Activación de Windows y Paquete Office permanente.",
            features: ["Licencias Digitales", "Word/Excel/PowerPoint", "Soporte Remoto"]
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
