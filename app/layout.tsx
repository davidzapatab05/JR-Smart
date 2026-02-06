import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JR Smart | Reparación de Celulares en Piura - Servicio Técnico Apple & Android",
  description: "Servicio técnico líder en Piura. Reparación de iPhone y Android con garantía certificada de 3 meses. Especialistas en Pantallas OLED, baterías y equipos mojados. ¡Diagnóstico express en 45 min!",
  keywords: ["reparación de celulares piura", "servicio técnico iphone piura", "cambio de pantalla celular piura", "reparación de celulares cerca de mi", "bateria iphone piura", "jr smart piura"],
  applicationName: "JR Smart",
  authors: [{ name: "JR Smart" }],
  creator: "JR Smart",
  publisher: "JR Smart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jr-smart.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "JR Smart - Reparación Profesional de Celulares en Piura",
    description: "Servicio técnico especializado con garantía certificada. Pantallas, baterías, sistema y más. Diagnóstico express en 45 minutos.",
    url: 'https://jr-smart.com',
    siteName: 'JR Smart',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'JR Smart - Servicio Técnico de Celulares',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JR Smart - Reparación de Celulares en Piura',
    description: 'Servicio técnico profesional con garantía certificada. Diagnóstico express en 45 minutos.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JR Smart",
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import { SWRegistration } from "@/components/SWRegistration";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SWRegistration />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
