export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'El Proyecto',  href: '#problema' },
  { label: 'Estado',       href: '#estado' },
  { label: 'Únete',        href: '#roles' },
  { label: 'Beneficios',   href: '#beneficios' },
  { label: 'Cómo empezar', href: '#como-empezar' },
  { label: 'FAQ',          href: '#faq' },
];

export const CTA_PRIMARY = {
  label: 'Quiero unirme',
  href: '#como-empezar',
};

export const CTA_GITHUB = {
  label: 'Ver en GitHub',
  href: 'https://github.com/pylon-parquecentral/pylon',
};
