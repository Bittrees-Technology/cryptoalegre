import Link from 'next/link';
import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

const copy = {
  pt: {
    eyebrow: 'Governação · visão operacional',
    title: 'Quem decide, como se vota e o que acontece depois.',
    intro: 'Um guia prático para aplicar a Constituição. O texto constitucional continua a ser a fonte de autoridade sempre que houver dúvida ou conflito.',
    status: 'Pendente de ratificação pelos membros fundadores',
    constitution: 'Ler a Constituição completa',
    authorityLabel: 'Autoridade',
    authorityTitle: 'Quem decide o quê',
    authorityIntro: 'Três níveis com mandatos distintos e uma só hierarquia constitucional.',
    authorities: [
      {
        number: '01',
        name: 'Membros',
        role: 'Base democrática',
        text: 'Um membro, um voto. Elegem o Conselho e participam nas decisões submetidas a toda a associação.',
        detail: '1 membro · 1 voto',
      },
      {
        number: '02',
        name: 'Conselho Primário',
        role: 'Direção e responsabilidade',
        text: 'Define a direção geral, constitui os Grupos e resolve matérias maiores ou formalmente escaladas.',
        detail: '3 lugares iniciais · até 13 · mandatos de 24 meses',
      },
      {
        number: '03',
        name: 'Grupos Permanentes',
        role: 'Iniciativas e especialização',
        text: 'Cultura, Educação e Tecnologia desenvolvem iniciativas e decidem internamente dentro dos seus mandatos.',
        detail: 'Cultura · Educação · Tecnologia',
      },
    ],
    flowLabel: 'Da proposta à execução',
    flowTitle: 'Uma decisão, cinco momentos',
    flowIntro: 'O modelo operacional para despesas de tesouraria, políticas e iniciativas transforma cada decisão num registo verificável.',
    flow: [
      ['01', 'Propor', 'Definir objetivo, âmbito, custo, responsável e ação pedida.'],
      ['02', 'Classificar', 'Identificar o órgão competente, o tipo de decisão e o limiar aplicável.'],
      ['03', 'Deliberar', 'Publicar no fórum único, recolher contributos e registar conflitos de interesse.'],
      ['04', 'Votar', 'Fixar os membros elegíveis e contar um voto por credencial ativa.'],
      ['05', 'Executar', 'Depois da aprovação, executar a ação autorizada e publicar o resultado.'],
    ],
    forum: 'Abrir o fórum dos membros',
    thresholdsLabel: 'Limiares constitucionais',
    thresholds: [
      ['> 50%', 'Ordinária', 'Maioria simples dos votos válidos.'],
      ['2/3', 'Maior', 'Iniciativas relevantes e alterações de políticas.'],
      ['3/4', 'Emenda', 'Voto de toda a associação.'],
    ],
    quorum: 'Todos os votos oficiais exigem quórum. Salvo regra específica, participam ou estão validamente representados pelo menos 50% dos membros elegíveis.',
    safeguardsLabel: 'Salvaguardas',
    safeguardsTitle: 'Exceções sem atalhos',
    conflicts: 'Conflitos e impasses',
    conflictsText: 'O Conselho ouve o Grupo e a sua Primeira Presidência. Nos conflitos entre Grupos, reúne também as três Primeiras Presidências e procura unanimidade. Uma resolução vinculativa exige 2/3 do Conselho, quórum e registo das perspetivas.',
    escalation: 'A intervenção pode ocorrer após dois votos válidos sem decisão, três tentativas notificadas sem quórum ou um conflito formalmente escalado.',
    amendments: 'Emendas constitucionais',
    amendmentsText: 'Podem ser propostas pelo Conselho, por um Grupo Permanente ou por petição de membros. A proposta é pública para os membros antes de uma votação geral.',
    amendmentFacts: [['17,5%', 'petição'], ['45 dias', 'discussão'], ['50%', 'quórum'], ['3/4', 'aprovação']],
    boundaryLabel: 'Constituição + código',
    boundaryTitle: 'Automatizar regras, preservar julgamento humano.',
    boundaryIntro: 'O contrato executa condições objetivas. A associação continua responsável por factos, interpretação e devido processo.',
    canTitle: 'O código pode aplicar',
    can: [
      'estado da adesão e uma credencial ativa por membro aprovado',
      'elegibilidade fixada no início da votação e peso de um voto',
      'quórum, limiar, prazos e ação autorizada',
      'execução pela Safe e registo público do resultado',
    ],
    cannotTitle: 'Exige decisão humana',
    cannot: [
      'avaliar uma contribuição qualificada ou a boa situação de um membro',
      'determinar factos, conflitos de interesse ou abuso',
      'interpretar a finalidade e os valores da Constituição',
      'garantir aviso, contraditório, fundamentação e recurso',
    ],
    deployment: 'Os contratos de adesão e governação ainda não foram implementados. Endereços e estados oficiais serão publicados no registo blockchain da Constituição.',
    registry: 'Consultar o registo blockchain',
  },
  en: {
    eyebrow: 'Governance · operating view',
    title: 'Who decides, how votes work, and what happens next.',
    intro: 'A practical guide to applying the Constitution. The constitutional text remains the source of authority whenever doubt or conflict arises.',
    status: 'Pending ratification by the founding members',
    constitution: 'Read the complete Constitution',
    authorityLabel: 'Authority',
    authorityTitle: 'Who decides what',
    authorityIntro: 'Three levels with distinct mandates and one constitutional hierarchy.',
    authorities: [
      {
        number: '01',
        name: 'Members',
        role: 'Democratic base',
        text: 'One member, one vote. Members elect the Council and participate in decisions put to the whole association.',
        detail: '1 member · 1 vote',
      },
      {
        number: '02',
        name: 'Primary Council',
        role: 'Direction and accountability',
        text: 'Sets the overall direction, charters the Groups, and resolves major or formally escalated matters.',
        detail: '3 initial seats · up to 13 · 24-month terms',
      },
      {
        number: '03',
        name: 'Permanent Groups',
        role: 'Initiatives and expertise',
        text: 'Culture, Education, and Technology develop initiatives and decide internally within their mandates.',
        detail: 'Culture · Education · Technology',
      },
    ],
    flowLabel: 'From proposal to execution',
    flowTitle: 'One decision, five moments',
    flowIntro: 'The operating model for treasury spending, policies, and initiatives turns every decision into a verifiable record.',
    flow: [
      ['01', 'Propose', 'Define the objective, scope, cost, owner, and requested action.'],
      ['02', 'Classify', 'Identify the competent body, decision type, and applicable threshold.'],
      ['03', 'Deliberate', 'Publish in the unified forum, gather input, and record conflicts of interest.'],
      ['04', 'Vote', 'Fix member eligibility and count one vote per active credential.'],
      ['05', 'Execute', 'After approval, execute the authorized action and publish the result.'],
    ],
    forum: 'Open the member forum',
    thresholdsLabel: 'Constitutional thresholds',
    thresholds: [
      ['> 50%', 'Ordinary', 'Simple majority of valid votes.'],
      ['2/3', 'Major', 'Relevant initiatives and policy changes.'],
      ['3/4', 'Amendment', 'Association-wide vote.'],
    ],
    quorum: 'Every official vote requires quorum. Unless a specific rule applies, at least 50% of eligible members participate or are validly represented.',
    safeguardsLabel: 'Safeguards',
    safeguardsTitle: 'Exceptions without shortcuts',
    conflicts: 'Conflicts and deadlocks',
    conflictsText: 'The Council hears the Group and its First Chair. Inter-group conflicts also bring together all three First Chairs and seek unanimity. A binding resolution requires a 2/3 Council vote, quorum, and a record of the perspectives.',
    escalation: 'Intervention may follow two valid votes without a decision, three duly noticed attempts without quorum, or a formally escalated conflict.',
    amendments: 'Constitutional amendments',
    amendmentsText: 'They may be proposed by the Council, a Permanent Group, or a member petition. The proposal is made public to members before an association-wide vote.',
    amendmentFacts: [['17.5%', 'petition'], ['45 days', 'discussion'], ['50%', 'quorum'], ['3/4', 'approval']],
    boundaryLabel: 'Constitution + code',
    boundaryTitle: 'Automate rules, preserve human judgment.',
    boundaryIntro: 'The contract executes objective conditions. The association remains responsible for facts, interpretation, and due process.',
    canTitle: 'Code can enforce',
    can: [
      'membership state and one active credential per approved member',
      'eligibility fixed at the start of a vote and one-vote weight',
      'quorum, threshold, timing, and the authorized action',
      'Safe execution and a public record of the result',
    ],
    cannotTitle: 'Requires human judgment',
    cannot: [
      'assessing a qualifying contribution or a member’s good standing',
      'determining facts, conflicts of interest, or abuse',
      'interpreting the Constitution’s purpose and values',
      'ensuring notice, a fair hearing, reasons, and appeal',
    ],
    deployment: 'Membership and governance contracts have not yet been deployed. Official addresses and states will be published in the Constitution’s blockchain registry.',
    registry: 'View the blockchain registry',
  },
};

