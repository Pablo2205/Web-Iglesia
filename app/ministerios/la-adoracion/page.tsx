"use client";

import { useState, useEffect } from "react";
import { Music, Clock, MapPin, User, Calendar, ArrowLeft, ChevronDown, ChevronUp, Search, BookOpen, Play, Download, ExternalLink, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Tipos para las canciones
interface Cancion {
  id: string;
  titulo: string;
  autor: string;
  tono?: string;
  letra?: string;
  acordes?: string;
  categoria: string;
  url?: string;
  partitura?: string;
  audio?: string;
}

export default function LaAdoracion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSong, setSelectedSong] = useState<number | null>(null);
  const [canciones, setCanciones] = useState<Cancion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleMinisterio = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleSong = (index: number) => {
    setSelectedSong(selectedSong === index ? null : index);
  };

  // Función para cargar canciones desde API externa
  const cargarCanciones = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Opción 1: Himnario Adventista API
      const response = await fetch('https://himnario-adventista-api.vercel.app/api/himnos');
      
      if (!response.ok) {
        throw new Error('Error al cargar las canciones');
      }
      
      const data = await response.json();
      
      // Transformar los datos de la API al formato que necesitamos
      const cancionesTransformadas = data.map((himno: any) => ({
        id: himno.numero.toString(),
        titulo: himno.titulo,
        autor: himno.autor || 'Autor desconocido',
        tono: himno.tono || 'No especificado',
        letra: himno.letra,
        categoria: 'Himno',
        url: `https://himnario-adventista-api.vercel.app/himno/${himno.numero}`,
        partitura: himno.partitura,
        audio: himno.audio
      }));
      
      setCanciones(cancionesTransformadas.slice(0, 20)); // Limitar a 20 canciones
      
    } catch (err) {
      console.error('Error:', err);
      
      // Fallback: Canciones de ejemplo si la API falla
      setCanciones([
        {
          id: '1',
          titulo: 'Cristo Mi Roca',
          autor: 'Marcos Witt',
          tono: 'G',
          letra: `Cristo mi Roca, Cristo mi Roca
Firme fundamento tengo en Ti
Cristo mi Roca, Cristo mi Roca
Sobre esta piedra edificaré

Cuando las aguas suban
Y el viento sople fuerte
No temeré porque
Mi casa está sobre la Roca`,
          acordes: 'G - D - Em - C',
          categoria: 'Adoración',
          url: 'https://ejemplo.com/cancion/1'
        },
        {
          id: '2', 
          titulo: 'Alabaré',
          autor: 'Marcos Witt',
          tono: 'C',
          letra: `Alabaré, alabaré
Alabaré a mi Señor
Alabaré, alabaré
Alabaré a mi Señor

Con mis manos alabaré
Con mis pies alabaré
Con mi voz alabaré
A mi Señor`,
          acordes: 'C - F - G - C',
          categoria: 'Alabanza',
          url: 'https://ejemplo.com/cancion/2'
        },
        {
          id: '3',
          titulo: 'Santo, Santo, Santo',
          autor: 'Tradicional',
          tono: 'D',
          letra: `Santo, santo, santo
Señor Dios omnipotente
Siempre el labio mío
Loores te dará
Santo, santo, santo
Misericordioso y fuerte
Dios en tres personas
Bendita Trinidad`,
          acordes: 'D - A - Bm - G',
          categoria: 'Adoración',
          url: 'https://ejemplo.com/cancion/3'
        }
      ]);
      
      setError('No se pudieron cargar las canciones desde el servicio externo. Mostrando canciones de ejemplo.');
    } finally {
      setLoading(false);
    }
  };

  // Cargar canciones al montar el componente
  useEffect(() => {
    cargarCanciones();
  }, []);

  // Filtrar canciones basado en búsqueda
  const cancionesFiltradas = canciones.filter(cancion =>
    cancion.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cancion.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cancion.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ministerios = [
    {
      nombre: "Equipo de Alabanza",
      nivel: "Músicos y cantantes",
      dia: "Domingo + Ensayos",
      hora: "Durante servicios",
      lugar: "Plataforma Principal",
      lider: "Director de Música",
      descripcion: "Equipo de músicos y cantantes que lideran la adoración durante los servicios dominicales y eventos especiales.",
      requisitos: [
        "Habilidad musical comprobada",
        "Corazón de adorador",
        "Compromiso con ensayos",
        "Disponibilidad para servir"
      ],
      color: "from-primary-400 to-primary-500"
    },
    {
      nombre: "Coro de la Iglesia",
      nivel: "Todos los que aman cantar",
      dia: "Jueves",
      hora: "7:00 PM - 8:30 PM",
      lugar: "Salón de Música",
      lider: "Director del Coro",
      descripcion: "Coro que ministra en servicios especiales, conciertos y celebraciones. Abierto a todos los que deseen servir con su voz.",
      requisitos: [
        "Amor por el canto",
        "Asistencia regular a ensayos",
        "No se requiere experiencia",
        "Corazón de servicio"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      nombre: "Escuela de Música",
      nivel: "Principiantes a avanzados",
      dia: "Sábado",
      hora: "2:00 PM - 4:00 PM",
      lugar: "Salones de Música",
      lider: "Instructores",
      descripcion: "Clases de música para niños, jóvenes y adultos que desean aprender a tocar instrumentos o mejorar sus habilidades vocales.",
      requisitos: [
        "Instrumento vocal",
        "Guitarra",
        "Teclado",
        "Batería"
      ],
      color: "from-accent-300 to-primary-500"
    },
    {
      nombre: "Ministerio de Sonido",
      nivel: "Técnicos de audio",
      dia: "Domingo + Capacitación",
      hora: "Durante servicios",
      lugar: "Cabina de Sonido",
      lider: "Coordinador Técnico",
      descripcion: "Equipo técnico que maneja el sonido, asegurando que cada palabra y nota se escuche claramente para la gloria de Dios.",
      requisitos: [
        "Interés en tecnología de audio",
        "Disponibilidad para capacitación",
        "Atención al detalle",
        "Servicio durante cultos"
      ],
      color: "from-primary-600 to-primary-700"
    },
    {
      nombre: "Adoración Espontánea",
      nivel: "Todos los creyentes",
      dia: "Primer viernes del mes",
      hora: "8:00 PM - 10:00 PM",
      lugar: "Santuario",
      lider: "Rotativo",
      descripcion: "Noche de adoración íntima donde la congregación se reúne para adorar libremente, sin agenda fija, siguiendo la guía del Espíritu Santo.",
      requisitos: [
        "Adoración espontánea",
        "Tiempo de oración",
        "Ministerio profético",
        "Comunión profunda"
      ],
      color: "from-accent-200 to-primary-400"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80"
            alt="La Adoración"
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
            <Music className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">La Adoración</h1>
              <p className="text-xl text-primary-100 mt-2">Corazones y Voces</p>
            </div>
          </div>
          <p className="text-lg text-primary-100 max-w-3xl mt-6">
            Expresando nuestro amor a Dios a través de la música, el canto y la adoración sincera.
          </p>
        </div>
        </div>
      </section>

      {/* Ministerios Accordion */}
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
                      <p className="text-sm opacity-90">{ministerio.nivel}</p>
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
                        {index === 2 ? "Instrumentos ofrecidos" : "Requisitos"}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 pl-3">
                        {ministerio.requisitos.map((req, idx) => (
                          <div key={idx} className="flex items-start text-gray-700 text-sm">
                            <span className="text-primary-600 mr-2 mt-1">✓</span>
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                        Quiero Servir
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

      {/* Cancionero */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cancionero</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Canciones de adoración y alabanza desde nuestro repertorio
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
          </div>

          {/* Barra de búsqueda y controles */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar canciones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Botón de recargar */}
            <div className="flex justify-center mt-4">
              <button
                onClick={cargarCanciones}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 text-sm text-primary-600 hover:text-primary-700 disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                {loading ? 'Cargando...' : 'Actualizar canciones'}
              </button>
            </div>
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 text-sm">{error}</p>
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="text-center py-12">
              <RefreshCw className="h-16 w-16 text-primary-400 mx-auto mb-4 animate-spin" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">Cargando canciones...</h3>
              <p className="text-gray-400">Conectando con el servicio de canciones</p>
            </div>
          )}

          {/* Grid de canciones */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cancionesFiltradas.map((cancion, index) => (
                <div
                  key={cancion.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{cancion.titulo}</h3>
                        <p className="text-sm text-gray-600 mb-2">por {cancion.autor}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Music className="h-4 w-4 mr-1" />
                            {cancion.tono}
                          </span>
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                            {cancion.categoria}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Acordes si están disponibles */}
                    {cancion.acordes && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Acordes:</h4>
                        <p className="text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">
                          {cancion.acordes}
                        </p>
                      </div>
                    )}

                    {/* Botones de acción */}
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => toggleSong(index)}
                        className="flex-1 flex items-center justify-center bg-primary-600 text-white py-2 px-3 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        Ver Letra
                      </button>
                      
                      {cancion.audio && (
                        <button className="flex items-center justify-center bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors">
                          <Play className="h-4 w-4" />
                        </button>
                      )}
                      
                      {cancion.partitura && (
                        <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      )}
                      
                      {cancion.url && (
                        <a
                          href={cancion.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    {/* Letra expandible */}
                    {cancion.letra && (
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          selectedSong === index
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Letra:</h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                              {cancion.letra}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mensaje si no hay resultados */}
          {!loading && cancionesFiltradas.length === 0 && (
            <div className="text-center py-12">
              <Music className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No se encontraron canciones</h3>
              <p className="text-gray-400">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Corazón de la Adoración
            </h2>
            <p className="text-gray-700 mb-4">
              La adoración no se trata solo de música, sino de un estilo de vida. Sin embargo, cuando nos reunimos para adorar juntos a través del canto y la música, algo poderoso sucede:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Nos conectamos con la presencia de Dios de manera especial</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Declaramos verdades bíblicas que fortalecen nuestra fe</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Nos unimos como cuerpo de Cristo en un solo propósito</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
