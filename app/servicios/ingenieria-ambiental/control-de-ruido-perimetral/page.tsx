import type { Metadata } from "next";
import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Control de Ruido Perimetral (NOM-081-SEMARNAT)",
  description: "Monitoreo de ruido perimetral con sonómetros de precisión, modelación acústica y diseño de medidas de mitigación bajo NOM-081-SEMARNAT. Clientes: Hunter Douglas, Prolec, Novocast, Vitromex. IRCA Consultores.",
};

export default function ControlDeRuido() {
  return (
    <PlaceholderPage
      eyebrow="Ingeniería Ambiental"
      title="Control de Ruido Perimetral (NOM-081)"
      description="Monitoreo de niveles de ruido en linderos con sonómetros tipo 1 calibrados, modelación acústica del entorno, diagnóstico de cumplimiento NOM-081-SEMARNAT y diseño de barreras o medidas de mitigación."
      keyword="control de ruido perimetral · NOM-081-SEMARNAT"
    />
  );
}
