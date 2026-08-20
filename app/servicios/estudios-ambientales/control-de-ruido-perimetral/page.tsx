import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Control de Ruido Perimetral (NOM-081-SEMARNAT)",
  description: "Estudios de ruido perimetral conforme a la NOM-081-SEMARNAT con sonómetros calibrados clase 1, identificación de fuentes y diseño de medidas de control acústico. IRCA Consultores.",
};

export default function ControlDeRuido() {
  return (
    <SubservicePage
      parent={{ label: "Estudios ambientales", href: "/servicios/estudios-ambientales/" }}
      title="Estudio y Control de Ruido Perimetral (NOM-081)"
      lead="La medición que acredita si tu instalación cumple los límites de emisión de ruido en su colindancia. Es de los pocos temas ambientales que el vecino percibe de forma directa, y por eso una de las causas más frecuentes de denuncia."
      body="No nos quedamos en el informe. Cuando el resultado rebasa el límite, identificamos qué fuente lo domina y diseñamos la medida de control —encapsulamiento, barrera, silenciador, reubicación— dimensionada para la atenuación que hace falta."
      facts={[
        { label: "Norma", value: "NOM-081-SEMARNAT-1994" },
        { label: "Límite diurno", value: "68 dB(A)" },
        { label: "Límite nocturno", value: "65 dB(A)" },
        { label: "Equipo", value: "Sonómetro clase 1 calibrado" },
      ]}
      incluye={[
        "Medición perimetral en horario diurno y nocturno conforme al procedimiento de la norma",
        "Sonómetros clase 1 con certificado de calibración vigente y trazable",
        "Informe con memoria de cálculo, ubicación de puntos y condiciones de medición",
        "Identificación de las fuentes dominantes que gobiernan el nivel medido",
        "Diseño de medidas de control acústico con la atenuación requerida",
        "Medición de verificación posterior a la implementación de las medidas",
      ]}
      cuando={[
        "Recibiste quejas o una denuncia de vecinos por ruido de tu operación.",
        "La autoridad ambiental te requirió el estudio tras una inspección.",
        "Tu resolutivo de impacto ambiental incluye una condicionante de monitoreo de ruido.",
        "Vas a instalar equipo nuevo o ampliar y necesitas anticipar su aporte acústico.",
        "Tramitas la Licencia Ambiental Única y el estudio forma parte del expediente.",
      ]}
      faqs={[
        {
          q: "¿Cuáles son los límites que exige la norma?",
          a: "La NOM-081-SEMARNAT establece 68 dB(A) en horario diurno y 65 dB(A) en nocturno, medidos en la colindancia de la fuente. Conviene revisar además la reglamentación municipal y estatal: varios municipios fijan límites más estrictos por zonificación, y en zonas habitacionales el criterio local suele ser el que manda.",
        },
        {
          q: "¿Cada cuándo hay que medir?",
          a: "La norma no impone una periodicidad general. La frecuencia la define lo que te aplique a ti: una condicionante de tu resolutivo, un requerimiento expreso de la autoridad o el trámite de una licencia. Fuera de esos supuestos, conviene medir cuando cambia el equipo, el proceso o el horario de operación, porque cualquiera de los tres altera el resultado.",
        },
        {
          q: "¿Qué pasa si rebaso el límite?",
          a: "El estudio deja de ser un trámite y se convierte en un diagnóstico. Lo primero es identificar qué fuente domina el nivel medido, porque casi siempre son una o dos y no el conjunto de la planta. Sobre eso se diseña la medida de control con la atenuación necesaria y se vuelve a medir para acreditar el cumplimiento ante la autoridad.",
        },
        {
          q: "¿El mismo estudio sirve para el municipio?",
          a: "Generalmente sí, siempre que la medición se haga con equipo calibrado y procedimiento documentado. Lo que suele cambiar es el criterio de evaluación: el municipio puede aplicar límites distintos según la zonificación, y en ocasiones pide puntos de medición adicionales. Vale la pena verificarlo antes de definir el alcance para no repetir el trabajo de campo.",
        },
      ]}
      contacto={{
        headline: <>Medir es el primer paso; <span style={{ color: "var(--irca-green)" }}>bajar el nivel</span> es el que resuelve.</>,
        copy: "Cuéntanos si tienes una queja, un requerimiento o una condicionante por cumplir, y qué tipo de equipo opera en la planta. Con eso definimos los puntos de medición y los horarios que hacen falta.",
        formTitle: "Solicitar estudio de ruido",
        motivoLabel: "Motivo del estudio",
        motivoOptions: ["Queja o denuncia de vecinos", "Requerimiento de autoridad", "Condicionante de resolutivo", "Trámite de licencia (LAU)", "Diseño de control acústico", "Otro"],
      }}
    />
  );
}
