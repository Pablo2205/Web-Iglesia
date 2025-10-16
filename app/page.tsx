import { Users, Sparkles, BookOpen, Calendar, Headphones, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import EventCarousel from "@/components/EventCarousel";

export default function Home() {
  const secciones = [
    {
      title: "Sobre Nosotros",
      descripcion: "Conoce nuestra historia, visión y declaración de fe",
      icon: <Users className="h-12 w-12" />,
      link: "/sobre-nosotros",
      color: "from-primary-500 to-primary-600",
      subsecciones: ["Historia", "Visión", "Declaración de Fe"]
    },
    {
      title: "Ministerios",
      descripcion: "Descubre las diferentes formas de servir y crecer",
      icon: <Sparkles className="h-12 w-12" />,
      link: "/ministerios",
      color: "from-accent-300 to-primary-500",
      subsecciones: ["El Cuerpo", "La Palabra", "La Adoración", "La Oración", "La Necesidad"]
    },
    {
      title: "Recursos",
      descripcion: "Materiales para fortalecer tu vida espiritual",
      icon: <BookOpen className="h-12 w-12" />,
      link: "/recursos",
      color: "from-primary-400 to-primary-600",
      subsecciones: ["Materiales de Estudio", "Discipulado", "Transmisiones", "Librería"]
    },
    {
      title: "Eventos",
      descripcion: "Mantente al día con nuestras actividades",
      icon: <Calendar className="h-12 w-12" />,
      link: "/eventos",
      color: "from-primary-600 to-primary-800",
      subsecciones: ["Actividades", "Campamentos", "Noticias", "Anuncios"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-20 pb-20 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/sobre-nosotros/hero.jpg"
            alt="Nuestra Iglesia"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bienvenidos a Nuestra Iglesia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Una comunidad de fe, amor y esperanza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-40">
              <Link
                href="/sobre-nosotros"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
              >
                Conoce Más
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors shadow-lg"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Eventos Destacados - Carousel */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">¿Qué Está Pasando?</h2>
            <p className="text-gray-600">Próximos eventos y actividades especiales</p>
          </div>
          <EventCarousel />
        </div>
      </section>

      {/* Último Mensaje */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Último Mensaje</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-xl p-8 shadow-lg border-l-4 border-primary-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    &ldquo;La Fe que Transforma&rdquo;
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Predicado el domingo pasado - Una reflexión sobre cómo la fe en Cristo puede cambiar completamente nuestras vidas.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      28 de Septiembre, 2025
                    </span>
                    <span className="flex items-center">
                      <Headphones className="h-4 w-4 mr-1" />
                      Audio MP3
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/recursos"
                    className="flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Escuchar
                  </Link>
                  <Link
                    href="/recursos"
                    className="flex items-center justify-center border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    Ver Archivo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Principales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explora Nuestra Iglesia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce más sobre quiénes somos, cómo servimos y cómo puedes ser parte de esta familia
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {secciones.map((seccion, index) => (
              <Link
                key={index}
                href={seccion.link}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full">
                  {/* Imagen de la sección */}
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={
                        index === 0 ? "/images/sobre-nosotros/historia.jpg" :
                        index === 1 ? "/images/ministerios/la-palabra.jpg" :
                        index === 2 ? "/images/ministerios/la-necesidad.jpg" :
                        "/images/eventos/actividades.jpg"
                      }
                      alt={seccion.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      {seccion.icon}
                    </div>
                  </div>
                  <div className={`bg-gradient-to-r ${seccion.color} text-white p-6`}>
                    <h3 className="text-2xl font-bold text-center mb-2">
                      {seccion.title}
                    </h3>
                    <p className="text-center text-sm opacity-90">
                      {seccion.descripcion}
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="space-y-2 mb-4">
                      {seccion.subsecciones.map((sub, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-sm">{sub}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-primary-600 font-semibold group-hover:text-primary-700 flex items-center">
                      Ver más
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ministerio y Alcance - Inspirado en FNT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ministerio */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ministerio</h2>
                <p className="text-gray-600 italic">El trabajo EN la iglesia</p>
                <div className="w-16 h-1 bg-primary-600 mx-auto mt-2"></div>
              </div>
              <p className="text-gray-600 text-center mb-6">
                Equipar a los miembros para el trabajo del ministerio a través de la
                la predicación y enseñanza de la Palabra de Dios, misiones y comunión.
              </p>
              <div className="space-y-3">
                <Link href="/ministerios" className="block bg-primary-50 hover:bg-primary-100 rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary-700">El Cuerpo</h4>
                  <p className="text-sm text-gray-600">Grupos y Reuniones</p>
                </Link>
                <Link href="/ministerios" className="block bg-primary-50 hover:bg-primary-100 rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary-700">La Palabra</h4>
                  <p className="text-sm text-gray-600">Estudio y Discipulado</p>
                </Link>
                <Link href="/ministerios" className="block bg-primary-50 hover:bg-primary-100 rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary-700">La Oración</h4>
                  <p className="text-sm text-gray-600">Intercesión y Comunión</p>
                </Link>
              </div>
            </div>

            {/* Alcance */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Alcance</h2>
                <p className="text-gray-600 italic">El trabajo DE la iglesia</p>
                <div className="w-16 h-1 bg-primary-600 mx-auto mt-2"></div>
              </div>
              <p className="text-gray-600 text-center mb-6">
                Equipar a los miembros para ser luz en este mundo a través de misiones,
                alcance local y viviendo como ejemplo de la gracia de Dios.
              </p>
              <div className="space-y-3">
                <Link href="/ministerios" className="block bg-accent-50 hover:bg-accent-100 rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary-700">Nuestro Mundo</h4>
                  <p className="text-sm text-gray-600">Evangelizar y Equipar</p>
                </Link>
                <Link href="/ministerios" className="block bg-accent-50 hover:bg-accent-100 rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary-700">Los Necesitados</h4>
                  <p className="text-sm text-gray-600">Visitar y Ayudar</p>
                </Link>
                <Link href="/ministerios" className="block bg-accent-50 hover:bg-accent-100 rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary-700">Llamado al Corazón</h4>
                  <p className="text-sm text-gray-600">Predicar y Enseñar</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bienvenida Breve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Una Iglesia para Todos
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Somos una comunidad de creyentes comprometidos con el mensaje del Evangelio
                y dedicados a servir a Dios y a nuestra comunidad.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Ya sea que estés buscando un lugar para adorar, crecer espiritualmente,
                servir a otros o simplemente conectarte con una comunidad de fe,
                aquí encontrarás un hogar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sobre-nosotros"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                >
                  Nuestra Historia
                </Link>
                <Link
                  href="/eventos"
                  className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
                >
                  Próximos Eventos
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">+5</div>
                <div className="text-gray-600">Ministerios Activos</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">+10</div>
                <div className="text-gray-600">Eventos al Mes</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">+50</div>
                <div className="text-gray-600">Recursos Disponibles</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Dedicación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Quieres conocernos?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Te invitamos a ser parte de nuestra familia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block"
            >
              Contacto y Ubicación
            </Link>
            <Link
              href="/eventos"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block"
            >
              Próximos Eventos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}