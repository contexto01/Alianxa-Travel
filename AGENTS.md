# AGENTS.md — Alianxa Travel

## Stack
- **Framework:** Astro v5 (SSG)
- **Estilos:** Tailwind CSS v3
- **Lenguaje:** TypeScript
- **Package Manager:** npm
- **Deploy:** Cloudflare Pages

## Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar build |
| `npm install` | Sincronizar dependencias y lock file |

## Antes de hacer deploy a Cloudflare

Siempre ejecutar `npm install` antes de commitear para mantener `package-lock.json` sincronizado con `package.json`. Cloudflare usa `npm ci` que falla si el lock file está desactualizado.

TypeScript es requerido (`devDependencies`) porque Cloudflare lo necesita en el entorno de build.

## Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `brand-navy` | `#0A2540` | Títulos, estructura, texto principal |
| `brand-teal` | `#14b8a6` | CTAs, botones WhatsApp |
| `brand-amber` | `#F59E0B` | Precios, badges de acento |
| `bg-slate-50` | Tailwind | Fondo general |
| `bg-white` + `border-slate-200` | Tailwind | Contenedores |

## Estructura del proyecto

```
src/
  pages/
    index.astro              → Homepage
    destinos/
      index.astro            → Listado de destinos
      [slug].astro           → Template de detalle (estilo landing conversion)
  components/
    Header.astro, Footer.astro, Hero.astro, WhyUs.astro,
    SeasonalPromos.astro, CTA.astro, WhatsAppFloat.astro, ...
  content/
    destinos/                → MD con frontmatter (san-andres, cartagena, etc.)
      └── campos: planes[], duracion, tarifaNinos{}, noIncluye
    promociones/             → MD con promociones
    paquetes/                → MD con paquetes
  styles/
    global.css               → Tailwind + clases utilitarias
```
