import type { Metadata } from "next";
import SubservicePage from "@/components/servicios/SubservicePage";

export const metadata: Metadata = {
  title: "Servicios Geoespaciales y Drones (UAV)",
  description: "Levantamientos fotogramétricos con dron: ortofotomosaico, modelo digital de elevación, curvas de nivel, volumetrías y análisis SIG con precisión centimétrica. IRCA Consultores.",
};

export default function ServiciosGeoespaciales() {
  return (
    <SubservicePage
      parent={{ label: "Estudios de ingeniería", href: "/servicios/estudios-de-ingenieria/" }}
      title="Servicios Geoespaciales y Drones (UAV)"
      lead="Levantar en horas lo que en campo tomaría semanas, y con una densidad de datos que una brigada tradicional no alcanza. La fotogrametría con dron cambió por completo la economía de los levantamientos de gran superficie."
      body="Volamos con puntos de control terrestre para lograr precisión centimétrica y entregamos productos que se usan directamente en ingeniería: ortofoto georreferenciada, modelo de elevación, curvas de nivel y volumetrías auditables."
      facts={[
        { label: "Plataforma", value: "UAV multirrotor y ala fija" },
        { label: "Productos", value: "Ortofoto · DEM · DSM · SIG" },
        { label: "Precisión", value: "Centimétrica con GCP" },
        { label: "Operación", value: "Conforme a normativa AFAC" },
      ]}
      incluye={[
        "Planeación de vuelo y colocación de puntos de control terrestre georreferenciados",
        "Vuelo fotogramétrico con traslape y resolución acordes al producto requerido",
        "Ortofotomosaico georreferenciado en alta resolución",
        "Modelo digital de elevación (DEM) y de superficie (DSM)",
        "Curvas de nivel, secciones y cálculo de volúmenes de corte y relleno",
        "Análisis SIG y cartografía temática para estudios y trámites",
      ]}
      cuando={[
        "Necesitas levantar una superficie grande en un plazo que la topografía tradicional no permite.",
        "Requieres calcular volúmenes de material con respaldo auditable.",
        "Quieres documentar el avance de obra con evidencia georreferenciada y comparable en el tiempo.",
        "Necesitas cartografía y modelo de terreno como insumo de una MIA, un ETJ o un estudio hidrológico.",
        "El terreno es de difícil acceso, accidentado o presenta condiciones de riesgo para una brigada.",
        "Monitoreas la evolución de un banco de material, un tiradero o un frente de extracción.",
      ]}
      faqs={[
        {
          q: "¿Qué precisión se alcanza realmente?",
          a: "Con puntos de control terrestre bien distribuidos y medidos con GNSS de precisión, el error se ubica en el orden centimétrico, suficiente para ingeniería de detalle y cálculo de volúmenes. Sin puntos de control, dependiendo únicamente del GPS del dron, el error crece a varios metros: es la diferencia entre un levantamiento útil y una imagen bonita.",
        },
        {
          q: "¿Reemplaza a la topografía tradicional?",
          a: "La complementa. El dron es superior en superficie cubierta, densidad de puntos y velocidad, pero no ve bajo vegetación densa ni bajo techo, y requiere apoyo terrestre para amarrar la precisión. Lo habitual es combinarlos: vuelo para la superficie general y estación total o GNSS para los detalles y los puntos de control.",
        },
        {
          q: "¿Se requieren permisos para volar?",
          a: "Sí. La operación de aeronaves no tripuladas está regulada en México y hay restricciones por proximidad a aeropuertos, altura y tipo de espacio aéreo. Verificamos las condiciones del sitio antes de programar el vuelo, porque una zona restringida puede obligar a cambiar la metodología o a tramitar autorización previa.",
        },
        {
          q: "¿Qué entregables se reciben?",
          a: "El paquete estándar incluye ortofotomosaico georreferenciado, modelo digital de elevación y de superficie, nube de puntos, curvas de nivel al intervalo solicitado y el reporte de precisión con los puntos de control. Si el objetivo es volumetría, se agrega el cálculo con la superficie de referencia empleada; si es cartografía, los archivos SIG en el formato que necesites.",
        },
      ]}
      contacto={{
        headline: <>Datos de terreno <span style={{ color: "var(--irca-green)" }}>densos, rápidos y verificables</span>.</>,
        copy: "Cuéntanos qué superficie necesitas levantar, para qué se va a usar el producto y dónde se ubica. Con eso definimos la metodología de vuelo, los puntos de control y los entregables.",
        formTitle: "Solicitar levantamiento geoespacial",
        motivoLabel: "Objetivo del levantamiento",
        motivoOptions: ["Levantamiento topográfico", "Cálculo de volúmenes", "Avance de obra", "Cartografía para estudio o trámite", "Monitoreo de banco o frente", "Otro"],
      }}
    />
  );
}
