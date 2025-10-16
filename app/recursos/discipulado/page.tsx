"use client";

import { Download, GraduationCap, Search, ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Discipulado() {
  const [searchTerm, setSearchTerm] = useState("");

  const subcategorias = [
    {
      id: 1,
      titulo: "Discipulado Básico",
      descripcion: "Fundamentos de la fe cristiana para nuevos creyentes y principiantes",
      icono: "🌱",
      color: "bg-green-100 text-green-700",
      recursos: 8
    },
    {
      id: 2,
      titulo: "Liderazgo de Grupos",
      descripcion: "Herramientas para liderar grupos pequeños, células y estudios bíblicos",
      icono: "👥",
      color: "bg-blue-100 text-blue-700",
      recursos: 12
    },
    {
      id: 3,
      titulo: "Mentoreo y Acompañamiento",
      descripcion: "Recursos para establecer relaciones de mentoreo y acompañamiento espiritual",
      icono: "🤝",
      color: "bg-purple-100 text-purple-700",
      recursos: 10
    },
    {
      id: 4,
      titulo: "Crecimiento Espiritual",
      descripcion: "Materiales para el desarrollo de la vida devocional y madurez espiritual",
      icono: "📈",
      color: "bg-orange-100 text-orange-700",
      recursos: 15
    },
    {
      id: 5,
      titulo: "Evangelismo Personal",
      descripcion: "Estrategias y herramientas para compartir el evangelio de manera efectiva",
      icono: "💬",
      color: "bg-red-100 text-red-700",
      recursos: 9
    },
    {
      id: 6,
      titulo: "Formación de Discípulos",
      descripcion: "Procesos y metodologías para formar discípulos que hagan discípulos",
      icono: "🎯",
      color: "bg-yellow-100 text-yellow-700",
      recursos: 11
    },
    {
      id: 7,
      titulo: "Ministerio Juvenil",
      descripcion: "Recursos especializados para el discipulado de jóvenes y adolescentes",
      icono: "🎉",
      color: "bg-pink-100 text-pink-700",
      recursos: 7
    },
    {
      id: 8,
      titulo: "Evaluación y Seguimiento",
      descripcion: "Herramientas para evaluar el progreso y hacer seguimiento del discipulado",
      icono: "📊",
      color: "bg-indigo-100 text-indigo-700",
      recursos: 6
    }
  ];

  const subcategoriasFiltradas = subcategorias.filter(subcategoria =>
    subcategoria.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subcategoria.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/recursos"
              className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a Recursos
            </Link>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Discipulado</h1>
                <p className="text-xl text-primary-100 mt-2">Áreas especializadas para formar discípulos de Cristo</p>
              </div>
            </div>
            <p className="text-lg text-primary-100 max-w-3xl mt-6">
              Explora las diferentes áreas del discipulado cristiano organizadas por enfoque y metodología.
            </p>
          </div>
        </div>
      </section>

      {/* Barra de búsqueda */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar áreas de discipulado..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de subcategorías */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategoriasFiltradas.map((subcategoria) => (
              <div
                key={subcategoria.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">
                      {subcategoria.icono}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {subcategoria.titulo}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${subcategoria.color}`}>
                          {subcategoria.recursos} recursos
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {subcategoria.descripcion}
                  </p>

                  {/* Botón de explorar */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Explorar Recursos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {subcategoriasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron áreas</h3>
              <p className="text-gray-400">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
