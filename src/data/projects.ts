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
      es: "Herramienta CLI simple para gestionar y abrir proyectos de desarrollo con perfiles de herramientas predefinidos.",
      en: "A simple CLI tool to manage and open development projects with predefined tool profiles.",
      it: "Semplice strumento CLI per gestire e aprire progetti di sviluppo con profili di strumenti predefiniti.",
    },
    tags: ["Go", "CLI"],
    url: "https://github.com/Nbks/launch",
    demo: "https://demo.com",
  },
  {
    title: "English Coach",
    year: "2026",
    description: {
      es: "Herramienta CLI personal en Python para transcribir, analizar y registrar tu práctica diaria de speaking en inglés. Registra tu progreso con feedback detallado de IA.",
      en: "A personal Python CLI tool to transcribe, analyze, and track your daily English-speaking practice videos. Records your progress over time with detailed AI feedback.",
      it: "Strumento CLI personale in Python per trascrivere, analizzare e tenere traccia della tua pratica quotidiana di speaking in inglese. Registra i tuoi progressi con feedback dettagliato dell'IA.",
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
