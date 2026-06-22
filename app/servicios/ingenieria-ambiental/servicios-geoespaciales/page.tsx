import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Servicios Geoespaciales y Levantamientos con Drones",
  description: "Levantamientos fotogramétricos con drones (UAV), Modelos Digitales de Elevaciones, ortofotomosaicos, curvas de nivel y capas SIG para proyectos ambientales, hidrológicos y de ingeniería. IRCA Consultores.",
};

export default function ServiciosGeoespaciales() {
  return (
    <PlaceholderPage
      eyebrow="Ingeniería Ambiental"
      title="Servicios Geoespaciales y Drones (UAV)"
      description="Vuelos con drones para levantamiento fotogramétrico, generación de DEM y ortofotomosaicos georreferenciados, curvas de nivel en formato vectorial (SHP, GeoPackage, DXF) y capas SIG de vegetación y cobertura del suelo."
      keyword="servicios geoespaciales · UAV · DEM · ortofotomosaico"
    />
  );
}
