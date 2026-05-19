import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Derecho Ambiental y Defensa Jurídica",
  description: "Despacho de derecho ambiental y defensa jurídica ante PROFEPA, SEMARNAT y CONAGUA. Litigio ambiental, amparo y procedimientos administrativos en México.",
};

export default function DerechoAmbiental() {
  return (
    <PlaceholderPage
      eyebrow="Defensa jurídica ambiental"
      title="Derecho ambiental y defensa jurídica ante PROFEPA, SEMARNAT y CONAGUA."
      description="Litigio ambiental, amparo indirecto, recursos de revisión, juicios de nulidad e intermediación con autoridades federales y estatales."
      keyword="derecho ambiental · 2,900 búsquedas/mes"
    />
  );
}
