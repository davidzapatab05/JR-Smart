import { useRef, useEffect, useState } from "react"
import { motion, useInView, useSpring, useMotionValue } from "framer-motion"


const stats = [
    { label: "Años de Experiencia", value: 5, suffix: "+" },
    { label: "Dispositivos Reparados", value: 8.5, suffix: "k+" },
    { label: "Clientes Satisfechos", value: 99, suffix: "%" },
    { label: "Garantía Efectiva", value: 100, suffix: "%" },
]

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: false, margin: "-50px" })
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })

    useEffect(() => {
        if (inView) {
            motionValue.set(value)
        } else {
            motionValue.set(0)
        }
    }, [inView, value, motionValue])

    const [displayValue, setDisplayValue] = useState("0")

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (value % 1 !== 0) {
                setDisplayValue(latest.toFixed(1))
            } else {
                setDisplayValue(Math.round(latest).toString())
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    )
}

const brands = [
    { name: "Apple", logo: "/brands/apple.svg" },
    { name: "Samsung", logo: "/brands/samsung.svg" },
    { name: "Xiaomi", logo: "/brands/xiaomi.svg" },
    { name: "Motorola", logo: "/brands/motorola.svg" },
    { name: "Huawei", logo: "/brands/huawei.svg" },
    { name: "Honor", logo: "/brands/honor.svg" },
]

export const Brands = () => {
    return (
        <section id="marcas" className="bg-white dark:bg-[#020617] min-h-[90vh] flex flex-col justify-center">
            {/* Brands Section - Static & Centered */}
            <div className="py-20 container px-4 mx-auto flex-grow flex flex-col justify-center">
                <p className="text-center text-sm font-medium text-slate-400 dark:text-slate-500 mb-12 uppercase tracking-widest">
                    Expertos en las principales marcas
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative flex overflow-hidden group py-4 mb-20 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                >
                    <div className="flex animate-marquee whitespace-nowrap gap-20 md:gap-40 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* First set of brands */}
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="text-3xl md:text-5xl font-black text-slate-300 dark:text-slate-600 hover:text-slate-800 dark:hover:text-white transition-colors cursor-default select-none mx-4 tracking-tighter"
                            >
                                {brand.name}
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {brands.map((brand, index) => (
                            <div
                                key={`dup-${index}`}
                                className="text-3xl md:text-5xl font-black text-slate-300 dark:text-slate-600 hover:text-slate-800 dark:hover:text-white transition-colors cursor-default select-none mx-4 tracking-tighter"
                            >
                                {brand.name}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Integrated Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200 dark:divide-slate-800">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="p-2"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 tracking-tight">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
