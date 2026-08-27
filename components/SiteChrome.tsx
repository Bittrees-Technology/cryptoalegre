type Locale = 'pt' | 'en';

const copy = {
  pt: {
    notice: 'Constituição em processo de ratificação',
    noticeLink: 'Consultar documento',
    governance: '/governacao',
    home: '/',
    nav: [
      ['Grupos', '/#grupos'],
      ['Governação', '/governacao'],
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
    governance: '/en/governance',
    home: '/en',
    nav: [
      ['Groups', '/en#groups'],
      ['Governance', '/en/governance'],
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

export function SiteHeader({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <>
      <div className="notice-bar">
        <span>{content.notice}</span>
        <a href={content.governance}>{content.noticeLink}</a>
      </div>
      <header className="site-header">
        <a className="brand" href={content.home} aria-label="Cryptoalegre — home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>Cryptoalegre</span>
        </a>
        <nav className="primary-nav" aria-label={locale === 'pt' ? 'Navegação principal' : 'Primary navigation'}>
          {content.nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="language-link" href={content.languageHref} aria-label={content.languageAria}>
            {content.languageLabel}
          </a>
          <a className="member-button" href={content.memberHref}>{content.member}</a>
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
          <a href={isPt ? '/#grupos' : '/en#groups'}>{isPt ? 'Grupos' : 'Groups'}</a>
          <a href={isPt ? '/iniciativas' : '/en/initiatives'}>{isPt ? 'Iniciativas' : 'Initiatives'}</a>
        </div>
        <div>
          <span>{isPt ? 'Governação' : 'Governance'}</span>
          <a href={isPt ? '/governacao#decisoes' : '/en/governance#decisions'}>{isPt ? 'Decisões' : 'Decisions'}</a>
          <a href={isPt ? '/governacao#conflitos' : '/en/governance#conflicts'}>{isPt ? 'Conflitos' : 'Conflicts'}</a>
          <a href={isPt ? '/governacao#emendas' : '/en/governance#amendments'}>{isPt ? 'Emendas' : 'Amendments'}</a>
        </div>
        <div>
          <span>{isPt ? 'Ligações' : 'Links'}</span>
          <a href="https://app.ens.domains/cryptoalegre.eth" rel="noreferrer" target="_blank">cryptoalegre.eth ↗</a>
          <a href={isPt ? '/membros' : '/en/members'}>{isPt ? 'Área de membros' : 'Member area'}</a>
        </div>
      </div>
      <p className="footer-note">Alentejo · Portugal · {new Date().getFullYear()}</p>
    </footer>
  );
}
