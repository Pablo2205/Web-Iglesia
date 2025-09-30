import { Church, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">IBE Avellaneda Norte</span>
            </div>
            <p className="text-gray-400 mb-4">
              Una comunidad de fe dedicada a servir a Dios y a nuestra comunidad.
            </p>
          </div>

          {/* Secciones */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Secciones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/ministerios" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Ministerios
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros#vision" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Nuestra Visión
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros#declaracion-fe" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Declaración de Fe
                </Link>
              </li>
              <li>
                <Link href="/ministerios" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Cómo Servir
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">Chile 781, Piñeyro, Avellaneda</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">+54 (11) XXXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">contacto@iglesia.com</span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/share/167Ud6KhPP/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/gps_avellanedanorte" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors cursor-not-allowed"
                aria-label="YouTube (próximamente)"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nuestra Iglesia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}