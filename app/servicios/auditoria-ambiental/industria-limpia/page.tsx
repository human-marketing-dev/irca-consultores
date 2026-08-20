import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Certificación Industria Limpia (PROFEPA)",
  description: "Obtención y renovación del Certificado de Industria Limpia de PROFEPA. Diagnóstico previo, plan de acción y acompañamiento hasta la certificación. IRCA Consultores.",
};

export default function IndustriaLimpia() {
  return (
    <SubservicePage
      parent={{ label: "Auditoría y diagnóstico ambiental", href: "/servicios/auditoria-ambiental/" }}
      title="Certificación Industria Limpia (PROFEPA)"
      lead="El reconocimiento con el que PROFEPA acredita que una instalación opera por encima de lo que exige la norma. Es voluntario, pero se ha vuelto requisito de facto en licitaciones públicas y cadenas de suministro."
      body="Acompañamos el proceso completo del Programa Nacional de Auditoría Ambiental: del diagnóstico previo que dice si estás listo, al plan de acción, la auditoría con auditor aprobado y el seguimiento hasta que el certificado se emite."
      facts={[
        { label: "Autoridad", value: "PROFEPA" },
        { label: "Programa", value: "PNAA" },
        { label: "Carácter", value: "Voluntario" },
        { label: "Vigencia", value: "2 años, renovable" },
      ]}
      incluye={[
        "Diagnóstico previo de brechas frente a los términos de referencia del PNAA",
        "Elaboración del plan de acción con responsables, plazos y evidencia requerida",
        "Coordinación con el auditor ambiental aprobado por PROFEPA",
        "Acompañamiento durante la auditoría en sitio y la revisión documental",
        "Seguimiento del plan hasta el cierre de la totalidad de los hallazgos",
        "Gestión de la renovación antes del vencimiento del certificado",
      ]}
      cuando={[
        "Un cliente, un corporativo o una licitación pública te lo exige como requisito.",
        "Quieres reducir la frecuencia y el alcance de las visitas de inspección de PROFEPA.",
        "Tu certificado está por vencer y necesitas renovarlo sin interrupción.",
        "Buscas diferenciarte comercialmente acreditando desempeño ambiental verificado.",
        "Vienes de un procedimiento sancionador y quieres reconstruir tu posición ante la autoridad.",
      ]}
      faqs={[
        {
          q: "¿La certificación es obligatoria?",
          a: "No. El Programa Nacional de Auditoría Ambiental es voluntario. Lo que no es voluntario son las obligaciones que evalúa: la certificación sólo acredita que las cumples y que además superas el mínimo normativo. En la práctica, muchas licitaciones públicas y contratos con grandes corporativos ya la piden, así que su carácter voluntario es relativo.",
        },
        {
          q: "¿Cuánto dura la vigencia y qué implica renovarla?",
          a: "El certificado tiene vigencia de dos años. La renovación no repite el proceso desde cero: se verifica que el sistema siga operando y que los compromisos adquiridos se hayan sostenido. Por eso conviene mantener el expediente vivo durante la vigencia en lugar de reactivarlo unos meses antes del vencimiento.",
        },
        {
          q: "¿En qué se diferencia de ISO 14001?",
          a: "Industria Limpia es un programa nacional ante una autoridad mexicana —PROFEPA— y se centra en el cumplimiento de la normatividad ambiental aplicable. ISO 14001 es un estándar internacional de gestión, evaluado por un organismo certificador privado, centrado en el sistema y su mejora continua. No se sustituyen: es común tener ambos, y quien ya opera un sistema ISO suele llegar mejor preparado a la auditoría de PROFEPA.",
        },
        {
          q: "¿Qué pasa si la auditoría detecta incumplimientos?",
          a: "Es lo normal, y no impide certificarse. Los hallazgos se integran en un plan de acción con plazos comprometidos ante PROFEPA; el certificado se emite cuando el plan se cumple. El riesgo real no es que aparezcan hallazgos, sino comprometer plazos que no se pueden sostener: por eso el diagnóstico previo es determinante.",
        },
      ]}
      contacto={{
        headline: <>Certifícate con quien ya sabe <span style={{ color: "var(--irca-green)" }}>qué va a encontrar la auditoría</span>.</>,
        copy: "Cuéntanos si buscas certificarte por primera vez o renovar, y en qué estado está hoy tu cumplimiento. Con eso definimos si conviene un diagnóstico previo antes de entrar formalmente al programa.",
        formTitle: "Consultar Industria Limpia",
        motivoLabel: "Etapa en la que estás",
        motivoOptions: ["Certificación por primera vez", "Renovación de certificado", "Diagnóstico previo", "Requisito de cliente o licitación", "Otro"],
      }}
    />
  );
}
