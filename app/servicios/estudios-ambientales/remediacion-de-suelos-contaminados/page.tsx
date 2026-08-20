import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Remediación de Suelos Contaminados",
  description: "Caracterización, propuesta de remediación ante PROFEPA y ejecución hasta el oficio de conclusión. Suelo y agua subterránea bajo NOM-138 y NOM-147. IRCA Consultores.",
};

export default function RemediacionSuelos() {
  return (
    <SubservicePage
      parent={{ label: "Estudios ambientales", href: "/servicios/estudios-ambientales/" }}
      title="Caracterización y Remediación de Suelos Contaminados"
      lead="Delimitar hasta dónde llega la contaminación, acordar con la autoridad el nivel de limpieza y ejecutar hasta alcanzarlo. El objetivo no es mover tierra: es cerrar el expediente con el oficio de conclusión de PROFEPA."
      body="Acompañamos el procedimiento completo, que es tanto técnico como administrativo. Una remediación bien ejecutada sin el respaldo documental correcto no libera responsabilidad; y una propuesta mal dimensionada compromete plazos y volúmenes que después no se pueden sostener."
      facts={[
        { label: "Normas", value: "NOM-138 / NOM-147" },
        { label: "Autoridad", value: "PROFEPA · SEMARNAT" },
        { label: "Etapas", value: "Caracterizar → proponer → ejecutar" },
        { label: "Cierre", value: "Oficio de conclusión" },
      ]}
      incluye={[
        "Caracterización con delimitación horizontal y vertical de la afectación",
        "Determinación de los niveles de limpieza aplicables según uso de suelo",
        "Elaboración e ingreso de la propuesta de remediación ante la autoridad",
        "Ejecución: biorremediación, extracción, tratamiento en sitio o excavación y disposición",
        "Muestreo de comprobación con laboratorio acreditado",
        "Gestión del oficio de conclusión que cierra formalmente el expediente",
      ]}
      cuando={[
        "Ocurrió un derrame de hidrocarburos, químicos o residuos peligrosos en tu instalación.",
        "Una evaluación Fase II detectó contaminación que hay que delimitar y atender.",
        "PROFEPA te requirió caracterizar o remediar tras una inspección o una denuncia.",
        "Vas a vender el predio y el comprador condiciona la operación al saneamiento.",
        "Cierras una instalación y necesitas entregar el sitio libre de pasivo ambiental.",
      ]}
      faqs={[
        {
          q: "¿Cuánto tarda una remediación?",
          a: "Depende del contaminante, del volumen afectado y de la tecnología aplicable. Una excavación y disposición se resuelve en semanas pero cuesta más; una biorremediación in situ es más económica y puede tomar meses. A esos plazos hay que sumar los tiempos administrativos: la autoridad debe aprobar la propuesta antes de iniciar y emitir el cierre al terminar.",
        },
        {
          q: "¿Quién autoriza la propuesta de remediación?",
          a: "En sitios de competencia federal, la SEMARNAT y la PROFEPA según el origen del asunto: si deriva de un procedimiento de inspección lo lleva PROFEPA. Los sitios de competencia estatal se atienden ante la autoridad ambiental de la entidad. Determinar bien la competencia al inicio evita rehacer el trámite completo.",
        },
        {
          q: "¿Se puede remediar sin detener la operación?",
          a: "En muchos casos sí. Las tecnologías in situ —biorremediación, extracción de vapores, oxidación química— permiten trabajar bajo instalaciones activas. La excavación es la que suele exigir suspender actividades en el área afectada. La decisión se toma en la propuesta, ponderando plazo, costo y continuidad operativa.",
        },
        {
          q: "¿Qué es el oficio de conclusión y por qué importa tanto?",
          a: "Es el documento con el que la autoridad reconoce que la remediación se ejecutó y que el sitio alcanzó los niveles de limpieza comprometidos. Sin él, la remediación no tiene efecto liberatorio: técnicamente el suelo está limpio, pero el expediente sigue abierto y la responsabilidad permanece. Es el entregable que realmente cierra el asunto.",
        },
      ]}
      contacto={{
        headline: <>Remediar es fácil de empezar y difícil de <span style={{ color: "var(--irca-green)" }}>cerrar bien</span>.</>,
        copy: "Cuéntanos qué contaminante hay, cómo se detectó y si ya existe un requerimiento de autoridad. Con eso definimos si procede caracterizar primero o si el asunto ya requiere una propuesta formal.",
        formTitle: "Consultar remediación de sitio",
        motivoLabel: "Situación del sitio",
        motivoOptions: ["Derrame reciente", "Pasivo detectado en Fase II", "Requerimiento de PROFEPA", "Venta o cierre del predio", "Caracterización inicial", "Otro"],
      }}
    />
  );
}
