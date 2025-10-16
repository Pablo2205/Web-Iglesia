"use client";

import { Download, Radio, Search, ArrowLeft, Eye, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Transmisiones() {
  const [searchTerm, setSearchTerm] = useState("");

  const recursos = [
    {
      id: 1,
      titulo: "Sermón: La Fe que Transforma",
      descripcion: "Audio del sermón predicado el domingo pasado",
      tipo: "MP3",
      tamaño: "15.2 MB",
      fecha: "2024-12-08",
      vistaPrevia: "https://drive.google.com/file/d/1BCD234EFG/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1BCD234EFG"
    },
    {
      id: 2,
      titulo: "Sermón: El Poder de la Oración",
      descripcion: "Audio del sermón sobre la importancia de la oración en la vida cristiana",
      tipo: "MP3",
      tamaño: "18.5 MB",
      fecha: "2024-11-25",
      vistaPrevia: "https://drive.google.com/file/d/1HIJ567KLM/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1HIJ567KLM"
    },
    {
      id: 3,
      titulo: "Video: Culto Dominical Completo",
      descripcion: "Video completo del culto dominical con adoración y predicación",
      tipo: "MP4",
      tamaño: "125.8 MB",
      fecha: "2024-12-01",
      vistaPrevia: "https://drive.google.com/file/d/1NOP890QRS/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1NOP890QRS"
    },
    {
      id: 4,
      titulo: "Podcast Semanal: Reflexiones",
      descripcion: "Podcast semanal con reflexiones y enseñanzas bíblicas",
      tipo: "MP3",
      tamaño: "22.3 MB",
      fecha: "2024-11-18",
      vistaPrevia: "https://drive.google.com/file/d/1STU456VWX/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1STU456VWX"
    }
  ];

  const recursosFiltrados = recursos.filter(recurso =>
    recurso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recurso.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
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
              <Radio className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Transmisiones</h1>
                <p className="text-xl text-primary-100 mt-2">Contenido multimedia de nuestros servicios</p>
              </div>
            </div>
            <p className="text-lg text-primary-100 max-w-3xl mt-6">
              Sermones en audio, videos de cultos, transmisiones en vivo y podcast semanal.
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
                placeholder="Buscar transmisiones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de recursos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursosFiltrados.map((recurso) => (
              <div
                key={recurso.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <Radio className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {recurso.titulo}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                          {recurso.tipo}
                        </span>
                        <span>{recurso.tamaño}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {recurso.descripcion}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Publicado: {new Date(recurso.fecha).toLocaleDateString('es-ES')}</span>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-2">
                    <a
                      href={recurso.vistaPrevia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-primary-600 text-white py-2 px-3 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Reproducir
                    </a>
                    <a
                      href={recurso.descarga}
                      download
                      className="flex-1 flex items-center justify-center bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {recursosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <Radio className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron recursos</h3>
              <p className="text-gray-400">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
