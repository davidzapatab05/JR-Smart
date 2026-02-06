"use client"

import React, { lazy, Suspense } from "react"
import { Header } from "@/components/header/Header"
import { Hero } from "@/components/hero/Hero"
import { SplashWrapper } from "@/components/SplashWrapper"
import { ScrollToTop } from "@/components/ScrollToTop"

// Lazy load below-the-fold components for better performance
// Components - Static Import for Core Sections
import { Brands } from "@/components/Brands"
import { Testimonials } from "@/components/Testimonials"

// Lazy load heavy interactive components
const Specialties = lazy(() => import("@/components/Specialties").then(m => ({ default: m.Specialties })))
const HowItWorks = lazy(() => import("@/components/HowItWorks").then(m => ({ default: m.HowItWorks })))
const CotizacionForm = lazy(() => import("@/components/CotizacionForm").then(m => ({ default: m.CotizacionForm })))
const Footer = lazy(() => import("@/components/footer/Footer").then(m => ({ default: m.Footer })))

// Loading fallback component
const LoadingSection = () => (
  <div className="w-full h-96 flex items-center justify-center bg-white dark:bg-[#020617]">
    <div className="animate-pulse text-slate-400">Cargando...</div>
  </div>
)

export default function Home() {
  return (
    <SplashWrapper>
      <div className="min-h-screen font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-white">

        <Header />

        <main className="flex flex-col relative w-full overflow-x-hidden">
          <Hero />

          <Brands />



          <Suspense fallback={<LoadingSection />}>
            <Specialties />
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <HowItWorks />
          </Suspense>

          <Testimonials />

          <Suspense fallback={<LoadingSection />}>
            <CotizacionForm />
          </Suspense>
        </main>

        <Suspense fallback={<div className="h-20" />}>
          <Footer />
        </Suspense>

        <ScrollToTop />

      </div>
    </SplashWrapper>
  );
}
