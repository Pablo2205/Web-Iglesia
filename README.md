# Web Iglesia

Sitio web moderno y completo para iglesias, desarrollado con Next.js 14, React 18 y Tailwind CSS.

## 🌟 Estructura del Sitio

### 📄 Secciones Principales

#### 1. **Sobre Nosotros** (`/sobre-nosotros`)
Información fundamental sobre la iglesia:
- **Historia**: Origen y trayectoria de la iglesia
- **Visión**: Objetivos y propósito ministerial
- **Declaración de Fe**: 7 puntos doctrinales fundamentales

#### 2. **Ministerios** (`/ministerios`)
Áreas de servicio y crecimiento:
- **El Cuerpo**: Grupos pequeños y reuniones de compañerismo
- **La Palabra**: Estudio bíblico y discipulado
- **La Adoración**: Alabanza y música
- **La Oración**: Intercesión y reuniones de oración
- **La Necesidad**: Hospitalidad y servicio comunitario

#### 3. **Recursos** (`/recursos`)
Materiales para el crecimiento espiritual:
- **Materiales de Estudio**: Guías bíblicas y devocionales
- **Discipulado**: Cursos y herramientas de formación
- **Transmisiones**: Sermones, videos y podcasts
- **Librería**: Libros y materiales recomendados

#### 4. **Eventos** (`/eventos`)
Calendario y actividades:
- **Actividades**: Eventos regulares de la iglesia
- **Campamentos**: Retiros y campamentos
- **Noticias**: Últimas novedades
- **Anuncios**: Avisos importantes
- **Calendario**: Programación mensual

#### 5. **Ubicación** (`/ubicacion`)
Información de contacto y localización:
- Mapa interactivo de Google Maps
- Dirección y teléfonos
- Horarios de servicio
- Indicaciones para llegar

## 🚀 Tecnologías

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **TypeScript**: Para seguridad de tipos
- **Font**: Inter (Google Fonts)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
Web-Iglesia/
├── app/
│   ├── page.tsx                 # Página principal
│   ├── sobre-nosotros/
│   │   └── page.tsx            # Historia, Visión, Declaración de Fe
│   ├── ministerios/
│   │   └── page.tsx            # 5 ministerios principales
│   ├── recursos/
│   │   └── page.tsx            # 4 categorías de recursos
│   ├── eventos/
│   │   └── page.tsx            # Actividades y calendario
│   ├── ubicacion/
│   │   └── page.tsx            # Mapa y contacto
│   ├── layout.tsx              # Layout principal
│   └── globals.css             # Estilos globales
├── components/
│   ├── Navbar.tsx              # Barra de navegación
│   └── Footer.tsx              # Pie de página
├── public/                     # Archivos estáticos
└── package.json
```

## 🎨 Personalización

### 1. Colores
Edita `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Cambia estos valores
    50: '#f0f9ff',
    600: '#0284c7',
    // etc...
  },
}
```

### 2. Información de Contacto
Actualiza en:
- `components/Footer.tsx`
- `app/ubicacion/page.tsx`

### 3. Contenido de Secciones
Cada página tiene áreas marcadas con comentarios `[Aquí va...]` para que agregues tu contenido específico.

### 4. Mapa de Google Maps
En `app/ubicacion/page.tsx`:
1. Ve a Google Maps
2. Busca tu dirección
3. Click en "Compartir" → "Insertar un mapa"
4. Copia el iframe y reemplázalo

## 📝 Próximos Pasos para Completar

### Sobre Nosotros
- [ ] Completar historia de la iglesia
- [ ] Personalizar la visión con detalles específicos
- [ ] Revisar puntos de declaración de fe

### Ministerios
- [ ] Agregar líderes de cada ministerio
- [ ] Incluir horarios específicos
- [ ] Añadir fotos de actividades

### Recursos
- [ ] Subir sermones y materiales
- [ ] Configurar sistema de descarga
- [ ] Integrar reproductor de audio/video

### Eventos
- [ ] Agregar eventos actuales
- [ ] Integrar calendario interactivo
- [ ] Sistema de inscripciones (opcional)

### General
- [ ] Agregar imágenes a `public/images/`
- [ ] Personalizar textos de bienvenida
- [ ] Actualizar datos de contacto reales
- [ ] Configurar formularios de contacto

## 🌐 Despliegue

### Vercel (Recomendado - GRATIS)
```bash
# 1. Sube a GitHub
git add .
git commit -m "Sitio web iglesia"
git push

# 2. Conecta en vercel.com
# 3. Deploy automático
```

### Otras Opciones
- Netlify
- AWS Amplify
- GitHub Pages (requiere configuración adicional)

## 🎯 Características

✅ Diseño moderno y profesional  
✅ 100% responsive (móvil, tablet, desktop)  
✅ Navegación intuitiva  
✅ Smooth scroll entre secciones  
✅ SEO optimizado  
✅ Tiempos de carga rápidos  
✅ Fácil de personalizar  
✅ Estructura modular por secciones  

## 📧 Soporte

Para preguntas sobre la implementación o personalización, revisa la documentación de Next.js en [nextjs.org](https://nextjs.org)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - siéntete libre de usarlo para tu iglesia.

---

Hecho con ❤️ para la comunidad de fe