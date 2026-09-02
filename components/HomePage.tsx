import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

const content = {
  pt: {
    legal: 'Associação Cultural e Educativa Cryptolegre',
    intro: 'Uma associação no Alentejo dedicada a explorar como a cultura, a aprendizagem e as tecnologias descentralizadas podem fortalecer comunidades e imaginar futuros mais participativos.',
    primary: 'Conhecer a associação',
    constitution: 'Ler a Constituição',
    groupsEyebrow: 'Três grupos permanentes',
    groupsTitle: 'Uma missão, três formas de agir.',
    groupsId: 'grupos',
    groups: [
      { number: '01', slug: 'cultura', title: 'Cultura', className: 'group-card--culture', text: 'A cultura lidera a visão e mantém cada iniciativa centrada nas pessoas, no território e na relevância social.' },
      { number: '02', slug: 'educacao', title: 'Educação', className: 'group-card--education', text: 'A educação cria os laços intelectuais e sociais que transformam conhecimento em participação.' },
      { number: '03', slug: 'tecnologia', title: 'Tecnologia', className: 'group-card--technology', text: 'A tecnologia fornece ferramentas abertas para experimentar, cooperar e criar valor com integridade.' },
    ],
    explore: 'Explorar o grupo',
    groupBase: '/grupos',
    governanceHref: '/governacao',
    constitutionHref: '/constituicao',
    principlesEyebrow: 'Constituição como fundamento',
    principlesTitle: 'Palavras públicas. Regras verificáveis.',
    principlesText: 'A Constituição define os direitos dos membros, a governação e os limites de autoridade. Os contratos inteligentes destinam-se a executar essas regras com transparência — nunca a substituí-las.',
    stats: [
      ['1:1', 'Um membro, um voto'],
      ['50%', 'Quórum associativo'],
      ['2/3', 'Decisões maiores'],
      ['3/4', 'Emendas constitucionais'],
    ],
    membershipLabel: 'Adesão aberta e qualificada',
    membershipTitle: 'Participação reconhecida. Direitos iguais.',
    membershipText: 'A adesão nasce de uma contribuição qualificada — tempo, conhecimento ou criação cultural e tecnológica. Depois de reconhecido, cada membro recebe uma credencial digital não transferível e direitos de voto iguais.',
    membershipCta: 'Como funciona a adesão',
    initiativeLabel: 'Iniciativa em destaque',
    initiativeTitle: 'Horta do Baldio',
    initiativeText: 'Um laboratório vivo no Alentejo onde património, agricultura regenerativa, residências culturais e tecnologias descentralizadas se encontram.',
    initiativeCta: 'Conhecer a Horta',
  },
  en: {
    legal: 'The Cultural and Educational Association Cryptolegre',
    intro: 'An association in Alentejo exploring how culture, learning, and decentralized technologies can strengthen communities and imagine more participatory futures.',
    primary: 'Meet the association',
    constitution: 'Read the Constitution',
    groupsEyebrow: 'Three permanent groups',
    groupsTitle: 'One mission, three ways to act.',
    groupsId: 'groups',
    groups: [
      { number: '01', slug: 'culture', title: 'Culture', className: 'group-card--culture', text: 'Culture leads the vision and keeps every initiative centered on people, place, and social relevance.' },
      { number: '02', slug: 'education', title: 'Education', className: 'group-card--education', text: 'Education creates the intellectual and social bonds that turn knowledge into participation.' },
      { number: '03', slug: 'technology', title: 'Technology', className: 'group-card--technology', text: 'Technology provides open tools to experiment, cooperate, and create value with integrity.' },
    ],
    explore: 'Explore the group',
    groupBase: '/en/groups',
    governanceHref: '/en/governance',
    constitutionHref: '/en/constitution',
    principlesEyebrow: 'Constitution as foundation',
    principlesTitle: 'Public words. Verifiable rules.',
    principlesText: 'The Constitution defines member rights, governance, and the limits of authority. Smart contracts are intended to execute those rules transparently — never to replace them.',
    stats: [
      ['1:1', 'One member, one vote'],
      ['50%', 'Association quorum'],
      ['2/3', 'Major decisions'],
      ['3/4', 'Constitutional amendments'],
    ],
    membershipLabel: 'Open, qualified membership',
    membershipTitle: 'Recognized participation. Equal rights.',
    membershipText: 'Membership begins with a qualified contribution — time, knowledge, or cultural and technological creation. Once recognized, each member receives a non-transferable digital credential and equal voting rights.',
    membershipCta: 'How membership works',
    initiativeLabel: 'Featured initiative',
    initiativeTitle: 'Horta do Baldio',
    initiativeText: 'A living laboratory in Alentejo where heritage, regenerative agriculture, cultural residencies, and decentralized technologies meet.',
    initiativeCta: 'Discover Horta do Baldio',
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const isPt = locale === 'pt';
  return (
    <main lang={locale === 'pt' ? 'pt-PT' : 'en'}>
      <SiteHeader locale={locale} />
      <section className="hero">
        <div className="hero-copy hero-copy--without-title">
          <p className="eyebrow">{c.legal}</p>
          <p className="hero-intro">{c.intro}</p>
          <div className="hero-actions">
            <a className="button button--primary" href={`#${c.groupsId}`}>{c.primary} <span aria-hidden="true">↘</span></a>
            <Link className="text-link" href={c.constitutionHref}>{c.constitution} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-art">
          <Image
            className="hero-art__image"
            src="/cryptoalegre-alentejo.jpeg"
            alt={isPt ? 'Paisagem do Alentejo com raios de sol, uma árvore e o símbolo Bitcoin' : 'Alentejo landscape with sun rays, a tree, and the Bitcoin symbol'}
            fill
            priority
            quality={90}
            sizes="(max-width: 1000px) 180vw, 80vw"
          />
          <p className="art-caption">Alentejo · Portugal</p>
        </div>
      </section>

      <section className="groups" id={c.groupsId}>
        <div className="section-heading"><p className="eyebrow">{c.groupsEyebrow}</p><h2>{c.groupsTitle}</h2></div>
        <div className="groups-grid">
          {c.groups.map((group) => (
            <article className={`group-card ${group.className}`} key={group.title}>
              <span className="group-number">{group.number}</span><h3>{group.title}</h3><p>{group.text}</p>
              <a href={`${c.groupBase}/${group.slug}`}>{c.explore} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="constitution-intro">
        <div className="constitution-copy"><p className="eyebrow">{c.principlesEyebrow}</p><h2>{c.principlesTitle}</h2><p>{c.principlesText}</p><Link className="button button--outline" href={c.constitutionHref}>{c.constitution} <span>→</span></Link></div>
        <div className="stat-grid">{c.stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="membership-section">
        <div className="membership-orbit" aria-hidden="true"><span>1</span><span>1</span><span>1</span><i /></div>
        <div className="membership-copy"><p className="eyebrow">{c.membershipLabel}</p><h2>{c.membershipTitle}</h2><p>{c.membershipText}</p><a className="button button--dark" href={isPt ? '/membros' : '/en/members'}>{c.membershipCta} <span>→</span></a></div>
      </section>

      <section className="featured-initiative">
        <div className="initiative-visual">
          <Image
            className="initiative-visual__image"
            src="/horta-do-baldio.jpeg"
            alt={isPt ? 'Ilustração da Horta do Baldio com olival, casa, crianças e figuras robóticas' : 'Illustration of Horta do Baldio with an olive grove, house, children, and robotic figures'}
            fill
            quality={90}
            sizes="(max-width: 900px) 175vw, 75vw"
          />
          <p className="initiative-visual__caption">Horta do Baldio · Alentejo</p>
        </div>
        <div className="initiative-copy"><p className="eyebrow">{c.initiativeLabel}</p><h2>{c.initiativeTitle}</h2><p>{c.initiativeText}</p><a className="text-link" href={isPt ? '/iniciativas' : '/en/initiatives'}>{c.initiativeCta} <span>→</span></a></div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
