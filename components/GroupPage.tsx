import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

type GroupContent = {
  title: string;
  kicker: string;
  intro: string;
  focus: string;
  leadership: string;
  collaboration: string;
  principle: string;
  className: string;
};

const groups: Record<Locale, Record<string, GroupContent>> = {
  pt: {
    cultura: {
      title: 'Cultura', kicker: 'Grupo Permanente · §3.2.1', className: 'culture',
      intro: 'Comunidade, artes, eventos culturais e os aspetos sociais da Cryptoalegre. A dimensão humana orienta a direção da associação.',
      focus: 'Envolvimento comunitário, eventos culturais, inclusão e preservação dos valores e da ética da Associação.',
      leadership: 'Liderado pela Primeira Presidência de Cultura. Este grupo é primário na orientação da visão da Associação.',
      collaboration: 'Trabalha com Educação em oficinas e eventos, e com Tecnologia para alinhar os projetos com os valores da comunidade.',
      principle: 'A cultura lidera a direção geral.',
    },
    educacao: {
      title: 'Educação', kicker: 'Grupo Permanente · §3.2.2', className: 'education',
      intro: 'Aprendizagem e partilha de conhecimento que criam os laços intelectuais e sociais da comunidade Cryptoalegre.',
      focus: 'Documentação educativa, oficinas, programas e partilha de competências sobre cultura, criptoativos, blockchain e tecnologia.',
      leadership: 'Liderado pela Primeira Presidência de Educação. A educação atua como a ligação entre cultura e tecnologia.',
      collaboration: 'Incorpora contexto cultural nos conteúdos e desenvolve, com Tecnologia, formação sobre novas ferramentas e plataformas.',
      principle: 'O conhecimento deve circular livremente.',
    },
    tecnologia: {
      title: 'Tecnologia', kicker: 'Grupo Permanente · §3.2.3', className: 'technology',
      intro: 'Exploração e implementação de tecnologias descentralizadas nos projetos da Cryptoalegre, ao serviço de necessidades reais.',
      focus: 'Desenvolvimento técnico, integração cripto, ferramentas digitais e inovação em aplicações blockchain.',
      leadership: 'Liderado pela Primeira Presidência de Tecnologia. A tecnologia segue a visão cultural da Associação.',
      collaboration: 'Escuta Cultura para compreender necessidades e valores, e trabalha com Educação para explicar e ensinar novas tecnologias.',
      principle: 'A tecnologia fornece as ferramentas.',
    },
  },
  en: {
    culture: {
      title: 'Culture', kicker: 'Permanent Group · §3.2.1', className: 'culture',
      intro: 'Community, arts, cultural events, and the social dimensions of Cryptoalegre. The human element guides the association’s direction.',
      focus: 'Community engagement, cultural events, inclusion, and preservation of the Association’s values and ethos.',
      leadership: 'Led by the First Chair of Culture. This Group is primary in guiding the Association’s vision.',
      collaboration: 'Works with Education on workshops and events, and with Technology to align projects with community values.',
      principle: 'Culture leads the overall direction.',
    },
    education: {
      title: 'Education', kicker: 'Permanent Group · §3.2.2', className: 'education',
      intro: 'Learning and knowledge-sharing that create the intellectual and social bonds of the Cryptoalegre community.',
      focus: 'Educational documentation, workshops, programs, and skill-sharing across culture, cryptoassets, blockchain, and technology.',
      leadership: 'Led by the First Chair of Education. Education acts as the bond between culture and technology.',
      collaboration: 'Brings cultural context into content and works with Technology to teach new tools and platforms.',
      principle: 'Knowledge should flow freely.',
    },
    technology: {
      title: 'Technology', kicker: 'Permanent Group · §3.2.3', className: 'technology',
      intro: 'Exploration and implementation of decentralized technologies in Cryptoalegre projects, in service of real needs.',
      focus: 'Technical development, crypto integration, digital tools, and innovation in blockchain applications.',
      leadership: 'Led by the First Chair of Technology. Technology follows the Association’s cultural vision.',
      collaboration: 'Listens to Culture to understand needs and values, and works with Education to explain and teach new technologies.',
      principle: 'Technology provides the tools.',
    },
  },
};

export function getGroup(locale: Locale, slug: string) {
  return groups[locale][slug];
}

export function GroupPage({ locale, group }: { locale: Locale; group: GroupContent }) {
  const isPt = locale === 'pt';
  return (
    <main lang={isPt ? 'pt-PT' : 'en'} className={`group-page group-page--${group.className}`}>
      <SiteHeader locale={locale} />
      <section className="group-hero">
        <div><p className="eyebrow">{group.kicker}</p><h1>{group.title}</h1><p>{group.intro}</p></div>
        <div className="group-symbol" aria-hidden="true"><span /><span /><span /></div>
      </section>
      <section className="group-details">
        {[
          [isPt ? 'Foco' : 'Focus', group.focus],
          [isPt ? 'Liderança' : 'Leadership', group.leadership],
          [isPt ? 'Colaboração' : 'Collaboration', group.collaboration],
        ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}
      </section>
      <section className="group-principle"><p>{group.principle}</p><a className="button button--dark" href={isPt ? '/membros' : '/en/members'}>{isPt ? 'Participar no grupo' : 'Join the group'} <span>→</span></a></section>
      <SiteFooter locale={locale} />
    </main>
  );
}
