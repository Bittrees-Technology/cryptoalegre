import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

const copy = {
  pt: {
    eyebrow: 'Iniciativa · Alentejo, Portugal',
    title: 'Horta do Baldio',
    intro: 'Uma iniciativa ecológica, cultural e tecnológica da Bittrees e da Cryptoalegre.',
    overviewTitle: 'Um laboratório vivo entre tradição e futuro.',
    overview: 'Situada numa propriedade histórica no Alentejo, a Horta do Baldio é operada pela Cryptoalegre através de um contrato de arrendamento de longo prazo. O projeto evoluiu da investigação sobre tokenização de produtos de azeitona para um modelo de preservação cultural, agricultura sustentável e tecnologia descentralizada.',
    facts: [['≈ 100', 'oliveiras adultas'], ['1', 'ribeira natural'], ['Cultura', 'residências e oficinas'], ['Ecologia', 'práticas regenerativas']],
    sections: [
      ['Terreno e ecologia', 'Oliveiras, uma ribeira, aqueduto, cisterna e estruturas tradicionais em pedra formam um ecossistema produtivo e cultural. A produção local de mel amplia o compromisso com a biodiversidade.'],
      ['Missão cultural e educativa', 'Residências, oficinas e programas educativos unem expressão artística, património e inovação descentralizada, envolvendo o território e comunidades digitais globais.'],
      ['Tecnologia e tokenização', 'Em parceria com a Bittrees, o projeto investiga estruturas tokenizadas para identificar direitos, valores e contribuições associados à propriedade, com gestão transparente e criação de valor circular.'],
      ['Visão', 'Construir um modelo autossustentável onde terra, arte e blockchain se cruzam em harmonia com a natureza.'],
    ],
    note: 'A investigação sobre energia renovável e mineração de Bitcoin/dados está em curso. A prioridade é a integração sustentável e ética de sistemas descentralizados nas economias locais.',
  },
  en: {
    eyebrow: 'Initiative · Alentejo, Portugal',
    title: 'Horta do Baldio',
    intro: 'An ecological, cultural, and technological initiative by Bittrees and Cryptoalegre.',
    overviewTitle: 'A living laboratory between tradition and the future.',
    overview: 'Set on a historic property in Alentejo, Horta do Baldio is operated by Cryptoalegre under a long-term lease. The project evolved from research into tokenized olive products into a model for cultural preservation, sustainable agriculture, and decentralized technology.',
    facts: [['≈ 100', 'mature olive trees'], ['1', 'natural stream'], ['Culture', 'residencies and workshops'], ['Ecology', 'regenerative practices']],
    sections: [
      ['Land and ecology', 'Olive trees, a stream, aqueduct, cistern, and traditional stone structures form a productive cultural ecosystem. Local honey production expands the commitment to biodiversity.'],
      ['Cultural and educational mission', 'Residencies, workshops, and educational programs unite artistic expression, heritage, and decentralized innovation across the territory and global digital communities.'],
      ['Technology and tokenization', 'With Bittrees, the project explores tokenized structures for identifying rights, values, and contributions connected to the property, enabling transparent management and circular value creation.'],
      ['Vision', 'To build a self-sustaining model where land, art, and blockchain meet in harmony with nature.'],
    ],
    note: 'Research into renewable energy and Bitcoin/data mining remains ongoing. The priority is sustainable and ethical integration of decentralized systems into local economies.',
  },
};

export function InitiativesPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPt = locale === 'pt';
  return (
    <main lang={isPt ? 'pt-PT' : 'en'}>
      <SiteHeader locale={locale} />
      <section className="initiative-hero">
        <div className="initiative-hero-copy"><p className="eyebrow">{c.eyebrow}</p><h1>{c.title}</h1><p>{c.intro}</p></div>
        <div className="initiative-landscape" aria-hidden="true"><span className="initiative-sun" /><span className="initiative-hill initiative-hill--one" /><span className="initiative-hill initiative-hill--two" /><span className="initiative-tree" /></div>
      </section>
      <section className="initiative-overview">
        <div><p className="eyebrow">{isPt ? 'Visão geral' : 'Overview'}</p><h2>{c.overviewTitle}</h2></div><p>{c.overview}</p>
      </section>
      <section className="initiative-facts">{c.facts.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</section>
      <section className="initiative-sections">{c.sections.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
      <aside className="initiative-note"><span>{isPt ? 'Nota de investigação' : 'Research note'}</span><p>{c.note}</p></aside>
      <SiteFooter locale={locale} />
    </main>
  );
}
