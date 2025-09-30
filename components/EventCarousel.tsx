"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Evento {
  titulo: string;
  fecha: string;
  descripcion: string;
  imagen: string;
  link?: string;
}

export default function EventCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const eventos: Evento[] = [
    {
      titulo: "Domingo de Bautismos",
      fecha: "Domingo 5 de Octubre",
      descripcion: "Únete a nosotros en este día especial mientras celebramos nuevos bautismos. ¡Regístrate hoy!",
      imagen: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80",
      link: "/eventos"
    },
    {
      titulo: "Retiro de Jóvenes",
      fecha: "15-17 de Octubre",
      descripcion: "Tres días de adoración, enseñanza y compañerismo. No te lo pierdas.",
      imagen: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80",
      link: "/eventos"
    },
    {
      titulo: "Conferencia Anual",
      fecha: "24-28 de Septiembre",
      descripcion: "Mucho más... Dios tiene más para revelar, más para cumplir y más para dar a Su iglesia.",
      imagen: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1600&q=80",
      link: "/eventos"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventos.length) % eventos.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventos.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [eventos.length, isPaused]);

  return (
    <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="relative h-96 md:h-80">
        {eventos.map((evento, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <Image
                src={evento.imagen}
                alt={evento.titulo}
                fill
                className="object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-5 w-5 text-primary-100" />
                <span className="text-primary-100 font-medium">{evento.fecha}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">{evento.titulo}</h3>
              <p className="text-xl text-primary-100 mb-6 max-w-2xl">
                {evento.descripcion}
              </p>
              {evento.link && (
                <Link
                  href={evento.link}
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block w-fit"
                >
                  Más Información
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          setIsPaused(true);
          prevSlide();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Evento anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => {
          setIsPaused(true);
          nextSlide();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Siguiente evento"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {eventos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(true);
              setCurrentSlide(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir al evento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
