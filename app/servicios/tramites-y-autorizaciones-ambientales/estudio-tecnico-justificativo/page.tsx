import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Estudio Técnico Justificativo y CUSTF",
  description: "Estudio Técnico Justificativo y gestión del Cambio de Uso de Suelo Forestal ante SEMARNAT: inventario forestal, compensación ambiental y seguimiento hasta la autorización. IRCA Consultores.",
};

export default function EstudioTecnicoJustificativo() {
  return (
    <SubservicePage
      parent={{ label: "Estudios, trámites y administración de autorizaciones", href: "/servicios/tramites-y-autorizaciones-ambientales/" }}
      title="Estudio Técnico Justificativo (ETJ) y CUSTF"
      lead="La autorización que se necesita para retirar vegetación forestal. Sorprende a muchos proyectos porque el concepto legal de terreno forestal es mucho más amplio de lo que sugiere la palabra: incluye matorral y vegetación de zonas áridas."
      body="Elaboramos el Estudio Técnico Justificativo que sustenta la solicitud, calculamos la compensación ambiental y gestionamos el Cambio de Uso de Suelo Forestal hasta la autorización y el pago al Fondo Forestal Mexicano."
      facts={[
        { label: "Autoridad", value: "SEMARNAT" },
        { label: "Requisito", value: "Terreno forestal" },
        { label: "Estudio", value: "ETJ" },
        { label: "Obligación", value: "Compensación ambiental" },
      ]}
      incluye={[
        "Verificación de la condición forestal del predio y de la superficie afectada",
        "Inventario forestal con muestreo estadístico y estimación de existencias",
        "Justificación técnica, económica y social del cambio de uso de suelo",
        "Cálculo de la compensación ambiental y del depósito al Fondo Forestal Mexicano",
        "Medidas de prevención, rescate de flora y fauna y programa de restauración",
        "Gestión del CUSTF y seguimiento hasta la autorización y acreditación del pago",
      ]}
      cuando={[
        "Tu obra ocupa terreno con vegetación forestal, incluido matorral o zonas áridas.",
        "Vas a abrir un camino, una línea eléctrica o un derecho de vía en zona con vegetación.",
        "Desarrollas un proyecto inmobiliario o industrial en un predio no urbanizado.",
        "Necesitas regularizar un desmonte ejecutado sin la autorización previa.",
        "Tu resolutivo de impacto ambiental condiciona el inicio de obra al CUSTF.",
      ]}
      faqs={[
        {
          q: "¿Qué cuenta como terreno forestal?",
          a: "Mucho más de lo que la gente supone. La legislación forestal no se refiere solo a bosque o selva: incluye la vegetación de zonas áridas y semiáridas, como el matorral. En buena parte del norte del país, predios que a simple vista parecen baldíos son legalmente terrenos forestales, y desmontarlos sin autorización constituye una infracción.",
        },
        {
          q: "¿Cuánto cuesta la compensación ambiental?",
          a: "Se calcula por hectárea según el tipo de vegetación afectada, con montos que se actualizan periódicamente. El depósito se hace al Fondo Forestal Mexicano y su acreditación es requisito para que la autorización surta efectos. Conviene estimarlo desde la etapa de factibilidad del proyecto, porque en superficies grandes deja de ser un costo menor.",
        },
        {
          q: "¿Puedo desmontar mientras se resuelve el trámite?",
          a: "No. Retirar vegetación forestal sin la autorización previa es una infracción que puede derivar en clausura, sanción económica y obligación de restaurar el sitio, además de comprometer la autorización del proyecto completo. Es uno de los incumplimientos que PROFEPA detecta con mayor facilidad, porque es visible en imagen satelital.",
        },
        {
          q: "¿El CUSTF va antes o después de la MIA?",
          a: "Son trámites distintos que suelen presentarse de forma coordinada. Cuando el proyecto requiere ambos, la práctica más eficiente es integrarlos desde el inicio para que la información del inventario forestal y la caracterización del sistema ambiental sean consistentes entre los dos expedientes. Presentarlos por separado y sin coordinación es una fuente frecuente de requerimientos.",
        },
      ]}
      contacto={{
        headline: <>Antes de mover una sola máquina, <span style={{ color: "var(--irca-green)" }}>verifica la condición del predio</span>.</>,
        copy: "Cuéntanos dónde se ubica el predio, qué superficie vas a afectar y qué vegetación tiene. Con eso verificamos si requiere CUSTF y estimamos la compensación que implicaría.",
        formTitle: "Consultar ETJ / CUSTF",
        motivoLabel: "Situación del predio",
        motivoOptions: ["Verificar si es terreno forestal", "Proyecto nuevo con desmonte", "Camino o derecho de vía", "Regularizar desmonte ejecutado", "Condicionante de resolutivo", "Otro"],
      }}
    />
  );
}
