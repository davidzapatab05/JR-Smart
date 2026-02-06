"use client"

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://jr-smart.com/#business",
                "name": "JR Smart",
                "image": "https://jr-smart.com/jr.png",
                "description": "Servicio técnico especializado en reparación de celulares y laptops en Piura. Pantallas, baterías, repotenciación de PC y licencias.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Piura",
                    "addressRegion": "Piura",
                    "addressCountry": "PE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -5.1945,
                    "longitude": -80.6328
                },
                "url": "https://jr-smart.com",
                "telephone": "+51-901-840-323",
                "priceRange": "$$",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        "opens": "09:00",
                        "closes": "20:00"
                    }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "100"
                }
            },
            {
                "@type": "Service",
                "@id": "https://jr-smart.com/#service",
                "serviceType": "Reparación de Celulares y Computadoras",
                "provider": {
                    "@id": "https://jr-smart.com/#business"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Piura"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de Reparación",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Reparación de Pantallas OLED"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Cambio de Baterías"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Optimización de Sistema"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Rescate de Equipos Mojados"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Repotenciación de Laptops (SSD/RAM)"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Formateo y Windows 11"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "Organization",
                "@id": "https://jr-smart.com/#organization",
                "name": "JR Smart",
                "url": "https://jr-smart.com",
                "logo": "https://jr-smart.com/jr.png",
                "sameAs": []
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
