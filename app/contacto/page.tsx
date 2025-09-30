import { MapPin, Phone, Mail, Clock, Car, Bus, Navigation, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Contacto() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1920&q=80"
            alt="Contacto"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ven a visitarnos, te esperamos con los brazos abiertos
            </p>
          </div>
        </div>
      </section>

      {/* Mapa y detalles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mapa */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.534!2d-58.3925554!3d-34.6739963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccbdb8edd99d%3A0x2f539cbcda4a9609!2sIglesia%20Evang%C3%A9lica%20Bautista%20Avellaneda%20Norte!5e0!3m2!1ses!2sar!4v1727721234567!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dirección
                </h3>
                <div className="flex items-start text-gray-700 mb-4">
                  <MapPin className="h-5 w-5 mr-3 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Nuestra Iglesia</p>
                    <p>Chile 781</p>
                    <p>Piñeyro, Buenos Aires</p>
                    <p>Avellaneda, B1868</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/REFm7ihZ3CcRoKrD9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 hover:text-primary-700 font-semibold mt-4"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Abrir en Google Maps
                </a>
              </div>
            </div>

            {/* Información de contacto y horarios */}
            <div className="space-y-6">
              {/* Contacto */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Teléfono</p>
                      <p className="font-semibold text-gray-900">+54 (11) XXXX-XXXX</p>
                      <p className="text-xs text-gray-500">(Actualizar con tu número)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold text-gray-900">contacto@iglesia.com</p>
                      <p className="text-xs text-gray-500">(Actualizar con tu email)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Síguenos en Redes Sociales
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.facebook.com/share/167Ud6KhPP/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-primary-600 p-2 rounded-lg mr-3">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-600">Facebook Iglesia</p>
                      <p className="text-sm text-gray-500">@gps_avellanedanorte</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/gps_avellanedanorte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-600">Instagram Iglesia</p>
                      <p className="text-sm text-gray-500">@gps_avellanedanorte</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/jovenesgps.av"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-600">Instagram Jóvenes +18</p>
                      <p className="text-sm text-gray-500">@jovenesgps.av</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/gps_avellanedanorte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-600">Instagram Adolescentes</p>
                      <p className="text-sm text-gray-500">@gps_avellanedanorte</p>
                    </div>
                  </a>

                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="bg-red-600 p-2 rounded-lg mr-3">
                      <Youtube className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Canal de YouTube</p>
                      <p className="text-sm text-gray-500">Próximamente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-primary-600" />
                  Horarios de Servicio
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold text-gray-900">Domingo</p>
                    <p className="text-gray-600">Escuela Dominical: 9:00 AM</p>
                    <p className="text-gray-600">Culto Principal: 10:00 AM - 12:00 PM</p>
                  </div>
                  <div className="border-l-4 border-primary-300 pl-4">
                    <p className="font-semibold text-gray-900">Miércoles</p>
                    <p className="text-gray-600">Reunión de Oración: 7:00 PM - 8:30 PM</p>
                  </div>
                  <div className="border-l-4 border-primary-300 pl-4">
                    <p className="font-semibold text-gray-900">Viernes</p>
                    <p className="text-gray-600">Reunión de Jóvenes: 7:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Cómo llegar */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Cómo Llegar
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-lg mr-3 mt-1">
                      <Car className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">En Auto</p>
                      <p className="text-gray-600 text-sm">
                        Contamos con estacionamiento gratuito para todos nuestros visitantes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-lg mr-3 mt-1">
                      <Bus className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">En Transporte Público</p>
                      <p className="text-gray-600 text-sm">
                        Rutas 12, 45 y 78. Parada: Calle Principal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¡Te esperamos!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Si tienes alguna pregunta o necesitas más información sobre cómo llegar,
            no dudes en contactarnos. Será un gusto recibirte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Enviar Mensaje
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Llamar Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
