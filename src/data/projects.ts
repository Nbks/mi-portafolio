export interface Project {
  title: string;
  year: string;
  description: Record<string, string>;
  tags: string[];
  url: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Launch",
    year: "2026",
    description: {
      es: "Plataforma de ventas online con carrito, pagos y panel de administración.",
      en: "A simple CLI tool to manage and open development projects with predefined tool profiles.",
      it: "Piattaforma di vendita online con carrello, pagamenti e pannello di amministrazione.",
    },
    tags: ["Go", "CLI"],
    url: "https://github.com/Nbks/launch",
    demo: "https://demo.com",
  },
  {
    title: "English Coach",
    year: "2026",
    description: {
      es: "App de gestión de tareas con drag & drop, etiquetas y sincronización en tiempo real.",
      en: "A personal Python CLI tool to transcribe, analyze, and track your daily English-speaking practice videos. Records your progress over time with detailed AI feedback.",
      it: "App di gestione attività con drag & drop, etichette e sincronizzazione in tempo reale.",
    },
    tags: ["Python", "CLI", "AI"],
    url: "https://github.com/Nbks/english-coach",
  },
  {
    title: "Portfolio 2026",
    year: "2026",
    description: {
      es: "Versión actual de mi portafolio personal. Desarrollado con Astro, Tailwind CSS y TypeScript. Diseño minimalista con i18n integrado.",
      en: "Current version of my personal portfolio. Built with Astro, Tailwind CSS and TypeScript. Minimalist design with built-in i18n support.",
      it: "Versione attuale del mio portfolio personale. Sviluppato con Astro, Tailwind CSS e TypeScript. Design minimalista con supporto i18n integrato.",
    },
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    url: "https://github.com/Nbks/mi-portafolio",
  },
];
