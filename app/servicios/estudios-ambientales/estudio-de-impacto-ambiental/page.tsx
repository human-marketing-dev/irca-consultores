import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Estudio de Impacto Ambiental (MIA)",
  description: "Manifestaciones de Impacto Ambiental federal y estatal ante SEMARNAT. Elaboración y gestión de MIA para proyectos industriales, energéticos y mineros en México. IRCA Consultores.",
};

export default function MIA() {
  return (
    <PlaceholderPage
      eyebrow="Estudios Ambientales"
      title="Estudio de Impacto Ambiental (MIA)"
      description="Manifestaciones de Impacto Ambiental federal y estatal ante SEMARNAT. Modalidad particular y regional para proyectos industriales, energéticos, mineros e inmobiliarios."
      keyword="estudio de impacto ambiental · 880 búsquedas/mes"
    />
  );
}
