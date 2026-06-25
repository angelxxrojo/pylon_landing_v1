import type {
  RoadmapPhase,
  DeployPhase,
  TechItem,
  TeamRole,
  Benefit,
  HowToStep,
  FaqItem,
  SocialLink,
} from '@/types';

/* =====================================================
   HERO
===================================================== */
export const HERO = {
  label: 'Open Source · Parque Central',
  title: 'Construyamos juntos la plataforma digital de',
  titleHighlight: 'Parque Central',
  subtitle:
    'Un sistema web Open Source hecho por vecinos para vecinos. Ya hemos comenzado, ¡solo faltas tú para llevarlo al siguiente nivel!',
  stats: [
    { value: '3',   label: 'Módulos listos' },
    { value: '12',  label: 'Issues abiertos' },
    { value: '100%', label: 'Open Source' },
  ],
};

/* =====================================================
   PROBLEMA / SOLUCIÓN
===================================================== */
export const PROBLEM = {
  label: 'El Problema',
  title: '¿Cansado de la falta de transparencia?',
  description:
    'Muchos condominios usan software caro, cerrado o simplemente no tienen nada. Procesos lentos, comunicados que se pierden y pagos sin trazabilidad son el día a día.',
  solution: {
    label: 'Nuestra Solución',
    title: 'Abierta, gratuita y hecha para nosotros',
    description:
      'Estamos creando una solución abierta, gratuita y personalizada para nuestras necesidades reales: pagos, reservas de áreas comunes, comunicados y seguridad.',
  },
  openSourceNote:
    'Al ser código abierto, el software pertenece a la comunidad y siempre será transparente. Nadie puede cerrarlo ni cobrarte por él.',
  painPoints: [
    { icon: 'lock',        text: 'Software caro y cerrado' },
    { icon: 'clock',       text: 'Procesos lentos y manuales' },
    { icon: 'eye-off',     text: 'Sin transparencia en pagos' },
    { icon: 'message-x',   text: 'Comunicados que se pierden' },
  ],
};

/* =====================================================
   ROADMAP
===================================================== */
export const PROJECT_ROADMAP: RoadmapPhase[] = [
  {
    phase: '1',
    name: 'Autenticación',
    description: 'Login, roles de usuario (admin, guardia, residente), recuperación de contraseña.',
    status: 'completed',
  },
  {
    phase: '2',
    name: 'Anuncios y Comunicados',
    description: 'Panel para publicar avisos, notificaciones push y historial por torre.',
    status: 'completed',
  },
  {
    phase: '3',
    name: 'Gestión de Pagos',
    description: 'Registro de cuotas, subida de vouchers, validación por tesorero.',
    status: 'in-progress',
  },
  {
    phase: '4',
    name: 'Reservas de Áreas Comunes',
    description: 'Calendario de reservas para piscina, salón de usos múltiples y gimnasio.',
    status: 'planned',
  },
  {
    phase: '5',
    name: 'Módulo de Votaciones',
    description: 'Asambleas digitales con quórum, propuestas y resultados auditables.',
    status: 'planned',
  },
  {
    phase: '6',
    name: 'App Móvil',
    description: 'Versión React Native para iOS y Android con notificaciones en tiempo real.',
    status: 'planned',
  },
];

/* =====================================================
   DEPLOY TIMELINE
===================================================== */
export const DEPLOY_TIMELINE: DeployPhase[] = [
  {
    week: 'Semana 0',
    title: 'Infraestructura',
    description: 'Servidores, base de datos y convocatoria del equipo técnico.',
    metric: '$49/mes',
    status: 'active',
  },
  {
    week: 'Sem 1–2',
    title: 'Piloto',
    description: '6 torres en marcha blanca. Primeras entradas y reservas reales.',
    metric: '~1.300 personas',
    status: 'upcoming',
  },
  {
    week: 'Semana 3',
    title: 'Expansión',
    description: '+8 torres activas. Prueba de concurrencia bajo mayor carga.',
    metric: '14 torres',
    status: 'upcoming',
  },
  {
    week: 'Semana 4',
    title: 'Producción',
    description: 'Operación real, registros vinculantes. 21 torres activas.',
    metric: '~10.000 personas',
    status: 'upcoming',
  },
  {
    week: 'Semana 5+',
    title: 'Apertura Total',
    description: 'Vigilantes de puerta con acceso al condominio completo.',
    metric: '6 puertas',
    status: 'upcoming',
  },
];

