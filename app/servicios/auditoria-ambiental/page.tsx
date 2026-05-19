import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Auditoría Ambiental",
  description: "Auditoría y diagnóstico ambiental integral en México. Matrices de requerimientos legales, PGI, RETC, COA y planes de manejo. IRCA Consultores, Monterrey.",
};

export default function AuditoriaAmbiental() {
  return (
    <PlaceholderPage
      eyebrow="Auditoría y diagnóstico"
      title="Auditoría ambiental integral y diagnóstico de cumplimiento normativo."
      description="Matrices de requerimientos legales, PGI, RETC, COA, emisiones no conducidas y planes de manejo."
      keyword="auditoría ambiental · 880 búsquedas/mes"
    />
  );
}
