import Link from 'next/link';

type Locale = 'pt' | 'en';

const copy = {
  pt: {
    notice: 'Constituição em processo de ratificação',
    noticeLink: 'Consultar documento',
    constitution: '/constituicao',
    home: '/',
    nav: [
      ['Grupos', '/#grupos'],
      ['Governação', '/governacao'],
      ['Constituição', '/constituicao'],
      ['Iniciativas', '/iniciativas'],
      ['Membros', '/membros'],
    ],
    languageHref: '/en',
    languageLabel: 'EN',
    languageAria: 'View in English',
    member: 'Área de membros',
    memberHref: '/membros',
  },
  en: {
    notice: 'Constitution pending ratification',
    noticeLink: 'Read the document',
    constitution: '/en/constitution',
    home: '/en',
    nav: [
      ['Groups', '/en#groups'],
      ['Governance', '/en/governance'],
      ['Constitution', '/en/constitution'],
      ['Initiatives', '/en/initiatives'],
      ['Members', '/en/members'],
    ],
    languageHref: '/',
    languageLabel: 'PT',
    languageAria: 'Ver em português',
    member: 'Member area',
    memberHref: '/en/members',
  },
} as const;

export function SiteHeader({ locale, languageHref }: { locale: Locale; languageHref?: string }) {
  const content = copy[locale];

  return (
    <>
      <div className="notice-bar">
        <span>{content.notice}</span>
        <Link href={content.constitution}>{content.noticeLink}</Link>
      </div>
      <header className="site-header">
        <Link className="brand" href={content.home} aria-label="Cryptoalegre — home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>Cryptoalegre</span>
        </Link>
        <nav className="primary-nav" aria-label={locale === 'pt' ? 'Navegação principal' : 'Primary navigation'}>
          {content.nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="language-link" href={languageHref ?? content.languageHref} aria-label={content.languageAria}>
            {content.languageLabel}
          </Link>
          <Link className="member-button" href={content.memberHref}>{content.member}</Link>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const isPt = locale === 'pt';
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-mark" aria-hidden="true"><span /></span>
        <div>
          <strong>Cryptoalegre</strong>
          <p>Associação Cultural e Educativa Cryptolegre</p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <span>{isPt ? 'Associação' : 'Association'}</span>
          <Link href={isPt ? '/#grupos' : '/en#groups'}>{isPt ? 'Grupos' : 'Groups'}</Link>
          <Link href={isPt ? '/iniciativas' : '/en/initiatives'}>{isPt ? 'Iniciativas' : 'Initiatives'}</Link>
        </div>
        <div>
          <span>{isPt ? 'Governação' : 'Governance'}</span>
          <Link href={isPt ? '/constituicao' : '/en/constitution'}>{isPt ? 'Constituição' : 'Constitution'}</Link>
          <Link href={isPt ? '/governacao#decisoes' : '/en/governance#decisions'}>{isPt ? 'Decisões' : 'Decisions'}</Link>
          <Link href={isPt ? '/governacao#conflitos' : '/en/governance#conflicts'}>{isPt ? 'Conflitos' : 'Conflicts'}</Link>
          <Link href={isPt ? '/governacao#emendas' : '/en/governance#amendments'}>{isPt ? 'Emendas' : 'Amendments'}</Link>
        </div>
        <div>
          <span>{isPt ? 'Ligações' : 'Links'}</span>
          <a href="https://app.ens.domains/cryptoalegre.eth" rel="noreferrer" target="_blank">cryptoalegre.eth ↗</a>
          <Link href={isPt ? '/membros' : '/en/members'}>{isPt ? 'Área de membros' : 'Member area'}</Link>
        </div>
      </div>
      <p className="footer-note">Alentejo · Portugal · {new Date().getFullYear()}</p>
    </footer>
  );
}
