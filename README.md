# Alianxa Travel — Sitio Web Oficial

Sitio web profesional para **Alianxa Travel**, agencia de viajes colombiana.

## 🚀 Tecnologías

- **Astro 4** — Framework web moderno y rápido
- **Tailwind CSS 3** — Framework de estilos utilitarios
- **Vanilla JS** — Interactividad ligera sin dependencias innecesarias

## 📦 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build

# 4. Vista previa del build
npm run preview
```

El servidor de desarrollo abrirá en `http://localhost:4321`

## 🏗️ Estructura del proyecto

```
alianxa-travel/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro         # Navegación sticky con menú móvil
│   │   ├── Hero.astro           # Hero con formulario de cotización
│   │   ├── WhyUs.astro          # Sobre nosotros + beneficios
│   │   ├── Destinations.astro   # Grid de destinos destacados
│   │   ├── Packages.astro       # Paquetes imperdibles (sección roja)
│   │   ├── SeasonalPromos.astro # Promociones de temporada
│   │   ├── Continental.astro    # Exploración por región + Ecoturismo
│   │   ├── CTA.astro            # CTA final + contacto
│   │   ├── Footer.astro         # Pie de página completo
│   │   └── WhatsAppFloat.astro  # Botón flotante de WhatsApp
│   ├── layouts/
│   │   └── Layout.astro         # Layout base con SEO meta tags
│   ├── pages/
│   │   └── index.astro          # Página principal
│   └── styles/
│       └── global.css           # Estilos globales + Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Colores de la marca

| Color   | Hex       | Uso                      |
|---------|-----------|--------------------------|
| Azul    | `#1a3a7c` | Primario / Header        |
| Amarillo| `#f5c400` | Acentos / CTA principal  |
| Rojo    | `#e8323a` | Acciones / Secciones CTA |

## ✅ Características

- ✅ 100% Responsive (móvil, tablet, desktop)
- ✅ SEO optimizado (meta tags, OG, Twitter Cards, Schema.org)
- ✅ Formulario de cotización → WhatsApp
- ✅ Botón flotante de WhatsApp con tooltip
- ✅ Animaciones scroll-reveal
- ✅ Menú hamburguesa para móvil
- ✅ Todas las secciones: Hero, Nosotros, Destinos, Paquetes, Promociones, Ecoturismo, CTA, Footer
- ✅ Performance optimizada (imágenes lazy load, fonts preconnect)

## ⚙️ Personalización

### Cambiar el número de WhatsApp
Busca `573001234567` en todos los archivos y reemplaza con tu número (sin `+` ni espacios).

### Cambiar imágenes
Las imágenes usan URLs de Unsplash. Reemplaza las URLs con tus imágenes propias en cada componente.

### Agregar/quitar paquetes
Edita los arrays `packages`, `promos`, `destinations` en los componentes correspondientes.

## 📱 Despliegue recomendado

- **Netlify** — Conecta el repositorio y despliega automáticamente
- **Vercel** — Compatible con Astro out-of-the-box
- **GitHub Pages** — Requiere configurar `base` en `astro.config.mjs`

## 📞 Contacto

Para soporte o personalización adicional, contacta a tu equipo de desarrollo.
