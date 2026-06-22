import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Estudio de Riesgo Ambiental (ERA)",
  description: "Estudios de Riesgo Ambiental federal y estatal ante SEMARNAT. Análisis de consecuencias, modelación de dispersión y planes de emergencia para instalaciones con sustancias peligrosas. IRCA Consultores.",
};

export default function ERA() {
  return (
    <PlaceholderPage
      eyebrow="Estudios Ambientales"
      title="Estudio de Riesgo Ambiental (ERA)"
      description="Evaluación de riesgo ambiental para instalaciones con sustancias peligrosas o actividades altamente riesgosas. Modelación de escenarios, análisis de consecuencias y planes de respuesta."
      keyword="estudio de riesgo ambiental · 390 búsquedas/mes"
    />
  );
}
