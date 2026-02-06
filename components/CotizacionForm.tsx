"use client"

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
import { Smartphone, User, PenTool, Send, Phone, Clock } from "lucide-react"

import { motion } from "framer-motion"

const formSchema = z.object({
    name: z.string().min(2, { message: "Nombre muy corto." }),
    model: z.string().min(2, { message: "Modelo requerido." }),
    issue: z.string().min(5, { message: "Describe brevemente la falla." }),
})

export const CotizacionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            model: "",
            issue: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const message = `Hola JR SMART, mi nombre es *${values.name}*.\n📱 *Equipo:* ${values.model}\n🛠️ *Falla:* ${values.issue}\nDeseo una cotización para mi reparación.`
        const whatsappUrl = `https://wa.me/51901840323?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <section id="cotizar" className="min-h-screen flex flex-col justify-center py-32 px-6 bg-slate-50 dark:bg-[#020617] relative scroll-mt-24">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                            Contacto Directo
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Hablemos de tu <br />
                            <span className="text-blue-600">Reparación.</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-md mb-12">
                            Sin bots. Un técnico real revisará tu caso y te dará un presupuesto exacto en minutos.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Horario</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Lun - Sáb: 9:00 AM - 8:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Contacto</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">+51 901 840 323</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 dark:shadow-none border border-slate-100 dark:border-slate-800"
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-900 dark:text-white font-bold ml-1">Tu Nombre</FormLabel>
                                                <FormControl>
                                                    <div className="relative group">
                                                        <User className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                        <Input
                                                            placeholder="Ej: Juan Pérez"
                                                            {...field}
                                                            className="pl-12 h-14 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus-visible:ring-blue-600 rounded-2xl transition-all"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="model"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-900 dark:text-white font-bold ml-1">Modelo</FormLabel>
                                                <FormControl>
                                                    <div className="relative group">
                                                        <Smartphone className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                        <Input
                                                            placeholder="Ej: iPhone 13 Pro Max"
                                                            {...field}
                                                            className="pl-12 h-14 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus-visible:ring-blue-600 rounded-2xl transition-all"
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="issue"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-900 dark:text-white font-bold ml-1">El Problema</FormLabel>
                                                <FormControl>
                                                    <div className="relative group">
                                                        <PenTool className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                        <Textarea
                                                            placeholder="Ej: La pantalla no enciende..."
                                                            className="pl-12 min-h-[120px] pt-4 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus-visible:ring-blue-600 rounded-2xl resize-none transition-all"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-16 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-600/20 mt-2 transition-all hover:scale-[1.02]"
                                >
                                    <span className="mr-2">Enviar a WhatsApp</span> <Send className="w-5 h-5" />
                                </Button>
                            </form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
