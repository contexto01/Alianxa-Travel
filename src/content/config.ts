import { defineCollection, z } from 'astro:content'

// Schema para Destinos
const destinosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    pais: z.string(),
    region: z.enum([
      'europa',
      'norteamerica',
      'sudamerica',
      'centroamerica',
      'caribe',
      'asia',
      'medio-oriente',
      'oceania',
      'africa'
    ]),
    descripcion: z.string(),
    precioDesde: z.number(),
    moneda: z.string().default('USD'),
    destacado: z.boolean().default(false),
    imagen: z.string(),
    imagenes: z.array(z.string()).optional(),
    tagRegion: z.string().optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()).optional()
    }),
    cta: z.object({
      texto: z.string().default('Cotizar viaje'),
      whatsapp: z.string()
    })
  })
})

// Schema para Paquetes
const paquetesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    destinoSlug: z.string(), // Relacionado a un destino
    pais: z.string(),
    duracion: z.string(), // "5 días / 4 noches"
    precio: z.number(),
    moneda: z.string().default('USD'),
    imagen: z.string(),
    tipo: z.enum(['imperdible', 'promocion', 'regular']).default('regular'),
    badge: z.string().optional(),
    whatsapp: z.string(),
    incluye: z.array(z.string()).optional()
  })
})

// Schema para Promociones de Temporada
const promocionesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    slugName: z.string(), // Para URL amigable
    pais: z.string(),
    precio: z.number(),
    moneda: z.string().default('USD'),
    imagen: z.string(),
    incluye: z.array(z.string()),
    badge: z.string(),
    badgeColor: z.string(),
    whatsapp: z.string(),
    destacada: z.boolean().default(false)
  })
})

// Schema para Regiones
const regionesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    slug: z.string(),
    icon: z.string(),
    descripcion: z.string(),
    destinosDestacados: z.array(z.string()),
    imagen: z.string(),
    color: z.string(), // Clase Tailwind para gradiente
    whatsapp: z.string()
  })
})

export const collections = {
  destinos: destinosCollection,
  paquetes: paquetesCollection,
  promociones: promocionesCollection,
  regiones: regionesCollection
}
