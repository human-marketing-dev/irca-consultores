import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Seguridad y Salud Ocupacional (SHE / EHS)",
  description: "ISO 45001, matrices legales SST, análisis de riesgos NOM-STPS, Protección Civil y auditorías SHE. Seguridad y salud ocupacional para industria en México.",
};

export default function SeguridadYSalud() {
  return (
    <PlaceholderPage
      eyebrow="Seguridad y salud ocupacional"
      title="ISO 45001, SHE / EHS y cumplimiento normativo STPS."
      description="Implementación de sistemas de gestión, matrices de requerimientos legales, análisis de riesgos, PPA y Programas de Protección Civil para la industria."
    />
  );
}
