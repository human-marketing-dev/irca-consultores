import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Ingeniería Ambiental",
  description: "PTAR, remediación de suelos contaminados, control de ruido NOM-081, monitoreo ambiental, forestación y servicios geoespaciales con drones UAV. IRCA Consultores.",
};

export default function IngenieriaAmbiental() {
  return (
    <PlaceholderPage
      eyebrow="Ingeniería ambiental"
      title="Ingeniería ambiental aplicada: PTAR, remediación, ruido y geoespaciales."
      description="Diseño y supervisión de PTAR, remediación de suelos, control de ruido NOM-081, monitoreo de calidad del aire, agua y suelo, y levantamientos con drones UAV."
      keyword="ingeniería ambiental · 8,100 búsquedas/mes"
    />
  );
}
