import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

const copy = {
  pt: {
    title: 'Governação com regras claras e autoridade limitada.',
    intro: 'A Constituição estabelece como a associação decide, resolve conflitos e evolui. A camada tecnológica existe para tornar essas regras verificáveis e executáveis pelos membros.',
    status: 'Pendente de ratificação pelos membros fundadores',
    council: 'Conselho Primário',
    councilText: 'O principal órgão de governação define a direção geral, garante o cumprimento da missão e constitui os três Grupos Permanentes.',
    councilFacts: [['Até 13', 'lugares'], ['24 meses', 'por mandato'], ['Ranked-choice', 'nas eleições']],
    groupLabel: 'Estrutura constitucional',
    groups: [
      ['Cultura', 'Lidera a visão e os valores humanos da associação.'],
      ['Educação', 'Cria os laços de conhecimento entre comunidade e tecnologia.'],
      ['Tecnologia', 'Implementa ferramentas ao serviço da visão cultural.'],
    ],
    decisions: 'Decisões e votação',
    decisionsIntro: 'Cada membro reconhecido tem um voto. A participação pode ser direta ou delegada a outro membro, segundo procedimentos aprovados pela associação.',
    decisionCards: [
      ['Decisões ordinárias', '> 50%', 'Maioria simples dos votos válidos, com quórum.'],
      ['Decisões maiores', '2/3', 'Iniciativas relevantes e alterações de políticas.'],
      ['Emendas', '3/4', 'Voto de toda a associação, com quórum constitucional.'],
    ],
    quorumTitle: 'Quórum',
    quorumText: 'É necessária a participação ou representação válida de pelo menos 50% dos membros elegíveis do órgão decisor. Nos votos de toda a associação, contam todos os membros registados.',
    overrideTitle: 'Autoridade de prevalência',
    overrideText: 'Quando um órgão delegado falha dois votos válidos, não alcança quórum após três tentativas notificadas, ou entra num impasse formal, o Conselho pode adotar uma resolução vinculativa por maioria de 2/3 — sem contrariar a Constituição.',
    conflicts: 'Resolução de conflitos',
    conflictSteps: [
      ['01', 'Escuta e mediação', 'O Grupo e a sua Primeira Presidência apresentam a situação ao Conselho Primário.'],
      ['02', 'Procura de acordo', 'Conflitos entre Grupos reúnem as três Primeiras Presidências e o Conselho, procurando unanimidade.'],
      ['03', 'Resolução vinculativa', 'Se o acordo não for possível, o Conselho pode decidir por 2/3, com quórum e registo das perspetivas.'],
    ],
    amendments: 'Emendas constitucionais',
    amendmentsIntro: 'A Constituição pode evoluir, mas só através de um processo deliberado, transparente e participado.',
    amendmentFacts: [
      ['17,5%', 'dos membros podem iniciar uma petição'],
      ['45 dias', 'mínimos para discussão pública aos membros'],
      ['50%', 'de quórum de todos os membros registados'],
      ['3/4', 'dos votos válidos para aprovação'],
    ],
    contractLabel: 'Execução através de contratos inteligentes',
    contractTitle: 'O código deve obedecer à Constituição.',
    contractText: 'Os contratos de adesão, delegação, votação e execução serão publicados e verificáveis. Qualquer diferença entre o código e o texto constitucional deve suspender a ação automática e ser encaminhada para governação humana.',
    source: 'Consultar a versão de origem',
  },
  en: {
    title: 'Governance with clear rules and limited authority.',
    intro: 'The Constitution establishes how the association decides, resolves conflicts, and evolves. The technology layer exists to make those rules verifiable and executable by members.',
    status: 'Pending ratification by the founding members',
    council: 'Primary Council',
    councilText: 'The main governing body sets the overall direction, ensures the mission is fulfilled, and charters the three Permanent Groups.',
    councilFacts: [['Up to 13', 'seats'], ['24 months', 'per term'], ['Ranked-choice', 'elections']],
    groupLabel: 'Constitutional structure',
    groups: [
      ['Culture', 'Leads the association’s human vision and values.'],
      ['Education', 'Builds the knowledge bonds between community and technology.'],
      ['Technology', 'Implements tools in service of the cultural vision.'],
    ],
    decisions: 'Decisions and voting',
    decisionsIntro: 'Each recognized member has one vote. Participation may be direct or delegated to another member under procedures approved by the association.',
    decisionCards: [
      ['Ordinary decisions', '> 50%', 'Simple majority of valid votes, with quorum.'],
      ['Major decisions', '2/3', 'Relevant initiatives and policy changes.'],
      ['Amendments', '3/4', 'Association-wide vote with constitutional quorum.'],
    ],
    quorumTitle: 'Quorum',
    quorumText: 'At least 50% of eligible voting members of a decision-making body must participate or be validly represented. Association-wide votes count all registered members.',
    overrideTitle: 'Council override authority',
    overrideText: 'When a delegated body fails two valid votes, misses quorum after three duly noticed attempts, or enters formal deadlock, the Council may adopt a binding resolution by a 2/3 majority — without contradicting the Constitution.',
    conflicts: 'Conflict resolution',
    conflictSteps: [
      ['01', 'Listening and mediation', 'The Group and its First Chair present the situation to the Primary Council.'],
      ['02', 'Seeking agreement', 'Inter-group conflicts bring together all three First Chairs and the Council, seeking unanimity.'],
      ['03', 'Binding resolution', 'If agreement is impossible, the Council may decide by 2/3, with quorum and recorded perspectives.'],
    ],
    amendments: 'Constitutional amendments',
    amendmentsIntro: 'The Constitution can evolve, but only through a deliberate, transparent, and participatory process.',
    amendmentFacts: [
      ['17.5%', 'of members may initiate a petition'],
      ['45 days', 'minimum member discussion period'],
      ['50%', 'quorum of all registered members'],
      ['3/4', 'of valid votes for approval'],
    ],
    contractLabel: 'Execution through smart contracts',
    contractTitle: 'Code must obey the Constitution.',
    contractText: 'Membership, delegation, voting, and execution contracts will be published and verifiable. Any divergence between code and constitutional text should pause automated action and return the matter to human governance.',
    source: 'View the source version',
  },
};