export function GovernancePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPt = locale === 'pt';
  const constitutionHref = isPt ? '/constituicao' : '/en/constitution';

  return (
    <main lang={isPt ? 'pt-PT' : 'en'}>
      <SiteHeader locale={locale} languageHref={isPt ? '/en/governance' : '/governacao'} />

      <section className="internal-hero governance-hero">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
        <div className="governance-hero__actions">
          <span className="status-pill">{c.status}</span>
          <Link className="text-link" href={constitutionHref}>{c.constitution} <span>→</span></Link>
        </div>
      </section>

      <section className="authority-map">
        <div className="governance-section-heading">
          <div><p className="eyebrow">§3 · {c.authorityLabel}</p><h2>{c.authorityTitle}</h2></div>
          <p>{c.authorityIntro}</p>
        </div>
        <div className="authority-list">
          {c.authorities.map((authority) => (
            <article className="authority-row" key={authority.number}>
              <span>{authority.number}</span>
              <div><p>{authority.role}</p><h3>{authority.name}</h3></div>
              <p>{authority.text}</p>
              <strong>{authority.detail}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="decision-workflow" id={isPt ? 'decisoes' : 'decisions'}>
        <div className="governance-section-heading governance-section-heading--dark">
          <div><p className="eyebrow">§4 · {c.flowLabel}</p><h2>{c.flowTitle}</h2></div>
          <div><p>{c.flowIntro}</p><Link className="text-link" href={isPt ? '/membros/forum' : '/en/members/forum'}>{c.forum} <span>→</span></Link></div>
        </div>
        <div className="workflow-steps">
          {c.flow.map(([number, title, item]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{item}</p></article>
          ))}
        </div>
        <div className="threshold-block">
          <p className="eyebrow">{c.thresholdsLabel}</p>
          <div className="threshold-grid">
            {c.thresholds.map(([value, title, item]) => (
              <article key={title}><strong>{value}</strong><div><h3>{title}</h3><p>{item}</p></div></article>
            ))}
          </div>
          <p className="quorum-note"><span>§4.3</span>{c.quorum}</p>
        </div>
      </section>

      <section className="governance-safeguards">
        <div className="governance-section-heading">
          <div><p className="eyebrow">§5–§6 · {c.safeguardsLabel}</p><h2>{c.safeguardsTitle}</h2></div>
        </div>
        <div className="safeguard-grid">
          <article className="safeguard-card" id={isPt ? 'conflitos' : 'conflicts'}>
            <span>§5</span><h3>{c.conflicts}</h3><p>{c.conflictsText}</p><p className="safeguard-note">{c.escalation}</p>
          </article>
          <article className="safeguard-card safeguard-card--gold" id={isPt ? 'emendas' : 'amendments'}>
            <span>§6</span><h3>{c.amendments}</h3><p>{c.amendmentsText}</p>
            <div className="amendment-metrics">
              {c.amendmentFacts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </article>
        </div>
      </section>

      <section className="enforcement-boundary">
        <div className="governance-section-heading governance-section-heading--dark">
          <div><p className="eyebrow">{c.boundaryLabel}</p><h2>{c.boundaryTitle}</h2></div>
          <p>{c.boundaryIntro}</p>
        </div>
        <div className="boundary-grid">
          <article><p className="boundary-label">01 · {c.canTitle}</p><ul>{c.can.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><p className="boundary-label">02 · {c.cannotTitle}</p><ul>{c.cannot.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
        <div className="deployment-note"><p>{c.deployment}</p><Link className="text-link" href={`${constitutionHref}#${isPt ? 'registo-blockchain' : 'blockchain-registry'}`}>{c.registry} <span>→</span></Link></div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
