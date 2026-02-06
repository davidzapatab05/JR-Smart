"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
    {
        name: "María Garcia",
        role: "Cliente - iPhone 13 Pro",
        content: "Pensé que había perdido todas mis fotos. No solo recuperaron mi información, sino que dejaron mi iPhone como nuevo. ¡Servicio increíble!",
        rating: 5
    },
    {
        name: "Carlos Mendoza",
        role: "Cliente - Samsung S23",
        content: "La rapidez me sorprendió. En menos de una hora ya tenían el diagnóstico y para la tarde mi celular estaba listo. 100% recomendados.",
        rating: 5
    },
    {
        name: "Ana Torres",
        role: "Cliente - MacBook Air",
        content: "Llevé mi laptop a otros lugares y no daban con la falla. En JR Smart detectaron el problema de micro-soldadura al instante.",
        rating: 5
    },
    {
        name: "Roberto Campos",
        role: "Cliente - iPad Pro",
        content: "El cambio de cristal fue perfecto. Mantuvieron la pantalla original y me ahorré mucho dinero. ¡Excelente trabajo!",
        rating: 5
    },
    {
        name: "Lucía Méndez",
        role: "Cliente - Samsung A54",
        content: "Se me cayó al agua y no encendía. Lograron revivirlo y recuperar todas mis fotos de la universidad. Estoy muy agradecida.",
        rating: 5
    },
    {
        name: "Jorge Ruiz",
        role: "Cliente - Xiaomi 13T",
        content: "Servicio súper honesto. Me dijeron que solo era limpieza del puerto de carga cuando otros querían cambiarme la pieza entera.",
        rating: 5
    }
]

export const Testimonials = () => {
    return (
        <section id="testimonios" className="min-h-screen flex flex-col justify-center items-center py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden scroll-mt-24">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Lo que dicen nuestros clientes</h2>
                    <div className="flex justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />)}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                        Más de 1,000 clientes satisfechos en Piura confían en nosotros.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 dark:text-blue-900/30" />

                            <div className="flex items-center gap-4 mb-6">
                                <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                                    <AvatarFallback className="bg-blue-100 text-blue-700 font-bold">{testimonial.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm italic">
                                &quot;{testimonial.content}&quot;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
