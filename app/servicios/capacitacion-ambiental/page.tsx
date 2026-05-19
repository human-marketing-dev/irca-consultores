import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Capacitación Ambiental",
  description: "Cursos ISO 14001, ISO 45001, RETC, manejo de residuos y atención a visitas de inspección. Capacitación ambiental para la industria en México. IRCA Consultores.",
};

export default function CapacitacionAmbiental() {
  return (
    <PlaceholderPage
      eyebrow="Capacitación"
      title="Cursos ISO 14001, ISO 45001, RETC y atención a inspecciones."
      description="Capacitación ambiental especializada para equipos de planta: sistemas de gestión, legislación, manejo de residuos, contingencias y cumplimiento STPS."
      keyword="curso ISO 14001 · 140 búsquedas/mes"
    />
  );
}
