"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Smartphone, User, PenTool, Send, Phone, Clock, ShieldCheck, Loader2, MapPin } from "lucide-react"

import { motion } from "framer-motion"

const formSchema = z.object({
    name: z.string().min(2, { message: "Por favor dinos tu nombre" }),
    model: z.string().min(2, { message: "¿Qué modelo de equipo tienes?" }),
    issue: z.string().min(5, { message: "Cuéntanos un poco sobre la falla" }),
})

export const CotizacionForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            model: "",
            issue: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)

        // Simulate a brief calculation delay for UX
        setTimeout(() => {
            const message = `Hola JR SMART, mi nombre es *${values.name}*.\n📱 *Equipo:* ${values.model}\n🛠️ *Falla:* ${values.issue}\nDeseo una cotización para mi reparación.`
            const whatsappUrl = `https://wa.me/51901840323?text=${encodeURIComponent(message)}`
            window.open(whatsappUrl, '_blank')
            setIsSubmitting(false)
        }, 1500)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="cotizar" className="min-h-screen flex flex-col justify-center py-20 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#020617] scroll-mt-24 transition-colors duration-500">

            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200 dark:border-blue-800">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                                Contacto Directo
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                                Hablemos de tu <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                    Reparación.
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                                Sin bots ni respuestas automáticas. Un técnico experto analizará tu caso y te dará una solución real en minutos.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: Clock, title: "Horario", desc: "Lun - Sáb: 9:00 AM - 8:00 PM" },
                                { icon: Phone, title: "Llámanos", desc: "+51 901 840 323" },
                                { icon: ShieldCheck, title: "Garantía", desc: "Soporte Post-Venta" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Form Card - Glassmorphism */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-indigo-600/20 rounded-[30px] blur-xl transform rotate-3 scale-105 opacity-60 dark:opacity-40" />

                        <div className="relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-[30px] border border-white/40 dark:border-slate-700/50 shadow-2xl dark:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Solicitar Cotización</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Completa los datos y te responderemos por WhatsApp.</p>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    <motion.div variants={itemVariants}>
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="sr-only">Tu Nombre</FormLabel>
                                                    <FormControl>
                                                        <div className="relative group">
                                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                                            </div>
                                                            <Input
                                                                placeholder="Tu nombre completo"
                                                                {...field}
                                                                className="pl-11 h-14 bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 text-slate-900 dark:text-white rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400"
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage className="pl-2" />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <FormField
                                            control={form.control}
                                            name="model"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="sr-only">Modelo</FormLabel>
                                                    <FormControl>
                                                        <div className="relative group">
                                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                <Smartphone className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                                            </div>
                                                            <Input
                                                                placeholder="Modelo del equipo (ej. iPhone 13)"
                                                                {...field}
                                                                className="pl-11 h-14 bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 text-slate-900 dark:text-white rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400"
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage className="pl-2" />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <FormField
                                            control={form.control}
                                            name="issue"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="sr-only">El Problema</FormLabel>
                                                    <FormControl>
                                                        <div className="relative group">
                                                            <div className="absolute top-4 left-4 pointer-events-none">
                                                                <PenTool className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                                            </div>
                                                            <Textarea
                                                                placeholder="Describe el problema..."
                                                                className="pl-11 min-h-[120px] pt-4 bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 text-slate-900 dark:text-white rounded-xl resize-none transition-all shadow-sm focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400"
                                                                {...field}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage className="pl-2" />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="pt-2">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Generando...
                                                </>
                                            ) : (
                                                <>
                                                    <span className="mr-2">Enviar Solicitud</span> <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800 mt-4">
                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Tus datos están protegidos</span>
                                    </motion.div>
                                </form>
                            </Form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
