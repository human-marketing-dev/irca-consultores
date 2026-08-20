import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "ISO 14001 — Sistemas de Gestión Ambiental",
  description: "Implementación, auditoría interna y preparación para la certificación ISO 14001:2015. Diagnóstico de brechas, documentación del sistema y formación de auditores. IRCA Consultores.",
};

export default function Iso14001() {
  return (
    <SubservicePage
      parent={{ label: "Auditoría y diagnóstico ambiental", href: "/servicios/auditoria-ambiental/" }}
      title="ISO 14001 y Sistemas de Gestión Ambiental"
      lead="El estándar internacional que ordena cómo una organización gestiona su desempeño ambiental: qué aspectos controla, con qué objetivos, bajo qué responsabilidades y con qué evidencia."
      body="Trabajamos las dos puntas del proceso: el diagnóstico de brechas que dice qué falta y la auditoría interna que verifica que el sistema funciona antes de que llegue el organismo certificador. La certificación la emite un tercero acreditado; nosotros te dejamos listo para obtenerla."
      facts={[
        { label: "Norma", value: "ISO 14001:2015" },
        { label: "Alcance", value: "Sistema de Gestión Ambiental" },
        { label: "Certifica", value: "Organismo acreditado" },
        { label: "Ciclo", value: "3 años + vigilancia anual" },
      ]}
      incluye={[
        "Diagnóstico de brechas contra los requisitos de la norma vigente",
        "Análisis de contexto, partes interesadas y alcance del sistema",
        "Identificación y valoración de aspectos e impactos ambientales",
        "Documentación del sistema: política, objetivos, procesos y controles operacionales",
        "Formación de auditores internos y ejecución de la auditoría interna",
        "Acompañamiento en la revisión por la dirección y en la auditoría de certificación",
      ]}
      cuando={[
        "Un cliente internacional o una cadena de suministro exige el certificado.",
        "Tu gestión ambiental funciona por costumbre y necesitas volverla un sistema documentado.",
        "Ya estás certificado y se aproxima la auditoría de vigilancia o la recertificación.",
        "Una auditoría previa te dejó no conformidades abiertas que hay que cerrar.",
        "Quieres integrar la gestión ambiental con ISO 45001 bajo una misma estructura.",
      ]}
      faqs={[
        {
          q: "¿Ustedes emiten el certificado?",
          a: "No, y ninguna consultora puede hacerlo: la norma exige independencia entre quien implementa y quien certifica. El certificado lo emite un organismo de certificación acreditado. Nuestro trabajo es dejar el sistema operando y auditado internamente para que esa evaluación externa se apruebe sin sobresaltos.",
        },
        {
          q: "¿Cuánto tarda implementar el sistema?",
          a: "Depende del punto de partida y del tamaño de la organización. Una empresa que ya tiene sus obligaciones legales identificadas y controles operando avanza mucho más rápido que una que empieza desde cero. El factor que más alarga el proceso no suele ser la documentación, sino generar la evidencia de que el sistema lleva tiempo funcionando: los auditores piden registros de varios meses.",
        },
        {
          q: "¿ISO 14001 me hace cumplir la normatividad mexicana?",
          a: "No automáticamente, pero ayuda de forma sustancial. La norma exige identificar los requisitos legales aplicables y evaluar periódicamente su cumplimiento, lo que obliga a construir y mantener la matriz de obligaciones. Aun así, el certificado no acredita cumplimiento ante PROFEPA ni sustituye ninguna licencia o autorización.",
        },
        {
          q: "¿Conviene integrarlo con ISO 45001?",
          a: "En la mayoría de los casos sí. Ambas normas comparten la misma estructura de alto nivel, de modo que contexto, liderazgo, planificación, competencia, documentación y auditoría interna pueden gestionarse una sola vez. Un sistema integrado reduce duplicidad documental y hace más eficiente cada ciclo de auditoría.",
        },
      ]}
      contacto={{
        headline: <>Un sistema que funciona <span style={{ color: "var(--irca-green)" }}>antes de que llegue el certificador</span>.</>,
        copy: "Cuéntanos si empiezas desde cero, si vienes de una auditoría con no conformidades o si preparas una recertificación. Con eso definimos el alcance real del acompañamiento.",
        formTitle: "Consultar ISO 14001",
        motivoLabel: "Etapa en la que estás",
        motivoOptions: ["Implementación desde cero", "Diagnóstico de brechas", "Auditoría interna", "Recertificación o vigilancia", "Sistema integrado con ISO 45001", "Otro"],
      }}
    />
  );
}
