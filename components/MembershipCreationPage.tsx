'use client';

import { FormEvent, useMemo, useState } from 'react';
import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';
type Provider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};
type WalletState = 'idle' | 'connecting' | 'wrong-network' | 'owner' | 'not-owner' | 'error';
type Group = 'culture' | 'education' | 'technology';

const DEFAULT_SAFE_ADDRESS = '0x8C47d399FD7F9Fad35D91c6fC58bCE651d8DA72F';
const VERIFIED_FOUNDING_MEMBERS = [
  '0x4dCad0b4f5B97AD84D9904f265330ebb6935aBC7',
  '0x01193A5140990F8D169E3292bAd7FEE7be810C7d',
  '0xc1765d7Dfd8897CdFa46F51fAC19b3576711f777',
];

const copy = {
  pt: {
    title: 'Criar uma adesão.',
    intro: 'Um fluxo verificável para reconhecer uma pessoa, preparar a sua credencial e concluir a emissão através do Safe da Associação em Ethereum Mainnet.',
    back: 'Voltar à área de membros',
    network: 'Ethereum Mainnet',
    oneTime: 'Uma emissão, um custo de gas',
    founders: '3 credenciais fundadoras',
    safeTitle: 'Autoridade de emissão',
    safeIntro: 'Os três membros atuais são os três signatários deste Safe. A página consulta o contrato do Safe ao ligar a carteira, para não confiar apenas numa lista guardada no site.',
    ownerLabel: 'Membro fundador',
    threshold: 'Confirmações atualmente exigidas',
    thresholdWarning: 'Fase fundadora: o Safe permanece temporariamente 1-de-3 enquanto as três credenciais não transferíveis são emitidas para as carteiras dos três signatários fundadores. Depois, o Safe passa para 2-de-3 e a ratificação da Constituição desbloqueia novas adesões.',
    connectTitle: 'Ligue uma carteira signatária.',
    connectText: 'A ligação verifica a rede, o endereço e a lista pública de signatários. Nenhuma assinatura ou transação é pedida nesta etapa.',
    connect: 'Ligar carteira',
    connecting: 'A verificar…',
    switch: 'Mudar para Ethereum Mainnet',
    wrongNetwork: 'A carteira está noutra rede. Mude para Ethereum Mainnet para verificar o Safe.',
    notOwner: 'Esta carteira não é atualmente signatária do Safe da Associação.',
    verified: 'Signatário verificado em Ethereum Mainnet',
    formEyebrow: 'Registo constitucional',
    formTitle: 'Preparar uma nova credencial.',
    formIntro: 'Durante a fase fundadora, apenas as três credenciais iniciais serão criadas no lançamento do contrato. Este formulário fica bloqueado até o Safe passar para 2-de-3 e a Constituição ser ratificada.',
    foundingLock: 'Emissão geral bloqueada durante a fase fundadora. Não existe preço de adesão: depois da ratificação, o único custo será o gas de Ethereum Mainnet pago ao executar a emissão através do Safe.',
    address: 'Carteira do novo membro',
    publicName: 'Nome público ou designação',
    contribution: 'Contribuição qualificada reconhecida',
    group: 'Grupo Permanente principal',
    culture: 'Cultura',
    education: 'Educação',
    technology: 'Tecnologia',
    reviewCheck: 'Confirmo que a identidade e possíveis duplicados foram verificados e que a adesão foi aprovada segundo a Constituição.',
    prepare: 'Preparar emissão',
    reviewTitle: 'Revisão antes do Safe',
    member: 'Novo membro',
    recordHash: 'Hash do registo',
    registry: 'Contrato de membros',
    pendingRegistry: 'Ainda não configurado',
    registryNote: 'A emissão permanece bloqueada até o contrato auditado estar configurado, as três credenciais fundadoras estarem nas carteiras dos signatários, o Safe passar para 2-de-3 e a Constituição ser ratificada.',
    download: 'Descarregar ficheiro Safe',
    openSafe: 'Abrir o Safe',
    readyNote: 'Importe o ficheiro em Nova transação → Transaction Builder, reveja a função e confirme no Safe. A execução em mainnet terá um custo único de gas.',
    error: 'Não foi possível verificar a carteira.',
    invalidAddress: 'Introduza uma carteira Ethereum válida.',
    required: 'Preencha os campos e confirme a verificação constitucional.',
  },
  en: {
    title: 'Create a membership.',
    intro: 'A verifiable workflow to recognize a person, prepare their credential, and complete issuance through the Association Safe on Ethereum Mainnet.',
    back: 'Back to the member area',
    network: 'Ethereum Mainnet',
    oneTime: 'One issuance, one gas cost',
    founders: '3 founding credentials',
    safeTitle: 'Issuance authority',
    safeIntro: 'The three current members are the three signers of this Safe. The page queries the Safe contract when a wallet connects, so it does not rely only on a list stored on the site.',
    ownerLabel: 'Founding member',
    threshold: 'Confirmations currently required',
    thresholdWarning: 'Founding phase: the Safe remains temporarily 1-of-3 while three non-transferable credentials are issued to the three founding signer wallets. The Safe then moves to 2-of-3, and constitutional ratification unlocks new memberships.',
    connectTitle: 'Connect a signer wallet.',
    connectText: 'Connecting checks the network, address, and public signer list. No signature or transaction is requested at this stage.',
    connect: 'Connect wallet',
    connecting: 'Checking…',
    switch: 'Switch to Ethereum Mainnet',
    wrongNetwork: 'The wallet is on another network. Switch to Ethereum Mainnet to verify the Safe.',
    notOwner: 'This wallet is not currently a signer of the Association Safe.',
    verified: 'Signer verified on Ethereum Mainnet',
    formEyebrow: 'Constitutional record',
    formTitle: 'Prepare a new credential.',
    formIntro: 'During the founding phase, only the three initial credentials will be created at contract launch. This form remains locked until the Safe moves to 2-of-3 and the Constitution is ratified.',
    foundingLock: 'General issuance is locked during the founding phase. There is no membership price: after ratification, the only cost will be Ethereum Mainnet gas when the Safe executes an issuance.',
    address: 'New member wallet',
    publicName: 'Public name or designation',
    contribution: 'Recognized qualified contribution',
    group: 'Primary Permanent Group',
    culture: 'Culture',
    education: 'Education',
    technology: 'Technology',
    reviewCheck: 'I confirm that identity and possible duplicates were checked and membership was approved under the Constitution.',
    prepare: 'Prepare issuance',
    reviewTitle: 'Review before Safe',
    member: 'New member',
    recordHash: 'Record hash',
    registry: 'Membership contract',
    pendingRegistry: 'Not configured yet',
    registryNote: 'Issuance remains blocked until the audited contract is configured, the three founding credentials are held by the signer wallets, the Safe moves to 2-of-3, and the Constitution is ratified.',
    download: 'Download Safe file',
    openSafe: 'Open Safe',
    readyNote: 'Import the file under New transaction → Transaction Builder, review the function, and confirm in Safe. Mainnet execution will incur a one-time gas cost.',
    error: 'The wallet could not be verified.',
    invalidAddress: 'Enter a valid Ethereum wallet.',
    required: 'Complete the fields and confirm the constitutional check.',
  },
};