export function GovernancePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPt = locale === 'pt';
  return (
    <main lang={isPt ? 'pt-PT' : 'en'}>
      <SiteHeader locale={locale} />
      <section className="internal-hero governance-hero">
        <p className="eyebrow">§3–§6 · {isPt ? 'Constituição' : 'Constitution'}</p>
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
        <span className="status-pill">{c.status}</span>
      </section>

      <section className="council-section">
        <div className="council-copy"><p className="eyebrow">§3.1</p><h2>{c.council}</h2><p>{c.councilText}</p></div>
        <div className="council-facts">{c.councilFacts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="governance-groups">
        <p className="eyebrow">{c.groupLabel}</p>
        <div>{c.groups.map(([name, text], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="decision-section" id={isPt ? 'decisoes' : 'decisions'}>
        <div className="decision-heading"><p className="eyebrow">§4</p><h2>{c.decisions}</h2><p>{c.decisionsIntro}</p></div>
        <div className="decision-cards">{c.decisionCards.map(([title, value, text]) => <article key={title}><span>{value}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="rule-notes"><article><span>§4.3</span><h3>{c.quorumTitle}</h3><p>{c.quorumText}</p></article><article><span>§4.6</span><h3>{c.overrideTitle}</h3><p>{c.overrideText}</p></article></div>
      </section>

      <section className="conflict-section" id={isPt ? 'conflitos' : 'conflicts'}>
        <div className="side-title"><p className="eyebrow">§5</p><h2>{c.conflicts}</h2></div>
        <div className="conflict-steps">{c.conflictSteps.map(([number, title, text]) => <article key={number}><strong>{number}</strong><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="amendment-section" id={isPt ? 'emendas' : 'amendments'}>
        <div className="amendment-heading"><p className="eyebrow">§6</p><h2>{c.amendments}</h2><p>{c.amendmentsIntro}</p></div>
        <div className="amendment-grid">{c.amendmentFacts.map(([value, text]) => <article key={text}><strong>{value}</strong><p>{text}</p></article>)}</div>
      </section>

      <section className="contract-principle">
        <p className="eyebrow">{c.contractLabel}</p><h2>{c.contractTitle}</h2><p>{c.contractText}</p>
        <a className="text-link" href={isPt ? 'https://cryptoalegre.eth.limo/constituicao/' : 'https://cryptoalegre.eth.limo/en/constitution/'} target="_blank" rel="noreferrer">{c.source} <span>↗</span></a>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
