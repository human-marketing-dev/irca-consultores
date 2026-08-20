import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de IRCA Consultores: alcance de la información publicada, propiedad intelectual, limitación de responsabilidad y legislación aplicable.",
};

export default function TerminosYCondiciones() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos y Condiciones de Uso"
      updated="18 de agosto de 2026"
      intro="Estos términos regulan el acceso y uso del sitio web de IRCA Consultores. Al navegar en él aceptas las condiciones que se describen a continuación."
      sections={[
        {
          h: "Titularidad del sitio",
          body: [
            "Este sitio web es operado por IRCA Ingeniería y Servicios, S.C. y Environmental North de México, S.C. (conjuntamente, «IRCA Consultores»), con domicilio en el estado de Nuevo León, México, y correo de contacto info@ircaconsultores.com.",
          ],
        },
        {
          h: "Aceptación de los términos",
          body: [
            "El acceso y uso de este sitio implica la aceptación plena de estos términos y condiciones. Si no estás de acuerdo con ellos, te pedimos abstenerte de utilizar el sitio.",
            "IRCA Consultores puede modificar estos términos en cualquier momento. Las modificaciones surten efecto desde su publicación en esta página, por lo que te recomendamos consultarla periódicamente.",
          ],
        },
        {
          h: "Naturaleza de la información publicada",
          body: [
            "El contenido de este sitio tiene fines exclusivamente informativos y de difusión de los servicios que presta IRCA Consultores.",
            "La información sobre normatividad ambiental, de seguridad y salud en el trabajo, plazos, trámites y criterios de autoridad se presenta de forma general y no constituye asesoría técnica ni jurídica para un caso concreto. Cada instalación, proyecto y procedimiento tiene circunstancias propias que sólo pueden valorarse mediante un análisis específico.",
            "La normatividad aplicable cambia con frecuencia. Aunque procuramos mantener el contenido actualizado, no garantizamos que la totalidad de la información publicada refleje en todo momento el marco normativo vigente.",
            "Ninguna comunicación a través de este sitio, incluidos los formularios de contacto, genera por sí misma una relación contractual ni una relación profesional entre tú e IRCA Consultores. Dicha relación se formaliza únicamente mediante la propuesta de servicios aceptada y el instrumento contractual correspondiente.",
          ],
        },
        {
          h: "Uso permitido",
          body: [
            "Te comprometes a utilizar el sitio conforme a la ley, a la buena fe y a estos términos. En particular, te obligas a abstenerte de:",
            [
              "Utilizar el sitio con fines ilícitos o que puedan dañar los derechos o intereses de terceros.",
              "Intentar acceder sin autorización a áreas restringidas, sistemas o servidores asociados al sitio.",
              "Introducir o difundir código malicioso, o realizar acciones que puedan afectar el funcionamiento, la disponibilidad o la integridad del sitio.",
              "Extraer de forma sistemática o automatizada el contenido del sitio para su reutilización sin autorización expresa.",
              "Suplantar la identidad de terceros o proporcionar información falsa a través de los formularios de contacto.",
            ],
          ],
        },
        {
          h: "Propiedad intelectual",
          body: [
            "Todos los contenidos de este sitio —textos, metodologías, estructura, diseño, gráficos, iconografía, fotografías, logotipos y código fuente— son propiedad de IRCA Consultores o de terceros que han autorizado su uso, y están protegidos por la legislación mexicana en materia de propiedad intelectual e industrial.",
            "La denominación «IRCA Consultores», su logotipo y sus signos distintivos son marcas de sus titulares. El acceso al sitio no otorga licencia ni derecho alguno sobre ellos.",
            "Se autoriza la visualización, descarga y reproducción de los contenidos únicamente para uso personal y no comercial, siempre que se cite la fuente. Cualquier otro uso —en particular la reproducción, distribución, comunicación pública o transformación con fines comerciales— requiere autorización previa y por escrito.",
            "Las marcas, nombres comerciales y logotipos de clientes y autoridades que aparecen en el sitio pertenecen a sus respectivos titulares y se muestran con fines meramente informativos y de referencia.",
          ],
        },
        {
          h: "Limitación de responsabilidad",
          body: [
            "IRCA Consultores no será responsable por decisiones tomadas con base únicamente en la información general publicada en este sitio, sin haber mediado un análisis específico del caso.",
            "Tampoco será responsable por daños o perjuicios derivados de interrupciones, fallas técnicas, errores u omisiones en el sitio, ni de la presencia de virus o programas maliciosos introducidos por terceros, sin perjuicio de las medidas de seguridad razonables que aplicamos.",
            "El sitio puede estar temporalmente no disponible por labores de mantenimiento, actualización o causas ajenas a nuestro control.",
          ],
        },
        {
          h: "Enlaces a sitios de terceros",
          body: [
            "Este sitio puede contener enlaces a páginas operadas por terceros, incluidas dependencias gubernamentales. Dichos enlaces se ofrecen únicamente como referencia y no implican respaldo, verificación ni control de su contenido.",
            "IRCA Consultores no asume responsabilidad alguna sobre la información, las políticas de privacidad o las prácticas de los sitios de terceros. El acceso a ellos es responsabilidad exclusiva del usuario.",
          ],
        },
        {
          h: "Formularios y comunicaciones",
          body: [
            "La información que envíes a través de los formularios de contacto se trata conforme a nuestro Aviso de Privacidad.",
            "Te pides proporcionar información veraz y actualizada. IRCA Consultores no responde por las consecuencias derivadas de datos inexactos o incompletos proporcionados por el usuario.",
            "Los plazos de respuesta indicados en el sitio son estimados y no constituyen una obligación contractual.",
          ],
        },
        {
          h: "Protección de datos personales",
          body: [
            "El tratamiento de datos personales recabados a través de este sitio se rige por nuestro Aviso de Privacidad, que forma parte integrante de estos términos y condiciones.",
          ],
        },
        {
          h: "Legislación aplicable y jurisdicción",
          body: [
            "Estos términos y condiciones se rigen por la legislación federal mexicana.",
            "Para la interpretación y cumplimiento de los mismos, las partes se someten a la jurisdicción de los tribunales competentes del estado de Nuevo León, México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.",
          ],
        },
      ]}
    />
  );
}