function shorten(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

function isAddress(value: string) {
  return /^0x[0-9a-fA-F]{40}$/.test(value);
}

function decodeAddressArray(value: string) {
  const data = value.replace(/^0x/, '');
  if (data.length < 128) return [];
  const offset = Number(BigInt(`0x${data.slice(0, 64)}`));
  const lengthIndex = offset * 2;
  const length = Number(BigInt(`0x${data.slice(lengthIndex, lengthIndex + 64)}`));
  return Array.from({ length }, (_, index) => {
    const start = lengthIndex + 64 + index * 64;
    return `0x${data.slice(start + 24, start + 64)}`;
  });
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return `0x${Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')}`;
}

export function MembershipCreationPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const isPt = locale === 'pt';
  const safeAddress = process.env.NEXT_PUBLIC_SAFE_ADDRESS || DEFAULT_SAFE_ADDRESS;
  const registryAddress = process.env.NEXT_PUBLIC_MEMBERSHIP_CONTRACT_ADDRESS || '';
  const registryReady = isAddress(registryAddress);
  const constitutionRatified = process.env.NEXT_PUBLIC_CONSTITUTION_RATIFIED === 'true';
  const [walletState, setWalletState] = useState<WalletState>('idle');
  const [account, setAccount] = useState('');
  const [owners, setOwners] = useState(VERIFIED_FOUNDING_MEMBERS);
  const [threshold, setThreshold] = useState(1);
  const [walletMessage, setWalletMessage] = useState('');
  const [memberAddress, setMemberAddress] = useState('');
  const [publicName, setPublicName] = useState('');
  const [contribution, setContribution] = useState('');
  const [group, setGroup] = useState<Group>('culture');
  const [confirmed, setConfirmed] = useState(false);
  const [recordHash, setRecordHash] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const groupLabels = useMemo(() => ({ culture: c.culture, education: c.education, technology: c.technology }), [c]);
  const groupIndex = { culture: '0', education: '1', technology: '2' }[group];
  const safeUrl = `https://app.safe.global/home?safe=eth:${safeAddress}`;
  const canPrepare = walletState === 'owner' && constitutionRatified;

  async function readSafe(ethereum: Provider, nextAccount: string) {
    const [ownerData, thresholdData] = (await Promise.all([
      ethereum.request({ method: 'eth_call', params: [{ to: safeAddress, data: '0xa0e67e2b' }, 'latest'] }),
      ethereum.request({ method: 'eth_call', params: [{ to: safeAddress, data: '0xe75235b8' }, 'latest'] }),
    ])) as [string, string];
    const liveOwners = decodeAddressArray(ownerData);
    const liveThreshold = Number(BigInt(thresholdData || '0x0'));
    setOwners(liveOwners);
    setThreshold(liveThreshold);
    setWalletState(liveOwners.some((owner) => owner.toLowerCase() === nextAccount.toLowerCase()) ? 'owner' : 'not-owner');
  }

  async function connect() {
    setWalletState('connecting');
    setWalletMessage('');
    try {
      const ethereum = (window as typeof window & { ethereum?: Provider }).ethereum;
      if (!ethereum) throw new Error(isPt ? 'Instale uma carteira compatível para continuar.' : 'Install a compatible wallet to continue.');
      const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[];
      const nextAccount = accounts?.[0];
      if (!nextAccount) throw new Error(c.error);
      setAccount(nextAccount);
      const chainId = (await ethereum.request({ method: 'eth_chainId' })) as string;
      if (chainId !== '0x1') {
        setWalletState('wrong-network');
        return;
      }
      await readSafe(ethereum, nextAccount);
    } catch (error) {
      setWalletMessage(error instanceof Error ? error.message : c.error);
      setWalletState('error');
    }
  }

  async function switchNetwork() {
    setWalletMessage('');
    try {
      const ethereum = (window as typeof window & { ethereum?: Provider }).ethereum;
      if (!ethereum) throw new Error(c.error);
      await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x1' }] });
      if (!account) return connect();
      await readSafe(ethereum, account);
    } catch (error) {
      setWalletMessage(error instanceof Error ? error.message : c.error);
      setWalletState('error');
    }
  }

  async function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage('');
    setRecordHash('');
    if (!canPrepare) return;
    if (!isAddress(memberAddress)) {
      setFormMessage(c.invalidAddress);
      return;
    }
    if (!publicName.trim() || !contribution.trim() || !confirmed) {
      setFormMessage(c.required);
      return;
    }
    const canonicalRecord = JSON.stringify({
      constitution: 'Cryptoalegre Constitution — membership record v1',
      member: memberAddress.toLowerCase(),
      publicName: publicName.trim(),
      contribution: contribution.trim(),
      primaryGroup: group,
    });
    setRecordHash(await sha256Hex(canonicalRecord));
  }

  function safeBatch() {
    return {
      version: '1.0',
      chainId: '1',
      createdAt: Date.now(),
      meta: {
        name: `Cryptoalegre membership — ${publicName.trim()}`,
        description: 'Issue one non-transferable Cryptoalegre membership after constitutional approval.',
        txBuilderVersion: '1.18.0',
        createdFromSafeAddress: safeAddress,
        createdFromOwnerAddress: account,
        checksum: '',
      },
      transactions: [{
        to: registryAddress,
        value: '0',
        data: null,
        contractMethod: {
          inputs: [
            { internalType: 'address', name: 'member', type: 'address' },
            { internalType: 'bytes32', name: 'contributionHash', type: 'bytes32' },
            { internalType: 'uint8', name: 'primaryGroup', type: 'uint8' },
          ],
          name: 'createMembership',
          payable: false,
        },
        contractInputsValues: {
          member: memberAddress,
          contributionHash: recordHash,
          primaryGroup: groupIndex,
        },
      }],
    };
  }

  function downloadSafeFile() {
    if (!registryReady || !recordHash) return;
    const blob = new Blob([JSON.stringify(safeBatch(), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cryptoalegre-membership-${memberAddress.slice(2, 8)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main lang={isPt ? 'pt-PT' : 'en'}>
      <SiteHeader locale={locale} />
      <section className="internal-hero membership-create-hero">
        <a className="back-link" href={isPt ? '/membros' : '/en/members'}>← {c.back}</a>
        <p className="eyebrow">§2 · {isPt ? 'Emissão de credencial' : 'Credential issuance'}</p>
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
        <div className="issuance-facts">
          <span>{c.network}</span><span>{c.oneTime}</span><span>{c.founders}</span>
        </div>
      </section>

      <section className="safe-authority">
        <div className="safe-authority-copy">
          <p className="eyebrow">Safe · Ethereum</p>
          <h2>{c.safeTitle}</h2>
          <p>{c.safeIntro}</p>
          <a href={safeUrl} target="_blank" rel="noreferrer"><code>{safeAddress}</code> ↗</a>
        </div>
        <div className="founder-list">
          {owners.map((owner, index) => (
            <article key={owner}>
              <span>0{index + 1}</span>
              <div><strong>{c.ownerLabel}</strong><code>{shorten(owner)}</code></div>
            </article>
          ))}
          <div className="threshold-row"><span>{c.threshold}</span><strong>{threshold} / {owners.length}</strong></div>
          {threshold === 1 && <aside>{c.thresholdWarning}</aside>}
        </div>
      </section>

      <section className="signer-check" aria-live="polite">
        <div className="gate-header">
          <div><span className="live-dot" /><span>{c.network}</span></div>
          {account && <code>{shorten(account)}</code>}
        </div>
        <div className="signer-check-body">
          <div>
            <p className="eyebrow">{isPt ? 'Passo 01 · Autoridade' : 'Step 01 · Authority'}</p>
            <h2>{c.connectTitle}</h2>
            <p>{c.connectText}</p>
          </div>
          <div className="signer-action">
            {(walletState === 'idle' || walletState === 'connecting' || walletState === 'error') && (
              <button className="button wallet-button" type="button" onClick={connect} disabled={walletState === 'connecting'}>
                {walletState === 'connecting' ? c.connecting : c.connect} <span>↗</span>
              </button>
            )}
            {walletState === 'wrong-network' && <><p>{c.wrongNetwork}</p><button className="button wallet-button" type="button" onClick={switchNetwork}>{c.switch} <span>↗</span></button></>}
            {walletState === 'not-owner' && <p className="verification-chip verification-chip--denied">○ {c.notOwner}</p>}
            {walletState === 'owner' && <p className="verification-chip">● {c.verified}</p>}
            {walletMessage && <p className="gate-error">{walletMessage}</p>}
          </div>
        </div>
      </section>

      <section className={`membership-record ${!canPrepare ? 'membership-record--locked' : ''}`}>
        <div className="record-heading">
          <p className="eyebrow">{c.formEyebrow}</p>
          <h2>{c.formTitle}</h2>
          <p>{c.formIntro}</p>
        </div>
        {!constitutionRatified && <aside className="founding-phase-note">{c.foundingLock}</aside>}
        <form className="membership-form" onSubmit={prepare}>
          <label>{c.address}<input type="text" inputMode="text" autoComplete="off" placeholder="0x…" value={memberAddress} onChange={(event) => setMemberAddress(event.target.value.trim())} disabled={!canPrepare} /></label>
          <label>{c.publicName}<input type="text" maxLength={80} value={publicName} onChange={(event) => setPublicName(event.target.value)} disabled={!canPrepare} /></label>
          <label className="field-wide">{c.contribution}<textarea rows={5} maxLength={1200} value={contribution} onChange={(event) => setContribution(event.target.value)} disabled={!canPrepare} /></label>
          <fieldset className="field-wide"><legend>{c.group}</legend><div className="group-options">{(['culture', 'education', 'technology'] as Group[]).map((item) => <label key={item}><input type="radio" name="group" value={item} checked={group === item} onChange={() => setGroup(item)} disabled={!canPrepare} /><span>{groupLabels[item]}</span></label>)}</div></fieldset>
          <label className="confirmation field-wide"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} disabled={!canPrepare} /><span>{c.reviewCheck}</span></label>
          <div className="form-submit field-wide"><button className="button button--dark" type="submit" disabled={!canPrepare}>{c.prepare} <span>→</span></button>{formMessage && <p className="gate-error">{formMessage}</p>}</div>
        </form>

        {recordHash && (
          <div className="issuance-review" aria-live="polite">
            <p className="eyebrow">{isPt ? 'Passo 03 · Safe' : 'Step 03 · Safe'}</p>
            <h3>{c.reviewTitle}</h3>
            <dl>
              <div><dt>{c.member}</dt><dd>{publicName}<code>{memberAddress}</code></dd></div>
              <div><dt>{c.group}</dt><dd>{groupLabels[group]}</dd></div>
              <div><dt>{c.recordHash}</dt><dd><code>{recordHash}</code></dd></div>
              <div><dt>{c.registry}</dt><dd>{registryReady ? <code>{registryAddress}</code> : c.pendingRegistry}</dd></div>
            </dl>
            {!registryReady ? <aside>{c.registryNote}</aside> : <p className="ready-note">{c.readyNote}</p>}
            <div className="review-actions">
              <button className="button button--dark" type="button" onClick={downloadSafeFile} disabled={!registryReady}>{c.download} <span>↓</span></button>
              <a className="button button--outline-dark" href={safeUrl} target="_blank" rel="noreferrer">{c.openSafe} <span>↗</span></a>
            </div>
          </div>
        )}
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
