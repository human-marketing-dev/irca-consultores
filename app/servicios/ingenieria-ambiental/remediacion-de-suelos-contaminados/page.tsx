import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Remediación de Suelos Contaminados con Hidrocarburos",
  description: "Evaluación de sitio contaminado, diseño de estrategia de remediación y supervisión de trabajos para suelos contaminados con hidrocarburos y otros contaminantes. Verificación ante SEMARNAT. IRCA Consultores.",
};

export default function RemediacionDeSuelos() {
  return (
    <PlaceholderPage
      eyebrow="Ingeniería Ambiental"
      title="Remediación de Suelos Contaminados"
      description="Evaluación de sitio (Fase I y II), diseño de la estrategia de remediación —biorremediación, extracción de vapores, excavación y disposición— y supervisión de trabajos hasta la verificación ante la autoridad ambiental."
      keyword="remediación de suelos contaminados con hidrocarburos · alta intención comercial"
    />
  );
}
