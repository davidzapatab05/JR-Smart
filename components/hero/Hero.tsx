"use client"

import { motion } from "framer-motion"
import { MessageCircle, ShieldCheck, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}

export const Hero = () => {


    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-0 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
            {/* Cinematic Background - Abstract Glass */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
                <motion.div
                    animate={{ opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "opacity" }}
                    className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[60px]"
                />
                <motion.div
                    animate={{ opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "opacity" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[60px]"
                />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 h-full">

                {/* Text Content */}
                <div className="text-left space-y-8 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-wrap gap-2 mb-6 items-center">
                            <div className="mr-2 px-3 py-1 bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20 rounded-lg flex items-center">
                                <span className="text-blue-600 dark:text-blue-400 font-black tracking-tighter text-sm uppercase">
                                    {BRAND.name}
                                </span>
                            </div>
                            <Badge variant="outline" aria-label="Garantía Certificada" className="border-blue-200 text-blue-700 bg-blue-50/80 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800 px-3 py-1.5 uppercase tracking-wider text-[11px] font-bold shadow-sm backdrop-blur-sm">
                                <ShieldCheck className="w-3 h-3 mr-1.5" />
                                Garantía Certificada
                            </Badge>
                            <Badge variant="outline" aria-label="Diagnóstico Express" className="border-indigo-200 text-indigo-700 bg-indigo-50/80 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800 px-3 py-1.5 uppercase tracking-wider text-[11px] font-bold shadow-sm backdrop-blur-sm">
                                <Zap className="w-3 h-3 mr-1.5" />
                                Diagnóstico Express
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                            Tecnología <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 animate-gradient bg-300%">
                                Restaurada.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg font-medium"
                    >
                        En <span className="font-bold text-slate-900 dark:text-white">JR Smart</span> definimos el estándar más alto en servicio técnico para <span className="text-slate-900 dark:text-white font-semibold">Apple</span> y <span className="text-slate-900 dark:text-white font-semibold">Android</span>. Expertos certificados para devolverle la vida a tus dispositivos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-5 pt-2"
                    >
                        <Button
                            size="lg"
                            asChild
                            className="h-14 px-8 text-base font-bold bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300 group"
                        >
                            <a
                                href={`${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contactar por WhatsApp para cotización"
                            >
                                <MessageCircle className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                                COTIZAR AHORA
                            </a>
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="pt-8 flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/50 mt-4"
                    >
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-blue-500" />
                            <span>5 Años Exp.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-blue-500" />
                            <span>Repuestos Originales</span>
                        </div>
                    </motion.div>
                </div>

                {/* VISUAL CENTER - NEW Modern iPhone CSS Mockup */}
                <div className="relative h-full flex items-center justify-center perspective-1000 hidden lg:flex">
                    {/* Main Device Container - Titanium Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative w-[340px] h-[680px] bg-[#2a2a2a] rounded-[55px] p-[6px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 ring-1 ring-white/10"
                    >
                        {/* Inner Bezel */}
                        <div className="relative w-full h-full bg-black rounded-[49px] overflow-hidden border-[6px] border-black">

                            {/* Dynamic Island */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black z-50 rounded-full flex items-center justify-center group cursor-pointer transition-all duration-300 hover:w-[120px]">
                                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] mr-2" />
                            </div>

                            {/* Screen Content - Abstract Repair UI */}
                            <div className="w-full h-full bg-slate-950 relative overflow-hidden">
                                {/* Wallpaper/Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-900 to-slate-950" />

                                {/* Grid Lines simulating diagnostics */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

                                {/* Center Circle Animation */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
                                    <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-2 border border-blue-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />

                                    <div className="flex flex-col items-center justify-center z-10">
                                        <ShieldCheck className="w-12 h-12 text-blue-500 mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                        <span className="text-2xl font-bold text-white tracking-tighter">100%</span>
                                        <span className="text-[10px] text-blue-400 uppercase tracking-widest">Optimizado</span>
                                    </div>
                                </div>

                                {/* Floating UI Elements inside Screen */}
                                <div className="absolute bottom-12 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-3">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs text-slate-400">Batería</span>
                                            <span className="text-xs text-green-400 font-bold">Nueva</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-full rounded-full" />
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs text-slate-400">Pantalla</span>
                                            <span className="text-xs text-blue-400 font-bold">Original</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-full rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Screen Reflection/Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute top-24 -left-[2px] w-[2px] h-8 bg-[#3a3a3a] rounded-l-md" /> {/* Mute */}
                        <div className="absolute top-40 -left-[2px] w-[2px] h-14 bg-[#3a3a3a] rounded-l-md" /> {/* Vol Up */}
                        <div className="absolute top-56 -left-[2px] w-[2px] h-14 bg-[#3a3a3a] rounded-l-md" /> {/* Vol Down */}
                        <div className="absolute top-48 -right-[2px] w-[2px] h-20 bg-[#3a3a3a] rounded-r-md" /> {/* Power */}
                    </motion.div>

                    {/* Floating Card: Warranty */}
                    <motion.div
                        className="absolute top-[20%] right-0 w-[160px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 dark:border-slate-700 p-3 z-30 flex items-center gap-3 animate-float"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <div className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase">Garantía</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white">100%</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
