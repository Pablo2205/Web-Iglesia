"use client";

import { Target, Cross, BookOpen, Users, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SobreNosotros() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
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
                  summary: "Creemos que la Biblia es la Palabra inspirada de Dios, inerrante en su forma original, y la autoridad final en asuntos de fe y conducta.",
                  details: "La Biblia es nuestra única regla de fe y práctica. Creemos que fue escrita por hombres bajo la inspiración divina del Espíritu Santo, preservando la autoridad y veracidad de cada palabra. Es el fundamento de toda doctrina y la guía para nuestra vida cristiana.",
                  verses: [
                    "2 Timoteo 3:16-17 - 'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.'",
                    "2 Pedro 1:20-21 - 'Entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.'"
                  ]
                },
                {
                  title: "Dios",
                  summary: "Creemos en un solo Dios, eternamente existente en tres personas: Padre, Hijo y Espíritu Santo, iguales en poder y gloria.",
                  details: "Creemos en la Trinidad: un solo Dios en tres personas distintas pero iguales. El Padre es el Creador y Sustentador de todas las cosas. El Hijo es el Redentor que se encarnó en Jesucristo. El Espíritu Santo es el Consolador que habita en los creyentes.",
                  verses: [
                    "Deuteronomio 6:4 - 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.'",
                    "Mateo 28:19 - 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.'",
                    "2 Corintios 13:14 - 'La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros.'"
                  ]
                },
                {
                  title: "Jesucristo",
                  summary: "Creemos en la deidad de Jesucristo, su nacimiento virginal, su vida sin pecado, sus milagros, su muerte expiatoria en la cruz, su resurrección corporal y su ascensión al cielo.",
                  details: "Jesucristo es verdadero Dios y verdadero hombre. Nació de la virgen María, vivió una vida sin pecado, realizó milagros que confirmaron su divinidad, murió en la cruz como sacrificio por nuestros pecados, resucitó al tercer día y ascendió al cielo donde intercede por nosotros.",
                  verses: [
                    "Juan 1:1,14 - 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios... Y aquel Verbo fue hecho carne, y habitó entre nosotros.'",
                    "Isaías 7:14 - 'Por tanto, el Señor mismo os dará señal: He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel.'",
                    "1 Corintios 15:3-4 - 'Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras.'"
                  ]
                },
                {
                  title: "El Espíritu Santo",
                  summary: "Creemos en el Espíritu Santo, quien convence de pecado, regenera, habita, guía, enseña y capacita al creyente para una vida santa y un servicio eficaz.",
                  details: "El Espíritu Santo es la tercera persona de la Trinidad. Convence al mundo de pecado, justicia y juicio. Regenera a los creyentes, los bautiza en el cuerpo de Cristo, los sella para el día de la redención, y los capacita con dones espirituales para el servicio.",
                  verses: [
                    "Juan 16:8 - 'Y cuando él venga, convencerá al mundo de pecado, de justicia y de juicio.'",
                    "Tito 3:5 - 'Nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo.'",
                    "Efesios 1:13-14 - 'En él también vosotros, habiendo oído la palabra de verdad, el evangelio de vuestra salvación, y habiendo creído en él, fuisteis sellados con el Espíritu Santo de la promesa.'"
                  ]
                },
                {
                  title: "La Salvación",
                  summary: "Creemos que la salvación es por gracia mediante la fe en Jesucristo, no por obras, y que todos los que le reciben son nacidos de nuevo por el Espíritu Santo.",
                  details: "La salvación es un don gratuito de Dios, no se puede ganar por méritos humanos. Se recibe por fe en Jesucristo como Señor y Salvador. Incluye el perdón de pecados, la justificación, la adopción como hijos de Dios, y la garantía de vida eterna.",
                  verses: [
                    "Efesios 2:8-9 - 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.'",
                    "Juan 3:16 - 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.'",
                    "Romanos 10:9 - 'Si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo.'"
                  ]
                },
                {
                  title: "La Iglesia",
                  summary: "Creemos en la iglesia universal, el cuerpo de Cristo, compuesto por todos los creyentes verdaderos, y en la iglesia local como expresión visible de este cuerpo.",
                  details: "La iglesia universal incluye a todos los creyentes de todos los tiempos. La iglesia local es la expresión visible de la iglesia universal en un lugar específico. Su propósito es adorar a Dios, edificar a los creyentes, evangelizar al mundo y servir a la comunidad.",
                  verses: [
                    "Efesios 1:22-23 - 'Y sometió todas las cosas bajo sus pies, y lo dio por cabeza sobre todas las cosas a la iglesia, la cual es su cuerpo, la plenitud de Aquel que todo lo llena en todo.'",
                    "Mateo 16:18 - 'Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.'",
                    "Hechos 2:42 - 'Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.'"
                  ]
                },
                {
                  title: "El Regreso de Cristo",
                  summary: "Creemos en el regreso personal y visible de Jesucristo para establecer su reino y en la resurrección de los muertos para vida eterna o condenación eterna.",
                  details: "Jesucristo regresará personal y visiblemente a la tierra para establecer su reino milenial. Habrá una resurrección de los justos para vida eterna y de los injustos para condenación eterna. Los creyentes serán arrebatados antes de la gran tribulación.",
                  verses: [
                    "Hechos 1:11 - 'Varones galileos, ¿por qué estáis mirando al cielo? Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo.'",
                    "1 Tesalonicenses 4:16-17 - 'Porque el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire.'",
                    "Apocalipsis 20:6 - 'Bienaventurado y santo el que tiene parte en la primera resurrección; la segunda muerte no tiene potestad sobre estos.'"
                  ]
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-primary-50 to-white rounded-lg border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpansion(index)}
                    className="w-full text-left p-6 hover:bg-primary-25 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <Cross className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {expandedIndex === index ? (
                          <ChevronUp className="h-6 w-6 text-primary-600" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-primary-600" />
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
                    <div className="px-6 pb-6 border-t border-primary-100">
                      <div className="pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                          Explicación Detallada
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-6 pl-3">
                          {item.details}
                        </p>
                        
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="w-1 h-6 bg-primary-600 mr-2 rounded"></span>
                          Versículos Bíblicos
                        </h4>
                        <div className="space-y-3 pl-3">
                          {item.verses.map((verse, verseIndex) => (
                            <div key={verseIndex} className="bg-white p-4 rounded-lg border border-primary-100">
                              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                {verse}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
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
