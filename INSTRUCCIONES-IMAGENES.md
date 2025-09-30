# 📸 Instrucciones para Agregar Tus Propias Imágenes

## ✅ Imágenes ya implementadas

Actualmente el sitio usa **imágenes de ejemplo de Unsplash** (placeholders). Aquí te explico cómo reemplazarlas con tus propias fotos de la iglesia.

---

## 🎯 Dónde están las imágenes actualmente

### 1. **Página Principal** (`app/page.tsx`)

**Hero Section:**
- Línea 48: `https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&q=80`
- Reemplaza con tu foto principal de la iglesia

**Tarjetas de secciones (4 imágenes):**
- Línea 172-175: Sobre Nosotros, Ministerios, Recursos, Eventos
- Reemplaza con fotos representativas de cada sección

### 2. **Sobre Nosotros** (`app/sobre-nosotros/page.tsx`)

**Header:**
- Línea 12: Imagen de fondo del header

**Sección Historia:**
- Línea 59: Foto histórica de la iglesia

### 3. **Ministerios** (`app/ministerios/page.tsx`)

**5 Imágenes de tarjetas:**
- Líneas 6-11: Array `imagenesMinisterios`
  - El Cuerpo: Grupos/personas
  - La Palabra: Biblia/estudio
  - La Adoración: Alabanza/música
  - La Oración: Oración
  - La Necesidad: Servicio/ayuda

### 4. **Recursos** (`app/recursos/page.tsx`)

**4 Imágenes:**
- Líneas 5-8: Array `imagenesRecursos`
  - Materiales de Estudio
  - Discipulado
  - Transmisiones
  - Librería

### 5. **Eventos** (`app/eventos/page.tsx`)

**4 Imágenes:**
- Líneas 5-8: Array `imagenesEventos`
  - Actividades
  - Campamentos
  - Noticias
  - Anuncios

### 6. **Carousel de Eventos** (`components/EventCarousel.tsx`)

**3 Imágenes para el carousel:**
- Líneas 24, 31, 38: Imágenes de fondo para cada slide

---

## 🔧 Método 1: Usar imágenes locales (Recomendado)

### Paso 1: Agrega tus imágenes

Coloca tus fotos en las carpetas creadas:

```bash
public/
└── images/
    ├── hero.jpg                    # Imagen principal
    ├── sobre-nosotros/
    │   ├── header.jpg
    │   └── historia.jpg
    ├── ministerios/
    │   ├── el-cuerpo.jpg
    │   ├── la-palabra.jpg
    │   ├── la-adoracion.jpg
    │   ├── la-oracion.jpg
    │   └── la-necesidad.jpg
    ├── recursos/
    │   ├── estudios.jpg
    │   ├── discipulado.jpg
    │   ├── transmisiones.jpg
    │   └── libreria.jpg
    └── eventos/
        ├── evento1.jpg
        ├── evento2.jpg
        ├── evento3.jpg
        └── actividades.jpg
```

### Paso 2: Actualiza las rutas en el código

**Ejemplo en `app/page.tsx`:**

CAMBIAR DE:
```typescript
src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&q=80"
```

A:
```typescript
src="/images/hero.jpg"
```

**Ejemplo en `app/ministerios/page.tsx`:**

CAMBIAR DE:
```typescript
const imagenesMinisterios = [
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
  ...
];
```

A:
```typescript
const imagenesMinisterios = [
  "/images/ministerios/el-cuerpo.jpg",
  "/images/ministerios/la-palabra.jpg",
  "/images/ministerios/la-adoracion.jpg",
  "/images/ministerios/la-oracion.jpg",
  "/images/ministerios/la-necesidad.jpg"
];
```

---

## 🔧 Método 2: Usar tus propias URLs de imágenes

Si tienes imágenes alojadas en otro servidor (Google Drive, Imgur, etc.):

### Paso 1: Actualiza `next.config.mjs`

Agrega el dominio permitido:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'tu-servidor.com',  // ← Agrega aquí
    },
  ],
},
```

### Paso 2: Usa las URLs directamente

Reemplaza las URLs de Unsplash con tus URLs.

---

## 📏 Tamaños Recomendados

| Tipo de Imagen | Dimensiones | Peso Máx |
|----------------|-------------|----------|
| Hero/Header | 1920x1080px | 500KB |
| Carousel | 1600x900px | 400KB |
| Tarjetas | 800x600px | 300KB |
| Historias | 1200x800px | 400KB |

---

## 🎨 Recomendaciones

✅ **Calidad:** Usa fotos de buena resolución  
✅ **Formato:** JPG para fotos, PNG para logos  
✅ **Compresión:** Usa TinyPNG.com antes de subir  
✅ **Derechos:** Solo usa fotos que tengas permiso de usar  
✅ **Relevancia:** Que las imágenes representen el contenido  

---

## 🚀 Después de agregar imágenes

```bash
# Reconstruir el sitio
npm run build

# Reiniciar servidor de desarrollo
npm run dev
```

---

## 📝 Lista de Imágenes Necesarias

### Prioridad Alta 🔴
- [ ] Hero principal (página inicio)
- [ ] Logo de la iglesia
- [ ] Foto del edificio/templo

### Prioridad Media 🟡
- [ ] 4 imágenes para tarjetas principales
- [ ] 3 imágenes para carousel de eventos
- [ ] Foto de historia de la iglesia

### Prioridad Baja 🟢
- [ ] 5 imágenes de ministerios
- [ ] 4 imágenes de recursos
- [ ] 4 imágenes de eventos

---

## ❓ ¿Necesitas ayuda?

Si no tienes imágenes todavía, las imágenes de Unsplash funcionan perfectamente como placeholder hasta que tengas tus propias fotos.

**Total de imágenes usadas actualmente: ~25**
