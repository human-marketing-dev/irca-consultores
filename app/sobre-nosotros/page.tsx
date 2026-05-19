import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce a IRCA Consultores — firma de consultoría ambiental con más de 25 años de experiencia en ingeniería ambiental y cumplimiento normativo en México.",
};

export default function SobreNosotros() {
  return (
    <PlaceholderPage
      eyebrow="Quiénes somos"
      title="Una firma con 25 años de rigor técnico y solidez jurídica."
      description="Historia, equipo, certificaciones y alcance de atención nacional de IRCA Consultores."
    />
  );
}
