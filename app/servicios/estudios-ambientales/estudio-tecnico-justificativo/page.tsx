import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Estudio Técnico Justificativo (ETJ) Forestal",
  description: "Estudios Técnicos Justificativos para cambio de uso de suelo en terrenos forestales ante SEMARNAT y CONAFOR. Desmontes, obras lineales y desarrollos en zonas con vegetación. IRCA Consultores.",
};

export default function ETJ() {
  return (
    <PlaceholderPage
      eyebrow="Estudios Ambientales"
      title="Estudio Técnico Justificativo Forestal (ETJ)"
      description="Autorización de cambio de uso de suelo en terrenos con vegetación forestal ante SEMARNAT y CONAFOR. Inventario de recursos, análisis de impactos y medidas de compensación."
      keyword="estudio técnico justificativo · 140 búsquedas/mes"
    />
  );
}
