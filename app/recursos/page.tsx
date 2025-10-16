"use client";

import { Download, BookMarked, GraduationCap, Radio, Library, ExternalLink, Eye, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Recursos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Recursos disponibles para descarga
  const recursosDisponibles = [
    // Materiales de Estudio
    {
      id: 1,
      titulo: "Plan de Lectura Bíblica 2025",
      descripcion: "Plan anual de lectura bíblica con reflexiones diarias y preguntas de estudio",
      categoria: "materiales-estudio",
      tipo: "PDF",
      tamaño: "2.1 MB",
      fecha: "2025-01-01",
      vistaPrevia: "https://drive.google.com/file/d/1ABC123XYZ/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1ABC123XYZ",
      icono: <BookMarked className="h-6 w-6" />
    },
    {
      id: 2,
      titulo: "Guía de Estudio: Romanos 8",
      descripcion: "Estudio detallado del capítulo 8 de Romanos con preguntas y reflexiones",
      categoria: "materiales-estudio",
      tipo: "PDF",
      tamaño: "3.4 MB",
      fecha: "2024-11-20",
      vistaPrevia: "https://drive.google.com/file/d/1DEF456UVW/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1DEF456UVW",
      icono: <BookMarked className="h-6 w-6" />
    },
    {
      id: 3,
      titulo: "Devocional Diario - Enero 2025",
      descripcion: "Devocionales diarios para el mes de enero con reflexiones y oraciones",
      categoria: "materiales-estudio",
      tipo: "PDF",
      tamaño: "1.8 MB",
      fecha: "2024-12-15",
      vistaPrevia: "https://drive.google.com/file/d/1GHI789RST/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1GHI789RST",
      icono: <BookMarked className="h-6 w-6" />
    },
    
    // Discipulado
    {
      id: 4,
      titulo: "Curso de Discipulado - Lección 1",
      descripcion: "Primera lección del curso básico para nuevos creyentes",
      categoria: "discipulado",
      tipo: "PDF",
      tamaño: "2.9 MB",
      fecha: "2024-10-25",
      vistaPrevia: "https://drive.google.com/file/d/1JKL012MNO/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1JKL012MNO",
      icono: <GraduationCap className="h-6 w-6" />
    },
    {
      id: 5,
      titulo: "Material para Líderes de Grupos",
      descripcion: "Guía práctica para liderar grupos pequeños y estudios bíblicos",
      categoria: "discipulado",
      tipo: "PDF",
      tamaño: "2.5 MB",
      fecha: "2024-09-15",
      vistaPrevia: "https://drive.google.com/file/d/1PQR345STU/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1PQR345STU",
      icono: <GraduationCap className="h-6 w-6" />
    },
    {
      id: 6,
      titulo: "Guía para Nuevos Creyentes",
      descripcion: "Material especial para acompañar a nuevos creyentes en su crecimiento",
      categoria: "discipulado",
      tipo: "PDF",
      tamaño: "3.2 MB",
      fecha: "2024-08-20",
      vistaPrevia: "https://drive.google.com/file/d/1VWX678YZA/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1VWX678YZA",
      icono: <GraduationCap className="h-6 w-6" />
    },
    
    // Transmisiones
    {
      id: 7,
      titulo: "Sermón: La Fe que Transforma",
      descripcion: "Audio del sermón predicado el domingo pasado",
      categoria: "transmisiones",
      tipo: "MP3",
      tamaño: "15.2 MB",
      fecha: "2024-12-08",
      vistaPrevia: "https://drive.google.com/file/d/1BCD234EFG/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1BCD234EFG",
      icono: <Radio className="h-6 w-6" />
    },
    {
      id: 8,
      titulo: "Sermón: El Poder de la Oración",
      descripcion: "Audio del sermón sobre la importancia de la oración en la vida cristiana",
      categoria: "transmisiones",
      tipo: "MP3",
      tamaño: "18.5 MB",
      fecha: "2024-11-25",
      vistaPrevia: "https://drive.google.com/file/d/1HIJ567KLM/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1HIJ567KLM",
      icono: <Radio className="h-6 w-6" />
    },
    {
      id: 9,
      titulo: "Video: Culto Dominical Completo",
      descripcion: "Video completo del culto dominical con adoración y predicación",
      categoria: "transmisiones",
      tipo: "MP4",
      tamaño: "125.8 MB",
      fecha: "2024-12-01",
      vistaPrevia: "https://drive.google.com/file/d/1NOP890QRS/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1NOP890QRS",
      icono: <Radio className="h-6 w-6" />
    },
    
    // Librería
    {
      id: 10,
      titulo: "Libro Recomendado: El Poder de la Oración",
      descripcion: "Resumen y reflexiones del libro sobre la importancia de la oración",
      categoria: "libreria",
      tipo: "PDF",
      tamaño: "4.7 MB",
      fecha: "2024-11-10",
      vistaPrevia: "https://drive.google.com/file/d/1TUV123WXY/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1TUV123WXY",
      icono: <Library className="h-6 w-6" />
    },
    {
      id: 11,
      titulo: "Biografía: La Vida de Hudson Taylor",
      descripcion: "Resumen de la biografía del misionero Hudson Taylor",
      categoria: "libreria",
      tipo: "PDF",
      tamaño: "3.8 MB",
      fecha: "2024-10-05",
      vistaPrevia: "https://drive.google.com/file/d/1ZAB456CDE/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1ZAB456CDE",
      icono: <Library className="h-6 w-6" />
    },
    {
      id: 12,
      titulo: "Recursos Teológicos Recomendados",
      descripcion: "Lista de libros y recursos teológicos recomendados para estudio",
      categoria: "libreria",
      tipo: "PDF",
      tamaño: "1.5 MB",
      fecha: "2024-09-30",
      vistaPrevia: "https://drive.google.com/file/d/1FGH789IJK/preview",
      descarga: "https://drive.google.com/uc?export=download&id=1FGH789IJK",
      icono: <Library className="h-6 w-6" />
    }
  ];

  // Filtrar recursos
  const recursosFiltrados = recursosDisponibles.filter(recurso => {
    const matchesSearch = recurso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recurso.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || recurso.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const imagenesRecursos = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"
  ];
  
  const categorias = [
    {
      title: "Materiales de Estudio",
      icon: <BookMarked className="h-12 w-12" />,
      descripcion: "Recursos para tu crecimiento espiritual personal",
      recursos: [
        "Guías de estudio bíblico",
        "Devocionales diarios",
        "Comentarios bíblicos",
        "Planes de lectura"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "Discipulado",
      icon: <GraduationCap className="h-12 w-12" />,
      descripcion: "Herramientas para formar discípulos de Cristo",
      recursos: [
        "Cursos de discipulado",
        "Material para nuevos creyentes",
        "Guías para líderes de grupos",
        "Recursos de mentoreo"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      title: "Transmisiones",
      icon: <Radio className="h-12 w-12" />,
      descripcion: "Contenido multimedia de nuestros servicios",
      recursos: [
        "Sermones en audio",
        "Videos de cultos",
        "Transmisiones en vivo",
        "Podcast semanal"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      title: "Librería",
      icon: <Library className="h-12 w-12" />,
      descripcion: "Colección de libros y materiales recomendados",
      recursos: [
        "Libros cristianos recomendados",
        "Biografías inspiradoras",
        "Recursos teológicos",
        "Literatura devocional"
      ],
      color: "from-primary-600 to-primary-700"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Recursos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Download className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Recursos</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Materiales y herramientas para fortalecer tu vida espiritual
            </p>
          </div>
        </div>
      </section>

      {/* Categorías Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Imagen de la categoría */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={imagenesRecursos[index]}
                    alt={categoria.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {categoria.icon}
                  </div>
                </div>
                <div className={`bg-gradient-to-r ${categoria.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {categoria.title}
                  </h3>
                  <p className="text-center text-sm opacity-90">
                    {categoria.descripcion}
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {categoria.recursos.map((recurso, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span>{recurso}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/recursos/${
                      categoria.title === 'Materiales de Estudio' ? 'materiales-estudio' :
                      categoria.title === 'Discipulado' ? 'discipulado' :
                      categoria.title === 'Transmisiones' ? 'transmisiones' :
                      categoria.title === 'Librería' ? 'libreria' :
                      categoria.title.toLowerCase().replace(/\s+/g, '-')
                    }`}
                    className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold block text-center"
                  >
                    Ver Recursos
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Recursos destacados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recursos Destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <Radio className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Último Sermón
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;La Fe que Transforma&rdquo; - Predicado el domingo pasado
              </p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Descargar
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <BookMarked className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Plan de Lectura
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Plan anual de lectura bíblica con reflexiones diarias
              </p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Descargar
              </button>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Curso de Discipulado
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Curso básico para nuevos creyentes en 12 lecciones
              </p>
              <button className="flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                <Download className="h-5 w-5 mr-2" />
                Descargar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-xl mb-6 text-primary-100">
            Contáctanos y te ayudaremos a encontrar el recurso que necesitas
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
}
