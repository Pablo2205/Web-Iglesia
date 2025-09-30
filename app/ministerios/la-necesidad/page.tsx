"use client";

import { useState } from "react";
import { HandHeart, Clock, MapPin, User, Calendar, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LaNecesidad() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleMinisterio = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const ministerios = [
    {
      nombre: "Ministerio de Hospitalidad",
      area: "Servicio en la iglesia",
      dia: "Domingo",
      hora: "Durante servicios",
      lugar: "Entrada y áreas comunes",
      lider: "Coordinador de Hospitalidad",
      descripcion: "Equipo que recibe a visitantes y miembros con una sonrisa, creando un ambiente acogedor y ayudando a que todos se sientan en casa.",
      actividades: [
        "Recepción de visitantes",
        "Información y orientación",
        "Café y refrigerios",
        "Seguimiento a nuevos"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      nombre: "Servicio Comunitario",
      area: "Alcance social",
      dia: "Sábado (mensual)",
      hora: "9:00 AM - 1:00 PM",
      lugar: "Comunidad",
      lider: "Director de Alcance",
      descripcion: "Proyectos de servicio que bendicen a nuestra comunidad: distribución de alimentos, limpieza de barrios, ayuda a familias necesitadas.",
      actividades: [
        "Banco de alimentos",
        "Limpieza comunitaria",
        "Visita a hogares",
        "Proyectos de mejora"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      nombre: "Ayuda a Necesitados",
      area: "Asistencia social",
      dia: "Según necesidad",
      hora: "Flexible",
      lugar: "Oficina de Benevolencia",
      lider: "Comité de Benevolencia",
      descripcion: "Fondo y recursos para ayudar a familias en crisis: emergencias médicas, desempleo, desastres naturales o necesidades básicas.",
      actividades: [
        "Asistencia económica",
        "Alimentos y ropa",
        "Ayuda en emergencias",
        "Consejería y orientación"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      nombre: "Visitación y Apoyo",
      area: "Cuidado pastoral",
      dia: "Durante la semana",
      hora: "Por coordinar",
      lugar: "Hogares, hospitales",
      lider: "Equipo de Visitación",
      descripcion: "Visitas a enfermos, ancianos, personas confinadas en casa o pasando por momentos difíciles para orar, animar y mostrar el amor de Cristo.",
      actividades: [
        "Visita a enfermos",
        "Compañía a ancianos",
        "Oración en hogares",
        "Apoyo emocional"
      ],
      color: "from-primary-600 to-primary-700"
    },
    {
      nombre: "Ministerio de Transportación",
      area: "Servicio práctico",
      dia: "Domingo y según necesidad",
      hora: "Flexible",
      lugar: "Transporte",
      lider: "Coordinador de Transporte",
      descripcion: "Servicio de transporte para personas que no tienen vehículo o no pueden conducir, asegurando que todos puedan asistir a los servicios.",
      actividades: [
        "Transporte a servicios",
        "Traslado a citas médicas",
        "Ayuda a ancianos",
        "Servicio a familias"
      ],
      color: "from-accent-200 to-primary-400"
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
            alt="La Necesidad"
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
            <HandHeart className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">La Necesidad</h1>
              <p className="text-xl text-primary-100 mt-2">Hospitalidad y Servicio</p>
            </div>
          </div>
          <p className="text-lg text-primary-100 max-w-3xl mt-6">
            Sirviendo a nuestra comunidad con amor y compasión, siendo las manos y pies de Jesús.
          </p>
        </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {ministerios.map((ministerio, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleMinisterio(index)}
                  className={`w-full text-left bg-gradient-to-r ${ministerio.color} text-white p-6 hover:opacity-95 transition-opacity`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{ministerio.nombre}</h3>
                      <p className="text-sm opacity-90">{ministerio.area}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {ministerio.dia}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {ministerio.hora}
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
                            <p className="text-sm">{ministerio.lugar}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <User className="h-5 w-5 mr-3 text-primary-600 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-sm">Líder:</span>
                            <p className="text-sm">{ministerio.lider}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Horario:</h4>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">{ministerio.dia}</span>
                          <br />
                          {ministerio.hora}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Descripción
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm pl-3">
                        {ministerio.descripcion}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                        Cómo servimos
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 pl-3">
                        {ministerio.actividades.map((actividad, idx) => (
                          <div key={idx} className="flex items-start text-gray-700 text-sm">
                            <span className="text-primary-600 mr-2 mt-1">✓</span>
                            <span>{actividad}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                        Quiero Ayudar
                      </button>
                      <button className="flex-1 border-2 border-primary-600 text-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                        Necesito Ayuda
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
              Servir como Cristo Sirvió
            </h2>
            <p className="text-gray-700 mb-4 italic">
              &ldquo;Porque el Hijo del Hombre no vino para ser servido, sino para servir.&rdquo; - Marcos 10:45
            </p>
            <p className="text-gray-700">
              Seguimos el ejemplo de Jesús, quien vino a servir. Cuando servimos a los demás, especialmente a los más necesitados, le servimos a Él. Este ministerio es el corazón práctico del amor de Cristo en acción.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
