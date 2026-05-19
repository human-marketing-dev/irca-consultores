import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Trámites y Licencias Ambientales",
  description: "Licencia Ambiental Única (LAU), COA, CONAGUA, RETC, Industria Limpia (PROFEPA) e ISO 14001. Gestión de trámites ambientales en México. IRCA Consultores.",
};

export default function TramitesYLicencias() {
  return (
    <PlaceholderPage
      eyebrow="Trámites y licencias"
      title="Licencia ambiental única, COA, RETC e Industria Limpia."
      description="Gestión integral de trámites ante SEMARNAT, PROFEPA, CONAGUA y autoridades estatales. Certificación Industria Limpia e implementación de ISO 14001."
      keyword="licencia ambiental única · 880 búsquedas/mes"
    />
  );
}
