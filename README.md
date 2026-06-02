# Portafolio Personal - Lucas Giavelli

Portafolio personal desarrollado con Astro, diseñado para mostrar mis proyectos y habilidades como desarrollador frontend.

## 🎯 Acerca de este proyecto

Este portafolio está construido con [Astro](https://astro.build/) y está disponible en español, inglés e italiano. Incluye una sección de proyectos, información personal y enlaces a mis redes profesionales.

## 🚀 Características

- **Framework**: Astro 5.x con TypeScript
- **Estilos**: Tailwind CSS 4.x + CSS vanilla
- **Internacionalización**: Soporte multiidioma (es, en, it)
- **Despliegue**: GitHub Pages
- **Optimización**: Generación estática y rendimiento optimizado

## 📁 Estructura del proyecto

```text
/
├── src/
│   ├── assets/              # Archivos estáticos (imágenes, logos)
│   │   ├── astro.svg        # Logo de Astro
│   │   └── background.svg   # Imagen de fondo
│   ├── components/          # Componentes reutilizables
│   │   └── Welcome.astro    # Componente de bienvenida
│   ├── i18n/               # Archivos de traducción
│   │   ├── es.ts           # Traducciones en español
│   │   ├── en.ts           # Traducciones en inglés
│   │   └── it.ts           # Traducciones en italiano
│   ├── layouts/            # Layouts base de páginas
│   │   └── Layout.astro     # Layout principal
│   ├── pages/              # Páginas del sitio
│   │   └── index.astro      # Página de inicio
│   └── styles/             # Estilos globales
│       └── global.css       # CSS global con variables
├── dist/                  # Build de producción (generado)
├── public/               # Archivos estáticos
│   └── favicon.svg        # Icono del sitio
├── package.json          # Dependencias y scripts
└── astro.config.mjs      # Configuración de Astro
```

## 🧞 Comandos disponibles

| Comando            | Acción                                           |
| :----------------- | :----------------------------------------------- |
| `npm install`      | Instala dependencias                             |
| `npm run dev`      | Inicia servidor local en `localhost:4321`        |
| `npm run build`    | Genera sitio estático en `./dist/`              |
| `npm run preview`  | Previsualiza el build localmente                 |
| `npm run astro`    | Comandos CLI de Astro                            |

## 🚀 Despliegue

El proyecto se despliega automáticamente en GitHub Pages usando GitHub Actions.

## 📚 Más información

- [Astro Documentation](https://docs.astro.build)
- [GitHub Repository](https://github.com/Nbks/mi-portafolio)
