import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Evaluación Ambiental de Sitio Fase I y Fase II",
  description: "Evaluaciones ambientales de sitio bajo metodología ASTM E1527-13 para adquisiciones, fusiones y due diligence industrial e inmobiliario. Phase I y Phase II en México. IRCA Consultores.",
};

export default function EvaluacionAmbiental() {
  return (
    <PlaceholderPage
      eyebrow="Estudios Ambientales"
      title="Evaluación Ambiental de Sitio Fase I y II"
      description="Evaluación de pasivo ambiental bajo metodología ASTM E1527-13 para compraventas, fusiones y financiamientos. Fase I (revisión documental y reconocimiento) y Fase II (muestreo y análisis)."
      keyword="evaluación ambiental de sitio fase 1 · due diligence ASTM"
    />
  );
}
