import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Experiencia y Clientes",
  description: "Proyectos de seguimiento ambiental de largo plazo, estudios Phase I y II, y casos representativos de IRCA Consultores con Deacero, Vitromex, Frisa, Daltile y más.",
};

export default function Experiencia() {
  return (
    <PlaceholderPage
      eyebrow="Trayectoria comprobada"
      title="Más de 500 proyectos. Clientes que renuevan año tras año."
      description="Proyectos emblemáticos, seguimientos de largo plazo y los clientes que han confiado en IRCA desde 1999."
    />
  );
}
