export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: Record<string, SkillGroup[]> = {
  es: [
    { category: "Backend", items: ["Spring boot", "Java", "Node.js", "Express", "REST APIs", "Python", "Ollama"] },
    { category: "Frontend", items: ["Angular", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Herramientas", items: ["Git", "GitHub", "Figma", "Kubernets"] },
    { category: "Bases de datos", items: ["MongoDB", "MariaDB", "PostgreSQL"] },
  ],
  en: [
    { category: "Backend", items: ["Spring boot", "Java", "Node.js", "Express", "REST APIs", "Python", "Ollama"] },
    { category: "Frontend", items: ["Angular", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Tools", items: ["Git", "GitHub", "Figma", "Kubernets"] },
    { category: "Databases", items: ["MongoDB", "MariaDB", "PostgreSQL"] },
  ],
  it: [
    { category: "Backend", items: ["Spring boot", "Java", "Node.js", "Express", "REST APIs", "Python", "Ollama"] },
    { category: "Frontend", items: ["Angular", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Strumenti", items: ["Git", "GitHub", "Figma", "Kubernets"] },
    { category: "Database", items: ["MongoDB", "MariaDB", "PostgreSQL"] },
  ],
};
