# Pylon — Landing Page

Landing page oficial del proyecto **Pylon**, una plataforma de gestión de condominios Open Source construida por y para los residentes de **Parque Central Club Residencial**.

## ¿Qué es Pylon?

Pylon es un sistema web open source que reemplaza el software caro y cerrado que usan la mayoría de condominios. Pagos, reservas de áreas comunes, comunicados, votaciones y control de acceso — todo transparente, gratuito y propiedad de la comunidad.

Esta landing page es el punto de entrada para reclutar colaboradores: desarrolladores, diseñadores, QA, documentadores y residentes que quieran participar.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro 6](https://astro.build) |
| UI interactiva | React 19 |
| Estilos | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Lenguaje | TypeScript 5 |
| Formulario | [Formspree](https://formspree.io) |
| Iconos | [Simple Icons CDN](https://simpleicons.org) |

## Estructura del proyecto

```
src/
├── components/
│   ├── sections/          # Secciones de la página (Hero, Problem, Roles, etc.)
│   ├── shared/            # Navbar, Modal, GrainBackground
│   └── ui/                # Badge, Button, Card
├── constants/
│   ├── content.ts         # Todo el contenido editable (textos, roles, roadmap)
│   └── navigation.ts      # Links del navbar y CTAs
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   ├── global.css         # Tokens de diseño, tipografía, botones, badges
│   ├── sections/          # CSS por sección (hero.css, roles.css, etc.)
│   └── components/        # CSS por componente compartido
└── types/
    └── index.ts
```

## Desarrollo local

### Requisitos

- Node.js 18+
- npm / pnpm / yarn

### Instalación

```bash
git clone https://github.com/<tu-usuario>/pylon-landing.git
cd pylon-landing
npm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz (está en `.gitignore`, nunca se sube):

```env
PUBLIC_FORMSPREE_ID=tu_form_id_aqui
```

Para obtener tu Form ID: crea una cuenta en [formspree.io](https://formspree.io), crea un nuevo form y copia el ID de la URL (`formspree.io/f/<ID>`).

### Comandos

```bash
npm run dev      # Servidor de desarrollo en localhost:4321
npm run build    # Build de producción en dist/
npm run preview  # Preview del build
npm run check    # Type-check con astro check
```

## Personalización

Todo el contenido de la landing está centralizado en `src/constants/content.ts`:

- `HERO` — título, subtítulo y estadísticas
- `PROBLEM` — puntos de dolor y propuesta de valor
- `PROJECT_ROADMAP` — fases del proyecto con estado
- `DEPLOY_TIMELINE` — plan de despliegue semanal
- `TECH_STACK` — tecnologías usadas
- `TEAM_ROLES` — roles disponibles para colaborar
- `BENEFITS` — beneficios de unirse
- `HOW_TO_STEPS` — pasos para empezar

## Despliegue

El proyecto es compatible con cualquier plataforma que soporte sitios estáticos:

- **Vercel**: conecta el repo y despliega automáticamente
- **Netlify**: igual que Vercel
- **GitHub Pages**: usa `npm run build` y sube el contenido de `dist/`

Recuerda configurar la variable `PUBLIC_FORMSPREE_ID` en las variables de entorno de la plataforma.

## Contribuir

Este proyecto sigue el mismo espíritu que Pylon: abierto y construido entre todos.

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feat/mi-mejora`
3. Haz tus cambios y commitea
4. Abre un Pull Request

## Licencia

MIT — el código le pertenece a la comunidad.
