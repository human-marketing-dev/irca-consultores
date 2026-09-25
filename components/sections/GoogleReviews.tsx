/*
 * Reseñas de Google.
 * PENDIENTE: estas reseñas son de ejemplo para maquetar la sección. Sustituirlas por
 * reseñas reales del perfil de Google de IRCA Consultores (texto, nombre y fecha tal
 * como aparecen) antes de publicar el sitio. `example: true` marca las que faltan.
 */
const reviews = [
  {
    author: "Nombre del cliente",
    role: "Gerente de medio ambiente · Manufactura",
    text: "Llevan nuestra LAU y la COA desde hace varios años. Lo que más valoramos es que te dicen claro qué sí te aplica y qué no, sin inflar el alcance. Cuando llegó la visita de PROFEPA ya teníamos todo el expediente en orden.",
    example: true,
  },
  {
    author: "Nombre del cliente",
    role: "Director de proyecto · Desarrollo inmobiliario",
    text: "Nos ayudaron con la MIA y el estudio hidrológico del fraccionamiento. Hubo observaciones de la autoridad y las contestaron en tiempo, con buen soporte técnico. Buena comunicación durante todo el proceso.",
    example: true,
  },
  {
    author: "Nombre del cliente",
    role: "Coordinadora de seguridad e higiene · Industria química",
    text: "Tomamos con ellos el curso de atención de visitas de inspección. Muy práctico, con ejemplos reales y sin rodeos. El equipo salió sabiendo exactamente qué hacer y qué no firmar.",
    example: true,
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 2, color: "#f5b400" }} aria-label="5 de 5 estrellas">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-soft)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--irca-green-700)" }}>
          <span style={{ width: 24, height: 2, background: "var(--irca-green-700)", display: "inline-block" }} />
          Reseñas
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4 mb-10">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0, color: "var(--ink-1000)", maxWidth: "22ch" }}>
            Lo que dicen nuestros clientes
          </h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--fg-3)" }}>
            <GoogleG /> Reseñas en Google
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map(({ author, role, text }, i) => (
            <article
              key={i}
              style={{ background: "var(--bg-1)", border: "1px solid var(--border-soft)", borderRadius: 14, padding: 24, boxShadow: "var(--shadow-1)", display: "flex", flexDirection: "column", gap: 14 }}
            >
              <Stars />
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg-2)", margin: 0 }}>“{text}”</p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 999, background: "var(--irca-blue-50)", color: "var(--irca-blue-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                  {author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--fg-1)" }}>{author}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-4)" }}>{role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
