import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de IRCA Consultores conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares: finalidades, transferencias y derechos ARCO.",
};

export default function AvisoDePrivacidad() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Aviso de Privacidad"
      updated="18 de agosto de 2026"
      intro="En IRCA Consultores tratamos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Este aviso explica qué datos recabamos, para qué los usamos y cómo puedes ejercer tus derechos."
      sections={[
        {
          h: "Responsable del tratamiento",
          body: [
            "IRCA Ingeniería y Servicios, S.C. y Environmental North de México, S.C. (conjuntamente, «IRCA Consultores»), con domicilio en el estado de Nuevo León, México, son responsables del tratamiento de los datos personales que nos proporcionas a través de este sitio web, del correo electrónico, del teléfono o de cualquier otro medio de contacto.",
            "Para cualquier asunto relacionado con este aviso puedes escribirnos a info@ircaconsultores.com.",
          ],
        },
        {
          h: "Datos personales que recabamos",
          body: [
            "Recabamos únicamente los datos necesarios para atender tu solicitud y, en su caso, prestarte nuestros servicios:",
            [
              "Datos de identificación y contacto: nombre, empresa o razón social, cargo, correo electrónico y teléfono.",
              "Datos relacionados con tu consulta: servicio de interés, descripción del proyecto, instalación o situación regulatoria que nos planteas.",
              "Datos de facturación, cuando exista una relación contractual: razón social, RFC, domicilio fiscal y régimen fiscal.",
              "Datos de navegación: información técnica que el sitio registra de forma agregada, como tipo de dispositivo, navegador y páginas visitadas.",
            ],
            "No recabamos datos personales sensibles a través de este sitio. Si en el marco de un proyecto resultara necesario tratar datos de esa naturaleza, se solicitará tu consentimiento expreso y por escrito.",
          ],
        },
        {
          h: "Finalidades del tratamiento",
          body: [
            "Tus datos personales se utilizan para las siguientes finalidades primarias, necesarias para la relación con nosotros:",
            [
              "Atender y dar seguimiento a tus solicitudes de información, cotización o contacto.",
              "Elaborar propuestas técnicas y económicas, y formalizar la contratación de servicios.",
              "Prestar los servicios contratados y comunicarnos contigo durante su ejecución.",
              "Cumplir obligaciones contractuales, fiscales y administrativas derivadas de la relación.",
            ],
            "De manera adicional, y siempre que no manifiestes tu oposición, podemos utilizar tus datos para enviarte información sobre cambios normativos, servicios, cursos y contenidos que consideremos de tu interés profesional. Puedes oponerte a estas finalidades secundarias en cualquier momento escribiendo a info@ircaconsultores.com, sin que ello afecte la prestación de los servicios contratados.",
          ],
        },
        {
          h: "Transferencias de datos",
          body: [
            "IRCA Consultores no vende, cede ni comercializa tus datos personales.",
            "Tus datos pueden ser transferidos, únicamente en la medida en que resulte necesario, en los siguientes supuestos:",
            [
              "A autoridades ambientales, laborales y administrativas —como SEMARNAT, PROFEPA, CONAGUA, STPS o COFEPRIS— cuando el servicio contratado implique la gestión de trámites, estudios o procedimientos ante ellas.",
              "A auditores, laboratorios acreditados, peritos u organismos de certificación que participen en la ejecución del servicio contratado.",
              "A autoridades competentes cuando exista un requerimiento fundado y motivado, o cuando la transferencia sea necesaria para el cumplimiento de una obligación legal.",
            ],
            "En términos del artículo 37 de la Ley, estas transferencias no requieren de tu consentimiento adicional, ya que son necesarias para el cumplimiento de la relación jurídica entre las partes.",
          ],
        },
        {
          h: "Derechos ARCO",
          body: [
            "Tienes derecho a conocer qué datos personales tenemos de ti, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es tu derecho solicitar la corrección de tu información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros cuando consideres que no está siendo utilizada conforme a los principios y deberes que establece la normativa (Cancelación); así como oponerte al uso de tus datos personales para fines específicos (Oposición).",
            "Para ejercer cualquiera de estos derechos, envía tu solicitud a info@ircaconsultores.com indicando tu nombre, un medio para comunicarte la respuesta, los documentos que acrediten tu identidad o la representación legal, la descripción clara de los datos respecto de los que buscas ejercer el derecho y cualquier elemento que facilite su localización.",
            "Daremos respuesta a tu solicitud en los plazos que establece la Ley. El ejercicio de estos derechos es gratuito; únicamente deberás cubrir, en su caso, los gastos justificados de envío o reproducción.",
          ],
        },
        {
          h: "Revocación del consentimiento",
          body: [
            "Puedes revocar en cualquier momento el consentimiento que nos hayas otorgado para el tratamiento de tus datos personales, mediante solicitud enviada a info@ircaconsultores.com.",
            "Ten en cuenta que, por razones legales o contractuales, en algunos casos no será posible atender la revocación de forma inmediata, o bien podríamos requerir conservar ciertos datos durante el plazo que exija la normativa aplicable.",
          ],
        },
        {
          h: "Conservación de los datos",
          body: [
            "Conservamos tus datos personales durante el tiempo necesario para cumplir las finalidades descritas en este aviso y, posteriormente, durante los plazos de conservación que impongan las obligaciones fiscales, contables y de responsabilidad profesional aplicables. Concluidos dichos plazos, los datos se suprimen o se anonimizan.",
          ],
        },
        {
          h: "Uso de cookies y tecnologías similares",
          body: [
            "Este sitio puede utilizar cookies y tecnologías equivalentes con fines técnicos y de medición estadística agregada, con el objeto de conocer el uso general del sitio y mejorar su funcionamiento. Estas tecnologías no recaban por sí mismas datos que permitan identificarte de forma directa.",
            "Puedes deshabilitar o eliminar las cookies desde la configuración de tu navegador. Hacerlo puede afectar algunas funciones del sitio.",
          ],
        },
        {
          h: "Medidas de seguridad",
          body: [
            "Hemos adoptado medidas de seguridad administrativas, técnicas y físicas razonables para proteger tus datos personales contra daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado. El acceso a la información está restringido al personal que la requiere para el desempeño de sus funciones.",
          ],
        },
        {
          h: "Cambios al aviso de privacidad",
          body: [
            "Este aviso puede modificarse para reflejar cambios en nuestras prácticas, en los servicios que ofrecemos o en la normatividad aplicable. Cualquier modificación se publicará en esta misma página, indicando la fecha de la última actualización. Te recomendamos revisarla periódicamente.",
          ],
        },
        {
          h: "Autoridad en materia de protección de datos",
          body: [
            "Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, o presumes una violación a las disposiciones de la Ley, puedes acudir ante la autoridad competente en materia de protección de datos personales para presentar la denuncia o queja correspondiente.",
          ],
        },
      ]}
    />
  );
}