/* =====================================================
   TECH STACK
===================================================== */
export const TECH_STACK: TechItem[] = [
  { name: 'React',       logo: 'https://cdn.simpleicons.org/react',       category: 'frontend'  },
  { name: 'TypeScript',  logo: 'https://cdn.simpleicons.org/typescript',  category: 'frontend'  },
  { name: 'Tailwind',    logo: 'https://cdn.simpleicons.org/tailwindcss', category: 'frontend'  },
  { name: 'Node.js',     logo: 'https://cdn.simpleicons.org/nodedotjs',   category: 'backend'   },
  { name: 'PostgreSQL',  logo: 'https://cdn.simpleicons.org/postgresql',  category: 'database'  },
  { name: 'Docker',      logo: 'https://cdn.simpleicons.org/docker',      category: 'devops'    },
];

/* =====================================================
   ROLES
===================================================== */
export const TEAM_ROLES: TeamRole[] = [
  {
    title: 'Frontend Developer',
    description: 'Construye las interfaces que los vecinos usarán todos los días. React, TypeScript, Tailwind.',
    icon: 'monitor',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    openIssues: 5,
  },
  {
    title: 'Backend / DevOps',
    description: 'Diseña las APIs, la lógica de negocio y gestiona la infraestructura en DigitalOcean.',
    icon: 'server',
    skills: ['Node.js', 'PostgreSQL', 'Docker', 'CI/CD'],
    openIssues: 4,
  },
  {
    title: 'Diseñador UI/UX',
    description: 'Asegura que la app sea fácil de usar para todos los vecinos, incluidos los mayores.',
    icon: 'pen-tool',
    skills: ['Figma', 'User Research', 'Accesibilidad'],
    openIssues: 2,
  },
  {
    title: 'QA / Tester',
    description: 'Prueba la app como vecino real y reporta errores antes de que lleguen a producción.',
    icon: 'bug',
    skills: ['Testing manual', 'Reportes', 'Casos de uso'],
    openIssues: 6,
  },
  {
    title: 'Documentador',
    description: 'Escribe los manuales de uso y ayuda a los vecinos a entender la plataforma.',
    icon: 'file-text',
    skills: ['Redacción técnica', 'Markdown', 'Tutoriales'],
    openIssues: 3,
  },
  {
    title: 'Project Manager',
    description: 'Organiza las tareas, prioriza el backlog y coordina al equipo de voluntarios.',
    icon: 'layout-list',
    skills: ['Agile', 'GitHub Projects', 'Comunicación'],
    openIssues: 1,
  },
  {
    title: 'Abogado / Legal',
    description: 'Asesora en privacidad de datos, términos de uso y responsabilidad legal del sistema.',
    icon: 'scale',
    skills: ['Privacidad de datos', 'Términos de servicio', 'MIT / CC'],
    openIssues: 2,
  },
  {
    title: 'Residente',
    description: 'No necesitas saber programar. Prueba la app, da feedback real y representa a tus vecinos.',
    icon: 'home',
    skills: ['Feedback real', 'Casos de uso', 'Pruebas cotidianas'],
    openIssues: 0,
  },
  {
    title: '"Hater"',
    description: 'Los mejores testers del mundo. Intenta romper el sistema — encuentras lo que nadie más busca.',
    icon: 'flame',
    skills: ['Pensamiento crítico', 'Edge cases', 'Honestidad brutal'],
    openIssues: 0,
  },
];

