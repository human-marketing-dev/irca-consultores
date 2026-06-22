import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "ISO 14001 y Sistemas de Gestión Ambiental",
  description: "Implementación y certificación de Sistemas de Gestión Ambiental bajo ISO 14001:2015. Diagnóstico de brechas, diseño del SGA, auditoría interna y acompañamiento hasta la certificación. IRCA Consultores.",
};

export default function ISO14001() {
  return (
    <PlaceholderPage
      eyebrow="Trámites y Licencias Ambientales"
      title="ISO 14001 y Sistemas de Gestión Ambiental"
      description="Implementación, mantenimiento y auditoría de Sistemas de Gestión Ambiental bajo ISO 14001:2015. Desde el diagnóstico inicial de brechas hasta la certificación con organismo acreditado."
      keyword="sistema de gestión ambiental ISO 14001 · 480 búsquedas/mes"
    />
  );
}
