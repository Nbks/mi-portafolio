export interface Experience {
  company: string;
  role: Record<string, string>;
  period: string;
  description: Record<string, string>;
}

export const experience: Experience[] = [
  {
    company: "Interlogic",
    role: {
      es: "Desarrollador Fullstack",
      en: "Fullstack Developer",
      it: "Sviluppatore Fullstack",
    },
    period: "feb 2024 — Presente",
    description: {
      es: "Especialista en arquitectura de software, microservicios y despliegue de soluciones escalables que integran IA, IoT y seguridad avanzada.",
      en: "Specialist in software architecture, microservices, and the deployment of scalable solutions that integrate AI, IoT, and advanced security.",
      it: "Specialista in architettura software, microservizi e distribuzione di soluzioni scalabili che integrano AI, IoT e sicurezza avanzata.",
    },
  },
];
