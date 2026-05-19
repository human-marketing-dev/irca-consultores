import type { Metadata } from "next";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a IRCA Consultores para un diagnóstico ambiental. Atendemos en Nuevo León y toda la República Mexicana. Respuesta en menos de 24 horas hábiles.",
};

export default function Contacto() {
  return <ContactCTA />;
}
