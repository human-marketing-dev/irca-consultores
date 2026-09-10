import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ircaconsultores.com'

/** Rutas del sitio agrupadas por prioridad. */
const routes: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
  // Portada
  { path: '', priority: 1.0, changeFrequency: 'monthly' },

  // Catálogo e institucionales
  { path: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sobre-nosotros', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/experiencia', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contacto', priority: 0.8, changeFrequency: 'yearly' },

  // Legales
  { path: '/aviso-de-privacidad', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terminos-y-condiciones', priority: 0.3, changeFrequency: 'yearly' },

  // Los nueve servicios
  { path: '/servicios/auditoria-ambiental-seguridad-y-salud', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/ingenieria-ambiental', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/tramites-y-autorizaciones-ambientales', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/servicios-legales-y-atencion-de-autoridades', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/consultoria-y-supervision-ambiental', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/proyectos-de-seguridad-y-salud', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/estudios-de-viabilidad', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/capacitacion-tecnica-especializada', priority: 0.8, changeFrequency: 'monthly' },

  // Especialidades — Auditoría y diagnóstico ambiental
  { path: '/servicios/auditoria-ambiental-seguridad-y-salud/industria-limpia', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/servicios/auditoria-ambiental-seguridad-y-salud/iso-14001', priority: 0.6, changeFrequency: 'yearly' },

  // Especialidades — Estudios ambientales
  { path: '/servicios/ingenieria-ambiental/evaluacion-ambiental-fase-1-y-2', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/servicios/ingenieria-ambiental/remediacion-de-suelos-contaminados', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/servicios/ingenieria-ambiental/control-de-ruido-perimetral', priority: 0.6, changeFrequency: 'yearly' },

  // Especialidades — Estudios, trámites y administración de autorizaciones
  { path: '/servicios/tramites-y-autorizaciones-ambientales/estudio-de-impacto-ambiental', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/servicios/tramites-y-autorizaciones-ambientales/estudio-de-riesgo-ambiental', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/servicios/tramites-y-autorizaciones-ambientales/estudio-tecnico-justificativo', priority: 0.6, changeFrequency: 'yearly' },

  // Especialidades — Estudios de ingeniería
  { path: '/servicios/estudios-de-viabilidad/servicios-geoespaciales', priority: 0.6, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
