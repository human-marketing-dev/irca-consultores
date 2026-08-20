import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Evaluación Ambiental de Sitio Fase I y II (ASTM)",
  description: "Due diligence ambiental bajo estándar ASTM E1527 y E1903. Fase I documental y de campo, Fase II con muestreo y laboratorio acreditado. IRCA Consultores.",
};

export default function EvaluacionFase12() {
  return (
    <SubservicePage
      parent={{ label: "Estudios ambientales", href: "/servicios/estudios-ambientales/" }}
      title="Evaluación Ambiental de Sitio Fase I y II"
      lead="El estudio que responde si un predio arrastra contaminación antes de que la compres, la financies o la heredes. Es el estándar que bancos, fondos y compradores institucionales dan por descontado en cualquier transacción industrial."
      body="La Fase I es documental y de campo: reconstruye el historial del sitio e identifica indicios de afectación. La Fase II confirma o descarta esos indicios con muestreo y laboratorio. No siempre se necesitan ambas: la Fase I define si la segunda es necesaria."
      facts={[
        { label: "Estándar", value: "ASTM E1527 / E1903" },
        { label: "Uso típico", value: "Due diligence" },
        { label: "Fase I", value: "Documental y de campo" },
        { label: "Fase II", value: "Muestreo y laboratorio" },
      ]}
      incluye={[
        "Revisión de historial de uso de suelo, registros públicos y fotografía aérea histórica",
        "Entrevistas con personal clave y recorrido de reconocimiento del sitio",
        "Identificación de condiciones ambientales reconocidas (REC) y su justificación",
        "Diseño del plan de muestreo cuando la Fase I lo determina necesario",
        "Muestreo de suelo, agua subterránea y vapores con laboratorio acreditado",
        "Informe con conclusiones, delimitación preliminar y estimación de pasivo ambiental",
      ]}
      cuando={[
        "Vas a comprar, vender o fusionar un activo industrial y necesitas conocer su pasivo.",
        "Un banco o un fondo condiciona el financiamiento a una evaluación ambiental del predio.",
        "Vas a arrendar una nave industrial y quieres delimitar responsabilidades por contaminación previa.",
        "Cierras una operación y necesitas documentar el estado del sitio al momento de la entrega.",
        "Sospechas afectación por la actividad histórica del predio o de sus colindancias.",
      ]}
      faqs={[
        {
          q: "¿Cuál es la diferencia real entre Fase I y Fase II?",
          a: "La Fase I no toma muestras: reconstruye el historial del sitio con registros, fotografía aérea, entrevistas y un recorrido, y concluye si existen condiciones ambientales reconocidas. Si no las hay, el estudio termina ahí. La Fase II sólo se ejecuta cuando la Fase I identificó indicios, y consiste en muestreo y análisis de laboratorio para confirmarlos o descartarlos.",
        },
        {
          q: "¿Es lo mismo que la caracterización bajo normativa mexicana?",
          a: "No. La evaluación ASTM es un estándar internacional orientado a decisiones de inversión y a limitar responsabilidad en una transacción. La caracterización bajo las NOM mexicanas es el procedimiento regulatorio que PROFEPA reconoce para acreditar contaminación y sustentar una remediación. Se complementan: es frecuente que una Fase II derive en una caracterización formal.",
        },
        {
          q: "¿Cuánto tarda?",
          a: "Una Fase I suele resolverse en semanas, y su plazo depende sobre todo de la disponibilidad de registros históricos y del acceso al sitio. La Fase II toma más porque incluye trabajo de campo y tiempos de laboratorio, que no se pueden comprimir sin afectar la validez del resultado.",
        },
        {
          q: "¿Los bancos aceptan el informe?",
          a: "Sí, cuando se elabora conforme al estándar ASTM vigente y con laboratorio acreditado para la parte analítica. Conviene confirmar antes si la institución exige alguna condición adicional —un formato propio o un plazo máximo de antigüedad del estudio—, porque eso puede definir el alcance desde el inicio.",
        },
      ]}
      contacto={{
        headline: <>Saber qué compras <span style={{ color: "var(--irca-green)" }}>antes de firmar</span>.</>,
        copy: "Cuéntanos qué predio te interesa, qué actividad tuvo y en qué etapa está la transacción. Con eso definimos si necesitas Fase I, Fase II o ambas, y en qué plazos.",
        formTitle: "Solicitar evaluación de sitio",
        motivoLabel: "Motivo de la evaluación",
        motivoOptions: ["Compra de activo industrial", "Venta o cierre de operación", "Requisito de financiamiento", "Arrendamiento de inmueble", "Sospecha de contaminación", "Otro"],
      }}
    />
  );
}
