import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Certificación Industria Limpia (PROFEPA)",
  description: "Obtención y renovación del Certificado de Industria Limpia de PROFEPA. Diagnóstico previo, plan de mejora y acompañamiento hasta la certificación. IRCA Consultores.",
};

export default function IndustriaLimpia() {
  return (
    <PlaceholderPage
      eyebrow="Trámites y Licencias Ambientales"
      title="Certificación Industria Limpia (PROFEPA)"
      description="Obtén o renueva el Certificado de Industria Limpia ante PROFEPA. Diagnóstico de brechas, plan de mejora ambiental y acompañamiento integral hasta la obtención del certificado."
      keyword="industria limpia · 590 búsquedas/mes"
    />
  );
}
