import { MemberGate } from './MemberGate';
import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

const copy = {
  pt: {
    title: 'Uma pessoa. Uma credencial. Um voto.',
    intro: 'A adesão à Cryptoalegre nasce de uma contribuição qualificada e reconhecida. A tecnologia protege direitos iguais; a comunidade reconhece as pessoas.',
    pathTitle: 'O caminho para a adesão',
    path: [
      ['Contribuir', 'Voluntariar tempo, partilhar conhecimento, criar conteúdo cultural ou tecnológico, ou participar de outra forma significativa.'],
      ['Ser reconhecido', 'O Conselho Primário ou um grupo delegado avalia a contribuição com discricionariedade razoável.'],
      ['Receber a credencial', 'Uma credencial digital não transferível ativa o acesso ao portal e os direitos de membro.'],
      ['Participar', 'Votar, delegar o voto, integrar atividades e colaborar nos três Grupos Permanentes.'],
    ],
    rulesTitle: 'A constituição, aplicada por contratos.',
    rulesIntro: 'O sistema de adesão e governação será separado em contratos pequenos, verificáveis e sujeitos às regras constitucionais.',
    contracts: [
      ['Registo de membros', 'Uma credencial não transferível por membro aprovado, com emissão e revogação auditáveis.'],
      ['Governação', 'Propostas, quórum e limiares configurados segundo o tipo constitucional de decisão.'],
      ['Delegação', 'Cada membro pode delegar e recuperar o seu único voto sem transferir a credencial.'],
      ['Execução', 'Ações aprovadas passam por um período de segurança e nunca podem exceder a autoridade constitucional.'],
    ],
    safeguard: 'Uma carteira não prova uma pessoa. A regra “um membro, um voto” depende de aprovação humana contra duplicados antes da emissão da credencial. O contrato garante que cada membro aprovado conserva exatamente um voto.',
    createEyebrow: 'Ethereum Mainnet · Safe',
    createTitle: 'Emitir uma nova credencial de membro.',
    createText: 'Um fluxo reservado aos signatários fundadores prepara o registo constitucional e a transação de emissão através do Safe da Associação.',
    createAction: 'Criar adesão',
  },
  en: {
    title: 'One person. One credential. One vote.',
    intro: 'Membership in Cryptoalegre begins with a recognized qualified contribution. Technology protects equal rights; the community recognizes people.',
    pathTitle: 'The path to membership',
    path: [
      ['Contribute', 'Volunteer time, share knowledge, create cultural or technological content, or participate in another meaningful way.'],
      ['Be recognized', 'The Primary Council or a delegated group evaluates the contribution using reasonable discretion.'],
      ['Receive a credential', 'A non-transferable digital credential activates portal access and membership rights.'],
      ['Participate', 'Vote, delegate a vote, join activities, and collaborate across the three Permanent Groups.'],
    ],
    rulesTitle: 'The constitution, applied through contracts.',
    rulesIntro: 'Membership and governance will be separated into small, verifiable contracts subject to constitutional rules.',
    contracts: [
      ['Member registry', 'One non-transferable credential per approved member, with auditable issuance and revocation.'],
      ['Governance', 'Proposals, quorum, and thresholds configured for each constitutional decision type.'],
      ['Delegation', 'Each member may delegate and reclaim their single vote without transferring the credential.'],
      ['Execution', 'Approved actions pass through a safety period and may never exceed constitutional authority.'],
    ],
    safeguard: 'A wallet does not prove a person. “One member, one vote” depends on human duplicate checks before a credential is issued. The contract ensures that every approved member retains exactly one vote.',
    createEyebrow: 'Ethereum Mainnet · Safe',
    createTitle: 'Issue a new membership credential.',
    createText: 'A founding-signer workflow prepares the constitutional record and issuance transaction through the Association Safe.',
    createAction: 'Create membership',
  },
};

export function MembersPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPt = locale === 'pt';
  return (
    <main lang={isPt ? 'pt-PT' : 'en'}>
      <SiteHeader locale={locale} />
      <section className="internal-hero member-hero"><p className="eyebrow">§2 · {isPt ? 'Adesão' : 'Membership'}</p><h1>{c.title}</h1><p>{c.intro}</p></section>
      <section className="membership-path"><div className="side-title"><p className="eyebrow">{isPt ? 'Adesão aberta' : 'Open membership'}</p><h2>{c.pathTitle}</h2></div><div className="path-steps">{c.path.map(([title, text], index) => <article key={title}><strong>0{index + 1}</strong><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
      <section className="member-issuer-cta"><div><p className="eyebrow">{c.createEyebrow}</p><h2>{c.createTitle}</h2><p>{c.createText}</p></div><a className="button button--primary" href={isPt ? '/membros/criar' : '/en/members/create'}>{c.createAction} <span>→</span></a></section>
      <MemberGate locale={locale} />
      <section className="contract-system"><div className="contract-system-heading"><p className="eyebrow">{isPt ? 'Arquitetura de governação' : 'Governance architecture'}</p><h2>{c.rulesTitle}</h2><p>{c.rulesIntro}</p></div><div className="contract-grid">{c.contracts.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><aside>{c.safeguard}</aside></section>
      <SiteFooter locale={locale} />
    </main>
  );
}
