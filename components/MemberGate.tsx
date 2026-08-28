'use client';

import Link from 'next/link';
import { useState } from 'react';

type Locale = 'pt' | 'en';
type GateMode = 'portal' | 'forum';
type Provider = { request: (args: { method: string; params?: unknown[] }) => Promise<unknown> };
type GateState = 'idle' | 'connecting' | 'member' | 'nonmember' | 'unconfigured' | 'error';

function shorten(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

const forumChannels = {
  pt: [
    ['01', 'Cultura', 'Comunidade, eventos, território, artes e orientação cultural.', 'culture'],
    ['02', 'Educação', 'Oficinas, documentação, programas e partilha de conhecimento.', 'education'],
    ['03', 'Tecnologia', 'Ferramentas, infraestrutura, contratos e experiências descentralizadas.', 'technology'],
    ['04', 'Governação', 'Debater propostas antes de seguirem para uma decisão formal.', 'governance'],
    ['05', 'Assembleia', 'Anúncios, calendário associativo e assuntos comuns aos membros.', 'assembly'],
  ],
  en: [
    ['01', 'Culture', 'Community, events, place, arts, and cultural direction.', 'culture'],
    ['02', 'Education', 'Workshops, documentation, programs, and knowledge-sharing.', 'education'],
    ['03', 'Technology', 'Tools, infrastructure, contracts, and decentralized experiments.', 'technology'],
    ['04', 'Governance', 'Discuss proposals before they advance to a formal decision.', 'governance'],
    ['05', 'Assembly', 'Announcements, the association calendar, and shared member matters.', 'assembly'],
  ],
} as const;

function ForumBoard({ locale }: { locale: Locale }) {
  const isPt = locale === 'pt';

  return (
    <div className="member-dashboard forum-dashboard">
      <div className="member-welcome">
        <span>●</span>
        <div>
          <p>{isPt ? 'Credencial ativa · acesso ao fórum' : 'Active credential · forum access'}</p>
          <h2>{isPt ? 'Conversas da associação.' : 'Association conversations.'}</h2>
        </div>
      </div>
      <div className="forum-toolbar">
        <p>{isPt ? 'Um fórum, qualquer língua. Cada mensagem é guardada uma vez, com o original preservado e tradução disponível. Apenas uma votação formal produz uma decisão da Associação.' : 'One forum, any language. Every message is stored once, with its original preserved and translation available. Only a formal vote produces an Association decision.'}</p>
        <button type="button" disabled>{isPt ? 'Novo tópico · após lançamento' : 'New topic · after launch'}</button>
      </div>
      <div className="forum-channels">
        {forumChannels[locale].map(([number, title, description, channel]) => (
          <article className={`forum-channel forum-channel--${channel}`} key={title}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <strong>{isPt ? 'Sem tópicos' : 'No topics yet'}</strong>
          </article>
        ))}
      </div>
      <aside className="forum-access-note">
        <strong>{isPt ? 'Acesso constitucional' : 'Constitutional access'}</strong>
        <p>{isPt ? 'Membros ativos podem publicar em português ou inglês na mesma conversa. Uma suspensão pode limitar a conta a leitura; uma revogação termina o acesso. Cada ação de moderação ficará registada e sujeita ao processo de recurso.' : 'Active members may post in Portuguese or English within the same conversation. Suspension may limit an account to read-only access; revocation ends access. Every moderation action will be recorded and subject to the appeal process.'}</p>
      </aside>
    </div>
  );
}

export function MemberGate({ locale, mode = 'portal' }: { locale: Locale; mode?: GateMode }) {
  const [state, setState] = useState<GateState>('idle');
  const [account, setAccount] = useState('');
  const [message, setMessage] = useState('');
  const isPt = locale === 'pt';

  async function connect() {
    setState('connecting');
    setMessage('');
    try {
      const ethereum = (window as typeof window & { ethereum?: Provider }).ethereum;
      if (!ethereum) throw new Error(isPt ? 'Instale uma carteira compatível para continuar.' : 'Install a compatible wallet to continue.');
      const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[];
      const nextAccount = accounts?.[0];
      if (!nextAccount) throw new Error(isPt ? 'Nenhuma carteira foi selecionada.' : 'No wallet was selected.');
      setAccount(nextAccount);

      const contract = process.env.NEXT_PUBLIC_MEMBERSHIP_CONTRACT_ADDRESS;
      if (!contract || !/^0x[0-9a-fA-F]{40}$/.test(contract)) {
        setState('unconfigured');
        return;
      }

      const paddedAccount = nextAccount.toLowerCase().replace(/^0x/, '').padStart(64, '0');
      const result = (await ethereum.request({
        method: 'eth_call',
        params: [{ to: contract, data: `0x70a08231${paddedAccount}` }, 'latest'],
      })) as string;
      const balance = BigInt(result || '0x0');
      setState(balance > BigInt(0) ? 'member' : 'nonmember');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : (isPt ? 'Não foi possível verificar a carteira.' : 'The wallet could not be verified.'));
      setState('error');
    }
  }

  return (
    <section className="member-gate" aria-live="polite">
      <div className="gate-header">
        <div><span className="live-dot" /><span>{mode === 'forum' ? (isPt ? 'Fórum verificável na rede' : 'Onchain-verifiable forum') : (isPt ? 'Portal verificável na rede' : 'Onchain-verifiable portal')}</span></div>
        {account && <code>{shorten(account)}</code>}
      </div>

      {state === 'idle' || state === 'connecting' || state === 'error' ? (
        <div className="gate-connect">
          <p className="eyebrow">{isPt ? 'Acesso token-gated' : 'Token-gated access'}</p>
          <h2>{isPt ? 'Verifique a sua credencial de membro.' : 'Verify your membership credential.'}</h2>
          <p>{isPt ? 'A ligação apenas lê o endereço e a credencial pública da carteira. Não pede assinatura nem inicia transações.' : 'Connecting only reads your address and public membership credential. It does not request a signature or start a transaction.'}</p>
          <button className="button wallet-button" type="button" onClick={connect} disabled={state === 'connecting'}>
            {state === 'connecting' ? (isPt ? 'A verificar…' : 'Checking…') : (isPt ? 'Ligar carteira' : 'Connect wallet')} <span>↗</span>
          </button>
          {message && <p className="gate-error">{message}</p>}
        </div>
      ) : null}

      {state === 'unconfigured' && (
        <div className="gate-result gate-result--pending">
          <span>◇</span><h2>{isPt ? 'Carteira pronta. Contrato em preparação.' : 'Wallet ready. Contract pending.'}</h2>
          <p>{mode === 'forum'
            ? (isPt ? 'O fórum está estruturado. Será aberto depois da ratificação, quando a credencial e o estado de membro puderem ser verificados diretamente no registo.' : 'The forum is structured. It will open after ratification, when the membership credential and status can be verified directly against the registry.')
            : (isPt ? 'A interface de verificação está concluída. Assim que a rede e o contrato de adesão forem aprovados, esta carteira será validada diretamente no registo de membros.' : 'The verification interface is ready. Once the network and membership contract are approved, this wallet will be checked directly against the member registry.')}</p>
        </div>
      )}

      {state === 'nonmember' && (
        <div className="gate-result gate-result--nonmember">
          <span>○</span><h2>{isPt ? 'Credencial não encontrada.' : 'No credential found.'}</h2>
          <p>{isPt ? 'A adesão começa com uma contribuição qualificada reconhecida pela Associação. A credencial só pode ser emitida depois dessa aprovação.' : 'Membership begins with a qualified contribution recognized by the Association. A credential can only be issued after that approval.'}</p>
        </div>
      )}

      {state === 'member' && mode === 'forum' && <ForumBoard locale={locale} />}

      {state === 'member' && mode === 'portal' && (
        <div className="member-dashboard">
          <div className="member-welcome"><span>●</span><div><p>{isPt ? 'Credencial ativa' : 'Active credential'}</p><h2>{isPt ? 'Bem-vindo à área de membros.' : 'Welcome to the member area.'}</h2></div></div>
          <div className="portal-modules">
            {[
              [isPt ? 'Propostas' : 'Proposals', isPt ? 'Consultar e apresentar propostas' : 'View and submit proposals'],
              [isPt ? 'Votação' : 'Voting', isPt ? 'Um membro, um voto' : 'One member, one vote'],
              [isPt ? 'Delegação' : 'Delegation', isPt ? 'Delegar ou recuperar o voto' : 'Delegate or reclaim a vote'],
              [isPt ? 'Grupos' : 'Groups', isPt ? 'Participar nos grupos permanentes' : 'Join the permanent groups'],
            ].map(([title, text]) => <article key={title}><span>↗</span><h3>{title}</h3><p>{text}</p></article>)}
            <Link className="portal-module portal-module--forum" href={isPt ? '/membros/forum' : '/en/members/forum'}>
              <span>↗</span><h3>{isPt ? 'Fórum' : 'Forum'}</h3><p>{isPt ? 'Conversar nos grupos e preparar propostas' : 'Discuss within groups and prepare proposals'}</p>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
