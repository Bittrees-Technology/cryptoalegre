import type { Metadata } from 'next';

export const siteOrigin = 'https://ca.bittrees.org';
type Locale = 'pt' | 'en';
type Page = { path: string; title: string; description: string };
type PagePair = Record<Locale, Page>;

export const publicPages = {
  home: {
    pt: { path: '/', title: 'Cryptoalegre — Cultura, educação e tecnologia', description: 'Associação cultural e educativa no Alentejo dedicada à cultura, à educação e às tecnologias descentralizadas.' },
    en: { path: '/en', title: 'Cryptoalegre — Culture, education and technology', description: 'A cultural and educational association in the Alentejo focused on culture, education and decentralized technology.' },
  },
  constitution: {
    pt: { path: '/constituicao', title: 'Constituição da Cryptoalegre', description: 'Texto integral da Constituição da Cryptoalegre e referências verificáveis da Associação na Ethereum mainnet.' },
    en: { path: '/en/constitution', title: 'Cryptoalegre Constitution', description: 'The complete Cryptoalegre Constitution and the Association’s verifiable Ethereum mainnet references.' },
  },
  governance: {
    pt: { path: '/governacao', title: 'Governação da Cryptoalegre', description: 'Conheça os órgãos, os grupos permanentes e a organização da Associação Cryptoalegre.' },
    en: { path: '/en/governance', title: 'Cryptoalegre governance', description: 'Explore the bodies, permanent groups and governance structure of the Cryptoalegre association.' },
  },
  initiatives: {
    pt: { path: '/iniciativas', title: 'Iniciativas da Cryptoalegre', description: 'Explore as iniciativas da Cryptoalegre nas áreas da cultura, da educação e da tecnologia.' },
    en: { path: '/en/initiatives', title: 'Cryptoalegre initiatives', description: 'Explore Cryptoalegre’s initiatives in culture, education and technology.' },
  },
  members: {
    pt: { path: '/membros', title: 'Adesão à Cryptoalegre', description: 'Saiba como funciona a adesão à Associação Cryptoalegre e o acesso dos membros.' },
    en: { path: '/en/members', title: 'Cryptoalegre membership', description: 'Learn how to become a member of the Cryptoalegre association and how member access works.' },
  },
} satisfies Record<string, PagePair>;

export const groupSlugs = [
  { pt: 'cultura', en: 'culture' },
  { pt: 'educacao', en: 'education' },
  { pt: 'tecnologia', en: 'technology' },
];

export function groupPaths(slugs: Record<Locale, string>) {
  return { pt: '/grupos/' + slugs.pt, en: '/en/groups/' + slugs.en };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Cryptoalegre',
  icons: { icon: '/favicon.jpg' },
};

export const privateRobots = { index: false, follow: false };

export function pageMetadata(locale: Locale, paths: Record<Locale, string>, title: string, description: string): Metadata {
  const canonical = paths[locale];
  const image = { url: '/cryptoalegre-alentejo.jpeg', width: 1086, height: 724, alt: 'Cryptoalegre — Alentejo' };
  return {
    title, description,
    alternates: { canonical, languages: { 'pt-PT': paths.pt, en: paths.en } },
    openGraph: {
      title, description, url: canonical, siteName: 'Cryptoalegre', type: 'website',
      locale: locale === 'pt' ? 'pt_PT' : 'en', images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}

export function publicPageMetadata(page: keyof typeof publicPages, locale: Locale): Metadata {
  const pair = publicPages[page];
  const { title, description } = pair[locale];
  return pageMetadata(locale, { pt: pair.pt.path, en: pair.en.path }, title, description);
}
