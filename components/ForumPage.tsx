import Link from 'next/link';
import { MemberGate } from './MemberGate';
import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

const copy = {
  pt: {
    back: 'Voltar à área de membros',
    eyebrow: 'Portal de membros · Fórum',
    title: 'O lugar onde as ideias ganham forma.',
    intro: 'Um único fórum partilhado por todos os membros. Cada conversa aparece na interface portuguesa e inglesa, sem separar a comunidade nem duplicar tópicos.',
    principles: [
      ['Um fórum partilhado', 'Cada tópico tem uma única conversa, um único histórico e os mesmos participantes em ambas as interfaces.'],
      ['Três grupos', 'Cultura, Educação e Tecnologia têm espaços próprios, ligados pelas áreas de Governação e Assembleia.'],
      ['Tradução transparente', 'O texto original é preservado e pode ser mostrado traduzido, sempre com a língua de origem identificada.'],
    ],
    processEyebrow: 'Do diálogo à execução',
    processTitle: 'Conversar primeiro. Decidir com clareza.',
    process: [
      ['01', 'Discutir', 'Abrir um tópico no grupo relevante e ouvir a comunidade.'],
      ['02', 'Aperfeiçoar', 'Documentar contexto, alternativas, conflitos e impactos.'],
      ['03', 'Propor', 'Converter o consenso ou desacordo numa proposta formal.'],
      ['04', 'Votar', 'Aplicar um membro, um voto e o limiar constitucional correto.'],
    ],
  },
  en: {
    back: 'Back to the member area',
    eyebrow: 'Member portal · Forum',
    title: 'Where ideas take shape.',
    intro: 'One shared forum for every member. Each conversation appears in the Portuguese and English interfaces without separating the community or duplicating topics.',
    principles: [
      ['One shared forum', 'Each topic has one conversation, one history, and the same participants in both interfaces.'],
      ['Three groups', 'Culture, Education, and Technology each have their own space, connected by Governance and Assembly.'],
      ['Transparent translation', 'The original text is preserved and may be shown in translation, always identifying its source language.'],
    ],
    processEyebrow: 'From dialogue to execution',
    processTitle: 'Talk first. Decide clearly.',
    process: [
      ['01', 'Discuss', 'Open a topic in the relevant group and listen to the community.'],
      ['02', 'Refine', 'Document context, alternatives, conflicts, and impact.'],
      ['03', 'Propose', 'Turn consensus or disagreement into a formal proposal.'],
      ['04', 'Vote', 'Apply one member, one vote and the correct constitutional threshold.'],
    ],
  },
} as const;

export function ForumPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPt = locale === 'pt';

  return (
    <main lang={isPt ? 'pt-PT' : 'en'} className="forum-page">
      <SiteHeader locale={locale} />
      <section className="internal-hero forum-hero">
        <Link className="back-link" href={isPt ? '/membros' : '/en/members'}>← {c.back}</Link>
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
      </section>
      <section className="forum-principles">
        {c.principles.map(([title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <MemberGate locale={locale} mode="forum" />
      <section className="forum-process">
        <div>
          <p className="eyebrow">{c.processEyebrow}</p>
          <h2>{c.processTitle}</h2>
        </div>
        <div className="forum-process-steps">
          {c.process.map(([number, title, text]) => (
            <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
