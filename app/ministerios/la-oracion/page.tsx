"use client";

import { useState } from "react";
import { Heart, Clock, MapPin, User, Calendar, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LaOracion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleReunion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const reuniones = [
    {
      nombre: "Reunión de Oración Semanal",
      tipo: "Oración corporativa",
      dia: "Miércoles",
      hora: "8:00 PM - 9:30 PM",
      lugar: "Virtual por Zoom",
      descripcion: "Tiempo dedicado a la oración intercesora por nuestra iglesia, comunidad, nación y el mundo. Un lugar donde levantamos nuestras peticiones a Dios juntos.",
      enfoque: [
        "Oración por la iglesia local",
        "Intercesión por la comunidad",
        "Peticiones personales",
        "Adoración y alabanza"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      nombre: "Cadena de Oración",
      tipo: "Oración 24/7",
      dia: "Todos los días",
      hora: " horas",
      lugar: "Virtual/WhatsApp",
      lider: "Coordinadores",
      descripcion: "Red de intercesores que oran continuamente por necesidades urgentes, enfermos, situaciones difíciles y peticiones especiales.",
      enfoque: [
        "Peticiones urgentes",
        "Oración por enfermos",
        "Situaciones de crisis",
        "Necesidades familiares"
      ],
      color: "from-primary-500 to-primary-600"
    },
  
    {
      nombre: "Vigilias de Oración",
      tipo: "Oración intensiva",
      dia: "Último viernes del mes",
      hora: "10:00 PM - 12:00 AM",
      lugar: "Santuario",
      lider: "Pastores",
      descripcion: "Noches especiales de oración intensiva donde buscamos el rostro de Dios con ayuno, adoración y súplica.",
      enfoque: [
        "Búsqueda intensa de Dios",
        "Ayuno y oración",
        "Alabanza y adoración",
        "Ministerio del Espíritu Santo"
      ],
      color: "from-primary-600 to-primary-700"
    },
    {
      nombre: "Escuela de Oración",
      tipo: "Enseñanza",
      dia: "Segundo sábado del mes",
      hora: "10:00 AM - 12:00 PM",
      lugar: "Salón de Enseñanza",
      lider: "Maestros de Oración",
      descripcion: "Clases prácticas sobre cómo orar efectivamente, tipos de oración, guerra espiritual y desarrollo de una vida de oración constante.",
      enfoque: [
        "Fundamentos de la oración",
        "Oración intercesora",
        "Guerra espiritual",
        "Vida devocional diaria"
      ],
      color: "from-accent-200 to-primary-400"
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/ministerios/la-oracion.jpg"
            alt="La Oración"
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
            <Heart className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">La Oración</h1>
              <p className="text-xl text-primary-100 mt-2">Intercesión y Comunión</p>
            </div>
          </div>
          <p className="text-lg text-primary-100 max-w-3xl mt-6">
            Buscando a Dios a través de la oración personal y corporativa, intercediendo por nuestra iglesia y el mundo.
          </p>
        </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {reuniones.map((reunion, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleReunion(index)}
                  className={`w-full text-left bg-gradient-to-r ${reunion.color} text-white p-6 hover:opacity-95 transition-opacity`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{reunion.nombre}</h3>
                      <p className="text-sm opacity-90">{reunion.tipo}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {reunion.dia}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {reunion.hora}
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
                            <p className="text-sm">{reunion.lugar}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <User className="h-5 w-5 mr-3 text-primary-600 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-sm">Líder:</span>
                            <p className="text-sm">{reunion.lider}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Horario:</h4>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">{reunion.dia}</span>
                          <br />
                          {reunion.hora}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Descripción
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm pl-3">
                        {reunion.descripcion}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Enfoque de oración
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 pl-3">
                        {reunion.enfoque.map((item, idx) => (
                          <div key={idx} className="flex items-start text-gray-700 text-sm">
                            <span className="text-primary-600 mr-2 mt-1">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                        Unirme
                      </button>
                      <button className="flex-1 border-2 border-primary-600 text-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                        Enviar Petición
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Poder de la Oración
            </h2>
            <p className="text-gray-700 mb-4 italic">
              &ldquo;La oración eficaz del justo puede mucho.&rdquo; - Santiago 5:16
            </p>
            <p className="text-gray-700">
              Creemos en el poder de la oración. No es simplemente un ritual religioso, sino una conversación vital con nuestro Padre celestial que cambia circunstancias, transforma corazones y mueve la mano de Dios.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
