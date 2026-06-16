# Alianxa Travel

**Tu mundo, tu viaje** — Agencia de viajes colombiana con paquetes nacionales e internacionales.

## Stack

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Astro | 5.x | Framework web SSG |
| Tailwind CSS | 3.x | Estilos utilitarios |
| TypeScript | 5.x | Tipado estático |
| Astro Content Collections | — | CMS basado en archivos |

## Estructura del proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Header.astro       # Navegación sticky + menú móvil
│   ├── Hero.astro         # Hero + formulario cotización WhatsApp
│   ├── WhyUs.astro        # Beneficios y stats
│   ├── Destinations.astro # Grid destinos destacados
│   ├── Packages.astro     # Paquetes imperdibles
│   ├── SeasonalPromos.astro # Promociones temporada
│   ├── Continental.astro  # Regiones + ecoturismo
│   ├── CTA.astro          # Call to action final
│   ├── Footer.astro       # Certificaciones, links, contacto
│   └── WhatsAppFloat.astro # Botón flotante WhatsApp
│
├── content/               # CMS basado en archivos
│   ├── config.ts          # Zod schemas de colecciones
│   ├── destinos/          # 12 destinos (markdown)
│   ├── paquetes/          # 1 paquete (markdown)
│   ├── promociones/       # 10 promociones (markdown)
│   └── regiones/          # 3 regiones (json)
│
├── layouts/
│   └── Layout.astro       # Layout base (meta, OG, JSON-LD, fonts)
│
├── pages/
│   ├── index.astro        # Homepage
│   ├── destinos/
│   │   ├── index.astro    # Listado todos los destinos
│   │   └── [slug].astro   # Página individual destino
│   └── robots.txt.ts      # Endpoint dinámico robots.txt
│
├── styles/
│   └── global.css         # Tailwind directives + utilidades
│
└── env.d.ts               # Tipados globales
```

## Colecciones (CMS)

### Destinos (`src/content/destinos/`)
```
nombre: string
pais: string
region: 'europa' | 'norteamerica' | 'sudamerica' | 'caribe' | 'asia' | ...
descripcion: string
precioDesde: number
moneda: string (default: USD)
destacado: boolean
imagen: string
imagenes: string[]
tagRegion?: string
seo:
  title: string
  description: string
  keywords: string[]
cta:
  texto: string
  whatsapp: string
```

### Paquetes (`src/content/paquetes/`)
```
nombre: string
destinoSlug: string
pais: string
duracion: string
precio: number
moneda: string
imagen: string
tipo: 'imperdible' | 'promocion' | 'regular'
badge?: string
whatsapp: string
incluye: string[]
```

### Promociones (`src/content/promociones/`)
```
nombre: string
orden: number
slugName: string
pais: string
precio: number
moneda: string
imagen: string
incluye: string[]
badge: string
badgeColor: string
whatsapp: string
destacada: boolean
```

### Regiones (`src/content/regiones/`)
```
nombre: string
slug: string
icon: string
descripcion: string
destinosDestacados: string[]
imagen: string
color: string
whatsapp: string
```

## SEO implementado

### Técnico
- **Sitemap XML** dinámico con `lastmod`, `changefreq`, `priority`
- **robots.txt** dinámico con sitemap-index
- **Canonical URLs** en todas las páginas
- **Hreflang** es-CO, es, x-default

### Open Graph / Twitter Cards
- `og:title`, `og:description`, `og:image`
- `og:locale` es_CO + alterno es
- `twitter:card` summary_large_image

### Schema.org (JSON-LD)
- **TravelAgency** — datos empresa, área geográfica (13 países), redes sociales
- **ItemList** — homepage, destinos listado, promociones
- **TouristDestination** + **Offer** — cada página de destino individual
- **BreadcrumbList** — navegación jerárquica en cada página
- **Product** + **Offer** — paquetes y promociones con SKU y precio hasta
- **FAQPage** — preguntas frecuentes por destino

### Web Vitals
- Lazy loading nativo en imágenes
- `fetchpriority="high"` en hero
- Google Fonts con `display=swap`
- Tailwind purga CSS no usado en build

## Comandos

```bash
npm run dev        # Servidor desarrollo (localhost:4321)
npm run build      # Build producción → dist/
npm run preview    # Vista previa build
```

## Despliegue

El sitio es SSG estático. Sirve la carpeta `dist/` desde cualquier hosting:
- **Netlify** (conecta repo → despliegue automático)
- **Vercel** (compatible nativo con Astro)
- **Cloudflare Pages**
- **Cualquier servidor web** (Apache/Nginx)

## Próximas mejoras SEO (priorizadas)

### Alta prioridad
1. **Páginas individuales `/paquetes/[slug]`** — URL propias para cada paquete con schema TouristTrip
2. **Páginas `/destinos/region/[region]`** — Landing por continente (9 nuevas URLs)
3. **Blog** — Guías de viaje, tips, visados (tráfico informacional)
4. **Schema Review / AggregateRating** — Reseñas reales con calificación

### Media prioridad
5. **Imágenes AVIF + Sharp** — Optimización automática en build
6. **Self-host fonts** — Eliminar dependencia Google Fonts
7. **PWA** — Service worker para caché offline

### Baja prioridad / continua
8. **Actualizar precios** en schema `priceValidUntil` mensualmente
9. **FAQs reales** desde preguntas de clientes WhatsApp
10. **Contenido fresco** en blog (2-4 artículos/mes)

## Contacto

- WhatsApp: [+57 324 6250212](https://wa.me/573246250212)
- Email: reservas.alianxatravel@gmail.com
- Instagram: [@alianxa_travel](https://www.instagram.com/alianxa_travel/)
- Facebook: [Alianxa Travel](https://www.facebook.com/alianxatravel)
