import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Estudio de Riesgo Ambiental (ERA)",
  description: "Estudio de Riesgo Ambiental para actividades altamente riesgosas: modelación de escenarios, radios de afectación y Programa de Prevención de Accidentes. IRCA Consultores.",
};

export default function EstudioDeRiesgoAmbiental() {
  return (
    <SubservicePage
      parent={{ label: "Estudios, trámites y administración de autorizaciones", href: "/servicios/tramites-y-autorizaciones-ambientales/" }}
      title="Estudio de Riesgo Ambiental (ERA)"
      lead="El estudio que modela qué pasaría si algo sale mal: qué sustancia se libera, hasta dónde alcanza y a quién afecta. Es obligatorio para las actividades consideradas altamente riesgosas y acompaña a la manifestación de impacto ambiental."
      body="De su resultado dependen decisiones que van mucho más allá del trámite: distancias de resguardo, ubicación de equipo crítico, capacidad de almacenamiento y el Programa de Prevención de Accidentes que se deriva de él."
      facts={[
        { label: "Aplica a", value: "Actividades altamente riesgosas" },
        { label: "Referencia", value: "Listados de actividades riesgosas" },
        { label: "Autoridad", value: "SEMARNAT" },
        { label: "Deriva en", value: "Programa de Prevención (PPA)" },
      ]}
      incluye={[
        "Verificación de las cantidades de reporte de sustancias frente a los listados oficiales",
        "Análisis de riesgo de proceso y de los eventos iniciadores posibles",
        "Modelación de escenarios: fuga, derrame, incendio, explosión y dispersión de nube tóxica",
        "Determinación de radios de afectación y de las zonas de amortiguamiento",
        "Medidas de prevención, control y mitigación jerarquizadas por escenario",
        "Integración del Programa de Prevención de Accidentes derivado del estudio",
      ]}
      cuando={[
        "Manejas o almacenas sustancias en cantidades iguales o superiores a las de reporte.",
        "Tu manifestación de impacto ambiental lo exige por el tipo de actividad del proyecto.",
        "Vas a ampliar capacidad de almacenamiento o a incorporar una sustancia nueva.",
        "La autoridad te lo requirió tras una inspección o a raíz de un incidente.",
        "Protección Civil te solicita sustento técnico para tu programa interno.",
      ]}
      faqs={[
        {
          q: "¿Cuándo es obligatorio el ERA?",
          a: "Cuando la instalación maneja alguna de las sustancias de los listados oficiales de actividades altamente riesgosas en cantidad igual o mayor a la cantidad de reporte. No depende del giro ni del tamaño de la empresa, sino de la sustancia y del volumen: una operación pequeña puede estar obligada y una planta grande no estarlo.",
        },
        {
          q: "¿Qué es la cantidad de reporte?",
          a: "Es el umbral, publicado por sustancia, a partir del cual una actividad se considera altamente riesgosa. Se evalúa contra la cantidad máxima presente en la instalación en un momento dado —incluyendo almacenamiento, proceso y tránsito interno—, no contra el consumo anual. Ese es el error de cálculo más frecuente.",
        },
        {
          q: "¿Cuál es la relación entre el ERA y el PPA?",
          a: "El ERA es el diagnóstico y el PPA la respuesta. El estudio identifica y modela los escenarios de riesgo; el Programa de Prevención de Accidentes traduce esos escenarios en medidas, protocolos, equipamiento y capacitación. Se presentan de forma vinculada y no tiene sentido elaborar uno sin el otro.",
        },
        {
          q: "¿Sustituye al programa de Protección Civil?",
          a: "No, son instrumentos distintos ante autoridades distintas: el ERA y el PPA se presentan en materia ambiental federal, mientras que el Programa Interno de Protección Civil responde a la normatividad de protección civil estatal o municipal. Comparten insumos —el análisis de riesgo, los escenarios, las brigadas— por lo que conviene elaborarlos de forma coordinada para no producir versiones que se contradigan.",
        },
      ]}
      contacto={{
        headline: <>Modelar el peor escenario <span style={{ color: "var(--irca-green)" }}>antes de que sea real</span>.</>,
        copy: "Cuéntanos qué sustancias manejas y en qué cantidades máximas. Con eso verificamos si estás en el supuesto de actividad altamente riesgosa y definimos el alcance del estudio.",
        formTitle: "Consultar ERA",
        motivoLabel: "Situación",
        motivoOptions: ["Verificar si me aplica", "ERA para MIA en trámite", "Ampliación de capacidad", "Programa de Prevención de Accidentes", "Requerimiento de autoridad", "Otro"],
      }}
    />
  );
}
