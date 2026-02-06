"use client"

import React from "react"

export const Footer = () => {
    return (
        <footer className="py-6 bg-white dark:bg-[#020617] text-center border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="flex flex-col items-center justify-center gap-1 px-6 max-w-7xl mx-auto">
                <p className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    JR SMART
                </p>
                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
