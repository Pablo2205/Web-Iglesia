"use client";

import { useState } from "react";
import { BookOpen, Clock, MapPin, User, Calendar, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LaPalabra() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const togglePrograma = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const programas = [
    {
      nombre: "Escuela Dominical",
      nivel: "Todas las edades",
      dia: "Domingo",
      hora: "10:00 AM - 11:00 AM",
      lugar: "Salones por edades",
      descripcion: "Clases bíblicas organizadas por edades donde niños, jóvenes y adultos aprenden la Palabra de Dios de manera apropiada para su nivel.",
      contenido: [
        "Clases para niños (3-12 años)",
        "Clases para adolescentes (13-17 años)",
        "Clases para jóvenes (18-35 años)",
        "Clases para adultos (36+ años)"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      nombre: "Estudio Bíblico Semanal",
      nivel: "Adolescentes",
      dia: "Viernes",
      hora: "7:00 PM - 8:30 PM",
      lugar: "Hogar Lideres adolescentes",
      descripcion: "Estudio profundo y sistemático de libros de la Biblia, con tiempo para preguntas, discusión y aplicación práctica.",
      contenido: [
        "Estudio verso por verso",
        "Contexto histórico y cultural",
        "Aplicación contemporánea",
        "Tiempo de preguntas y respuestas"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      nombre: "Programa de Discipulado",
      nivel: "Nuevos creyentes",
      dia: "Sábado",
      hora: "10:00 AM - 12:00 PM",
      lugar: "Salón de Conferencias",
      lider: "Por definir",
      descripcion: "Programa intensivo de 12 semanas para nuevos creyentes que desean establecer fundamentos sólidos en su fe cristiana.",
      contenido: [
        "Fundamentos de la fe cristiana",
        "Identidad en Cristo",
        "Disciplinas espirituales",
        "Vida en comunidad"
      ],
      color: "from-accent-300 to-primary-500"
    },
 
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="La Palabra"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/ministerios"
            className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a Ministerios
          </Link>
          <div className="flex items-center mb-4">
            <BookOpen className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">La Palabra</h1>
              <p className="text-xl text-primary-100 mt-2">Estudio y Discipulado</p>
            </div>
          </div>
          <p className="text-lg text-primary-100 max-w-3xl mt-6">
            Crecimiento espiritual a través del estudio bíblico sistemático y el discipulado intencional.
          </p>
        </div>
        </div>
      </section>

      {/* Programas Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {programas.map((programa, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
              >
                {/* Header */}
                <button
                  onClick={() => togglePrograma(index)}
                  className={`w-full text-left bg-gradient-to-r ${programa.color} text-white p-6 hover:opacity-95 transition-opacity`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{programa.nombre}</h3>
                      <p className="text-sm opacity-90">{programa.nivel}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {programa.dia}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {programa.hora}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedIndex === index ? (
                        <ChevronUp className="h-8 w-8" />
                      ) : (
                        <ChevronDown className="h-8 w-8" />
                      )}
                    </div>
                  </div>
                </button>
                
                {/* Contenido desplegable */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedIndex === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="p-6 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <MapPin className="h-5 w-5 mr-3 text-primary-600 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-sm">Lugar:</span>
                            <p className="text-sm">{programa.lugar}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <User className="h-5 w-5 mr-3 text-primary-600 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-sm">Líder:</span>
                            <p className="text-sm">{programa.lider}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Horario:</h4>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">{programa.dia}</span>
                          <br />
                          {programa.hora}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Acerca de este programa
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm pl-3">
                        {programa.descripcion}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Contenido del programa
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 pl-3">
                        {programa.contenido.map((item, idx) => (
                          <div key={idx} className="flex items-start text-gray-700 text-sm">
                            <span className="text-primary-600 mr-2 mt-1">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                        Inscribirme
                      </button>
                      <button className="flex-1 border-2 border-primary-600 text-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                        Más Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué estudiar la Palabra?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span>La Biblia es nuestra guía para vivir una vida que honra a Dios</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span>El estudio sistemático nos ayuda a conocer mejor a Dios y sus propósitos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span>El discipulado nos fortalece para enfrentar los desafíos de la vida</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">•</span>
                <span>Juntos crecemos más que solos - la comunidad es esencial</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
