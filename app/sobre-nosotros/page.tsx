import { Target, Cross, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SobreNosotros() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80"
            alt="Iglesia"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Conoce nuestra historia, visión y lo que creemos
          </p>
        </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#historia" className="px-6 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow font-semibold text-gray-700 hover:text-primary-600">
              Historia
            </a>
            <a href="#vision" className="px-6 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow font-semibold text-gray-700 hover:text-primary-600">
              Visión
            </a>
            <a href="#declaracion-fe" className="px-6 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow font-semibold text-gray-700 hover:text-primary-600">
              Declaración de Fe
            </a>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          {/* Imagen de la iglesia */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200&q=80"
                alt="Historia de nuestra iglesia"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              📸 Reemplaza esta imagen con una foto de tu iglesia en: public/images/sobre-nosotros/historia.jpg
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Somos una comunidad de creyentes comprometidos con el mensaje del Evangelio
                y dedicados a servir a Dios y a nuestra comunidad. Fundada con el propósito
                de compartir el amor de Cristo, nuestra iglesia ha sido un faro de esperanza
                y fe para muchas familias.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Creemos en la importancia de la comunión, el crecimiento espiritual y el
                servicio a los demás. Cada domingo nos reunimos para adorar, aprender de
                la Palabra de Dios y fortalecer nuestros lazos como familia en Cristo.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuestro Inicio</h3>
                  <p className="text-gray-600">
                    [Aquí va la historia de cómo comenzó la iglesia, el año de fundación,
                    los fundadores, y los primeros pasos de la comunidad]
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuestro Crecimiento</h3>
                  <p className="text-gray-600">
                    [Descripción de cómo ha crecido la iglesia a lo largo de los años,
                    hitos importantes, y el impacto en la comunidad]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Ser luz en el mundo
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nuestra visión es ser una iglesia que transforma vidas a través del poder
                  del Evangelio, formando discípulos comprometidos con Cristo y su misión en
                  la tierra.
                </p>
                <p>
                  Anhelamos ser una comunidad donde cada persona pueda experimentar el amor
                  incondicional de Dios, crecer en su fe, y descubrir su propósito para
                  impactar positivamente a nuestra ciudad y al mundo.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary-600">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Alcanzar</h4>
                    <p className="text-sm">Compartir el Evangelio con todos</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary-600">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Discipular</h4>
                    <p className="text-sm">Formar seguidores de Cristo</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary-600">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Enviar</h4>
                    <p className="text-sm">Servir a nuestra comunidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Declaración de Fe */}
      <section id="declaracion-fe" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Cross className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Declaración de Fe</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  title: "La Biblia",
                  content: "Creemos que la Biblia es la Palabra inspirada de Dios, inerrante en su forma original, y la autoridad final en asuntos de fe y conducta."
                },
                {
                  title: "Dios",
                  content: "Creemos en un solo Dios, eternamente existente en tres personas: Padre, Hijo y Espíritu Santo, iguales en poder y gloria."
                },
                {
                  title: "Jesucristo",
                  content: "Creemos en la deidad de Jesucristo, su nacimiento virginal, su vida sin pecado, sus milagros, su muerte expiatoria en la cruz, su resurrección corporal y su ascensión al cielo."
                },
                {
                  title: "El Espíritu Santo",
                  content: "Creemos en el Espíritu Santo, quien convence de pecado, regenera, habita, guía, enseña y capacita al creyente para una vida santa y un servicio eficaz."
                },
                {
                  title: "La Salvación",
                  content: "Creemos que la salvación es por gracia mediante la fe en Jesucristo, no por obras, y que todos los que le reciben son nacidos de nuevo por el Espíritu Santo."
                },
                {
                  title: "La Iglesia",
                  content: "Creemos en la iglesia universal, el cuerpo de Cristo, compuesto por todos los creyentes verdaderos, y en la iglesia local como expresión visible de este cuerpo."
                },
                {
                  title: "El Regreso de Cristo",
                  content: "Creemos en el regreso personal y visible de Jesucristo para establecer su reino y en la resurrección de los muertos para vida eterna o condenación eterna."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-primary-50 to-white rounded-lg p-6 border-l-4 border-primary-600 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <Cross className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser parte de nuestra familia?</h2>
          <p className="text-xl mb-6 text-primary-100">
            Te invitamos a visitarnos
          </p>
          <Link
            href="/contacto"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block"
          >
            Contacto y Ubicación
          </Link>
        </div>
      </section>
    </div>
  );
}
