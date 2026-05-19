import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Consultoría ambiental integral en México: auditorías, estudios de impacto, derecho ambiental, trámites, seguridad ocupacional, ingeniería ambiental y capacitación.",
};

export default function Servicios() {
  return (
    <PlaceholderPage
      eyebrow="Soluciones integrales"
      title="Siete áreas de especialidad, un solo equipo."
      description="Catálogo completo de servicios ambientales de IRCA Consultores: del diagnóstico inicial a la resolución legal."
    />
  );
}