/* =====================================================
   BENEFICIOS
===================================================== */
export const BENEFITS: Benefit[] = [
  {
    title: 'Networking',
    description: 'Conoce a otros profesionales tech que viven a metros de tu casa. La comunidad empieza en casa.',
    icon: 'users',
    color: 'edificio',
  },
  {
    title: 'Portfolio real',
    description: 'No más proyectos ficticios. Muestra en tu CV un sistema en producción con usuarios reales.',
    icon: 'briefcase',
    color: 'parque',
  },
  {
    title: 'Impacto directo',
    description: 'Verás tu código funcionando en tu propio edificio. El feedback llega en el ascensor.',
    icon: 'zap',
    color: 'club',
  },
  {
    title: 'Aprendizaje',
    description: 'Mentoría entre vecinos. Aprende de quienes tienen más experiencia o enseña a quienes empiezan.',
    icon: 'graduation-cap',
    color: 'acento',
  },
];

/* =====================================================
   CÓMO EMPEZAR
===================================================== */
export const HOW_TO_STEPS: HowToStep[] = [
  {
    step: '01',
    title: 'Únete al canal',
    description: 'Entra a nuestro grupo de WhatsApp o Discord para presentarte y conocer al equipo.',
    cta: { label: 'Unirme al WhatsApp', href: 'https://chat.whatsapp.com/pylon-parquecentral' },
  },
  {
    step: '02',
    title: 'Revisa el código',
    description: 'Explora el repositorio en GitHub. Lee el README y el archivo CONTRIBUTING.md.',
    cta: { label: 'Ver repositorio', href: 'https://github.com/pylon-parquecentral/pylon' },
  },
  {
    step: '03',
    title: 'Elige una tarea',
    description: 'Busca issues con la etiqueta "good first issue" en GitHub Projects para empezar fácil.',
    cta: { label: 'Ver issues', href: 'https://github.com/pylon-parquecentral/pylon/issues' },
  },
  {
    step: '04',
    title: 'Primera reunión',
    description: 'Nos reunimos los sábados a las 10:00 am en el salón de usos múltiples o por Google Meet.',
    cta: { label: 'Agendar reunión', href: 'https://meet.google.com/pylon-parquecentral' },
  },
];

/* =====================================================
   FAQ
===================================================== */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Necesito ser un experto en programación?',
    answer:
      'No. Aceptamos todos los niveles. Si estás aprendiendo, esta es una oportunidad perfecta para aplicar lo que sabes en un proyecto real con mentoría de vecinos con experiencia.',
  },
  {
    question: '¿Cuánto tiempo debo dedicarle?',
    answer:
      'El que tú puedas. Es voluntario y flexible. Algunos colaboradores dedican 2 horas a la semana, otros más. No hay compromiso mínimo obligatorio.',
  },
  {
    question: '¿Es gratis para el condominio?',
    answer:
      'Sí. Al ser Open Source, el código le pertenece a la comunidad. No hay licencias ni suscripciones. Los únicos costos eventuales son infraestructura (hosting), que el condominio ya gestiona.',
  },
  {
    question: '¿Puedo participar si no soy residente de Parque Central?',
    answer:
      'El proyecto es principalmente para residentes, pero si tienes conexión con el condominio o quieres contribuir al código base open source, puedes hacerlo desde el repositorio público en GitHub.',
  },
  {
    question: '¿Cómo se toman las decisiones del proyecto?',
    answer:
      'De forma abierta. Las propuestas se discuten en el canal del equipo y se votan en las reuniones semanales. El backlog es público y cualquier colaborador puede proponer features o prioridades.',
  },
];

/* =====================================================
   FOOTER
===================================================== */
export const FOOTER = {
  tagline: 'Hecho con ❤️ en Parque Central',
  description: 'Un proyecto Open Source de vecinos para vecinos.',
  copyright: `© ${new Date().getFullYear()} Pylon — Parque Central Club Residencial`,
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub',    href: 'https://github.com/pylon-parquecentral/pylon', icon: 'github'   },
  { label: 'WhatsApp',  href: 'https://chat.whatsapp.com/pylon-parquecentral', icon: 'message-circle' },
];
