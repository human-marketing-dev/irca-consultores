import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Estudios Ambientales",
  description: "MIA, ERA, ETJ, Evaluación Ambiental Fase I y II (ASTM E1527). Estudios de impacto y riesgo ambiental en México. IRCA Consultores.",
};

export default function EstudiosAmbientales() {
  return (
    <PlaceholderPage
      eyebrow="Estudios e impacto"
      title="Estudios ambientales: MIA, ERA, ETJ y Fase I y II."
      description="Manifestaciones de Impacto Ambiental, Estudios de Riesgo, Estudios Técnicos Justificativos y Evaluaciones de Sitio para due diligence y cumplimiento federal."
      keyword="estudios ambientales"
    />
  );
}
