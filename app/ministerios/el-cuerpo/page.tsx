"use client";

import { useState } from "react";
import { Users, Clock, MapPin, User, Calendar, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ElCuerpo() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleReunion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const reuniones = [
    {
      nombre: "Reunión de Adolescentes",
      edad: "13-17 años",
      dia: "Sabado",
      hora: "4:00 PM - 7:00 PM",
      lugar: "Salón de Jóvenes",
      descripcion: "Un espacio diseñado para adolescentes donde pueden crecer en su fe, hacer amigos y aprender sobre la Palabra de Dios en un ambiente divertido y seguro.",
      actividades: [
        "Juegos y dinámicas",
        "Estudio bíblico interactivo",
        "Adoración contemporánea",
        "Tiempo de comunión"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      nombre: "Reunión de Jóvenes +18",
      edad: "18-35 años",
      dia: "Viernes",
      hora: "8:00 PM - 11:00 PM",
      lugar: "Salón Principal",
      descripcion: "Jóvenes adultos reunidos para crecer juntos en la fe, abordar temas relevantes y fortalecer su caminar con Cristo.",
      actividades: [
        "Enseñanza bíblica profunda",
        "Grupos de discusión",
        "Adoración",
        "Proyectos de servicio"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      nombre: "Reunión de Hombres",
      edad: "Hombres adultos",
      dia: "Sábado",
      hora: "7:00 AM - 8:30 AM",
      lugar: "Salón de Conferencias",
      descripcion: "Hombres de fe reunidos para rendirse cuentas mutuamente, crecer espiritualmente y ser mejores líderes en sus hogares y comunidad.",
      actividades: [
        "Estudio bíblico masculino",
        "Desayuno de comunión",
        "Rendición de cuentas",
        "Proyectos de servicio"
      ],
      color: "from-primary-600 to-primary-700"
    },
    {
      nombre: "Reunión de Mujeres",
      edad: "Mujeres adultas",
      dia: "Martes",
      hora: "10:00 AM - 12:00 PM",
      lugar: "Salón de Mujeres",
      descripcion: "Un espacio de comunión donde las mujeres pueden compartir, orar juntas y crecer en su fe mientras se apoyan mutuamente.",
      actividades: [
        "Estudio bíblico femenino",
        "Oración intercesora",
        "Testimonios y compartir",
        "Ministerio de ayuda mutua"
      ],
      color: "from-accent-200 to-primary-400"
    },
    {
      nombre: "Reunión de Chicos",
      edad: "Chicos jóvenes 16-25 años",
      dia: "Jueves",
      hora: "6:00 PM - 7:30 PM",
      lugar: "Salón de Jóvenes",
      lider: "Por definir",
      descripcion: "Chicas jóvenes reunidas para fortalecer su identidad en Cristo, abordar temas relevantes y crecer en comunidad.",
      actividades: [
        "Temas de pureza y valor",
        "Estudio bíblico aplicado",
        "Mentoreo y consejería",
        "Adoración y oración"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      nombre: "Reunión de Chicas",
      edad: "Chicas jóvenes 16-25 años",
      dia: "Jueves",
      hora: "6:00 PM - 7:30 PM",
      lugar: "Salón de Jóvenes",
      descripcion: "Chicas jóvenes reunidas para fortalecer su identidad en Cristo, abordar temas relevantes y crecer en comunidad.",
      actividades: [
        "Temas de pureza y valor",
        "Estudio bíblico aplicado",
        "Mentoreo y consejería",
        "Adoración y oración"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      nombre: "Reunión de Matrimonios",
      edad: "Parejas casadas",
      dia: "Último viernes del mes",
      hora: "7:00 PM - 9:00 PM",
      lugar: "Salón de Conferencias",
      descripcion: "Parejas casadas fortaleciendo su matrimonio a través de la Palabra de Dios, comunión y herramientas prácticas.",
      actividades: [
        "Enseñanza sobre matrimonio",
        "Dinámicas de pareja",
        "Tiempo de comunión",
        "Cena compartida (ocasional)"
      ],
      color: "from-primary-500 to-primary-700"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80"
            alt="El Cuerpo"
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
            <Users className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">El Cuerpo</h1>
              <p className="text-xl text-primary-100 mt-2">Grupos y Reuniones</p>
            </div>
          </div>
          <p className="text-lg text-primary-100 max-w-3xl mt-6">
            Comunidad y compañerismo a través de grupos pequeños organizados por edades y necesidades específicas.
          </p>
        </div>
        </div>
      </section>

      {/* Reuniones Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {reuniones.map((reunion, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
              >
                {/* Header - Siempre visible */}
                <button
                  onClick={() => toggleReunion(index)}
                  className={`w-full text-left bg-gradient-to-r ${reunion.color} text-white p-6 hover:opacity-95 transition-opacity`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{reunion.nombre}</h3>
                      <p className="text-sm opacity-90">{reunion.edad}</p>
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
                
                {/* Contenido desplegable */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedIndex === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="p-6 border-t border-gray-100">
                    {/* Información básica */}
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
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Horario Completo:</h4>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">{reunion.dia}</span>
                          <br />
                          {reunion.hora}
                        </p>
                      </div>
                    </div>

                    {/* Descripción */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Acerca de esta reunión
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm pl-3">
                        {reunion.descripcion}
                      </p>
                    </div>

                    {/* Actividades */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Lo que hacemos
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 pl-3">
                        {reunion.actividades.map((actividad, idx) => (
                          <div key={idx} className="flex items-start text-gray-700 text-sm">
                            <span className="text-primary-600 mr-2 mt-1">✓</span>
                            <span>{actividad}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Botón de contacto */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                        Quiero Participar
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
              ¿Cómo unirte a una reunión?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">1.</span>
                <span>Elige la reunión que mejor se adapte a tu edad y necesidades</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">2.</span>
                <span>Contacta al líder de la reunión o a la oficina de la iglesia</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">3.</span>
                <span>Ven en el día y hora indicados, ¡te estaremos esperando!</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">4.</span>
                <span>No es necesario registrarse previamente, solo llega y sé parte</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ¿Tienes preguntas sobre alguna reunión?
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
