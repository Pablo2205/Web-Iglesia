"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Church, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinisteriosOpen, setIsMinisteriosOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { 
      name: "Ministerios", 
      href: "/ministerios",
      hasDropdown: true,
      dropdownItems: [
        { name: "El Cuerpo: Grupos y Reuniones", href: "/ministerios/el-cuerpo" },
        { name: "La Palabra: Estudio y discipulado", href: "/ministerios/la-palabra" },
        { name: "Adoración: Corazones y voces", href: "/ministerios/la-adoracion" },
        { name: "Oración: Grupos y reuniones", href: "/ministerios/la-oracion" },
        { name: "Las necesidades: hospitalidad y servicio", href: "/ministerios/la-necesidad" }
      ]
    },
    { name: "Recursos", href: "/recursos" },
    { name: "Eventos", href: "/eventos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-800">IBE Avellaneda Norte</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsMinisteriosOpen(true)}
                    onMouseLeave={() => setIsMinisteriosOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {isMinisteriosOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsMinisteriosOpen(!isMinisteriosOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isMinisteriosOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMinisteriosOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="block px-3 py-2 rounded-md text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}