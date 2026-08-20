import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Manifestación de Impacto Ambiental (MIA)",
  description: "Elaboración y gestión de la MIA en modalidad particular o regional ante SEMARNAT y autoridades estatales, con seguimiento hasta el resolutivo. IRCA Consultores.",
};

export default function EstudioDeImpactoAmbiental() {
  return (
    <SubservicePage
      parent={{ label: "Estudios, trámites y administración de autorizaciones", href: "/servicios/tramites-y-autorizaciones-ambientales/" }}
      title="Manifestación de Impacto Ambiental (MIA)"
      lead="El estudio con el que la autoridad decide si un proyecto puede construirse y bajo qué condiciones. Sin resolutivo favorable no hay obra legal: es el trámite que gobierna el calendario completo de una inversión."
      body="La preparamos con la modalidad y la competencia correctas desde el inicio —el error más caro es equivocarse ahí— y acompañamos el expediente hasta el resolutivo, incluida la atención de requerimientos de información adicional."
      facts={[
        { label: "Autoridad", value: "SEMARNAT o estatal" },
        { label: "Modalidades", value: "Particular y regional" },
        { label: "Plazo legal", value: "60 días hábiles" },
        { label: "Resultado", value: "Resolutivo con condicionantes" },
      ]}
      incluye={[
        "Determinación de la competencia federal o estatal y de la modalidad aplicable",
        "Descripción del proyecto, obras asociadas y programa de trabajo",
        "Caracterización del sistema ambiental: medio físico, biótico y socioeconómico",
        "Identificación, evaluación y valoración de impactos por etapa del proyecto",
        "Medidas de prevención, mitigación y compensación con indicadores de seguimiento",
        "Ingreso, atención de requerimientos y seguimiento hasta la emisión del resolutivo",
      ]}
      cuando={[
        "Vas a construir una obra nueva en alguna de las materias de competencia federal.",
        "Amplías o modificas una instalación de forma que cambia lo autorizado originalmente.",
        "Tu proyecto ocupa terrenos forestales y requiere autorización de cambio de uso de suelo.",
        "Necesitas regularizar una operación que inició sin la autorización correspondiente.",
        "El proyecto se ubica en zona federal marítimo terrestre o en un área natural protegida.",
      ]}
      faqs={[
        {
          q: "¿Cuándo es federal y cuándo estatal?",
          a: "La Ley General del Equilibrio Ecológico reserva a la federación materias específicas: obra hidráulica, vías generales de comunicación, industria química y petroquímica, actividades altamente riesgosas, aprovechamientos forestales y proyectos en áreas naturales protegidas o zona federal marítimo terrestre, entre otras. Lo que no cae en esos supuestos suele ser competencia estatal. Determinarlo mal implica rehacer el trámite completo ante la otra autoridad.",
        },
        {
          q: "¿Particular o regional?",
          a: "La modalidad particular aplica a un proyecto individual y es la más común. La regional se exige cuando el proyecto forma parte de un conjunto de obras vinculadas, cuando incide en un ecosistema compartido o cuando se ubica en zonas con un programa de ordenamiento aplicable. La regional exige un análisis territorial más amplio y toma más tiempo elaborarla.",
        },
        {
          q: "¿Cuánto tarda realmente?",
          a: "El plazo legal de resolución es de 60 días hábiles, pero el reloj se suspende cada vez que la autoridad emite un requerimiento de información adicional. En la práctica el plazo real depende de la calidad del expediente que ingresa: un estudio completo y bien fundamentado reduce drásticamente esas suspensiones, que son la causa principal de que un trámite se alargue meses.",
        },
        {
          q: "¿Qué pasa si ya estoy operando sin MIA?",
          a: "Es una irregularidad que expone a clausura y a sanción económica, y no prescribe por el paso del tiempo. Existen vías de regularización, pero conviene evaluarlas con criterio técnico y jurídico a la vez: presentar el estudio sin una estrategia previa puede equivaler a autodenunciarse ante la autoridad sin haber preparado la defensa.",
        },
      ]}
      contacto={{
        headline: <>El resolutivo define el calendario <span style={{ color: "var(--irca-green)" }}>de toda la inversión</span>.</>,
        copy: "Cuéntanos qué proyecto quieres autorizar, dónde se ubica y en qué etapa está. Con eso determinamos la competencia, la modalidad y el plazo realista del trámite.",
        formTitle: "Consultar MIA",
        motivoLabel: "Etapa del proyecto",
        motivoOptions: ["Proyecto nuevo", "Ampliación o modificación", "Regularización de operación", "Atención de requerimiento", "No sé qué modalidad me aplica", "Otro"],
      }}
    />
  );
}
