import Link from 'next/link';
import { SiteFooter, SiteHeader } from './SiteChrome';

type Locale = 'pt' | 'en';

const SAFE_ADDRESS = '0x8C47d399FD7F9Fad35D91c6fC58bCE651d8DA72F';
const SAFE_URL = `https://app.safe.global/home?safe=eth:${SAFE_ADDRESS}`;
const ETHERSCAN_URL = `https://etherscan.io/address/${SAFE_ADDRESS}`;
const ENS_URL = 'https://app.ens.domains/cryptoalegre.eth';
const FOUNDING_SIGNERS = [
  '0x4dCad0b4f5B97AD84D9904f265330ebb6935aBC7',
  '0x01193A5140990F8D169E3292bAd7FEE7be810C7d',
  '0xc1765d7Dfd8897CdFa46F51fAC19b3576711f777',
];

const pageCopy = {
  pt: {
    eyebrow: 'Documento constitucional integral',
    title: 'Constituição da Cryptoalegre',
    intro: 'O texto público completo que define a missão, a adesão, os três Grupos Permanentes, a tomada de decisões, a resolução de conflitos e o processo de emendas da Associação.',
    status: 'Projeto pendente de ratificação pelos membros fundadores',
    languageNote: 'O português é o idioma principal deste documento. A versão inglesa é uma tradução de leitura e deve acompanhar futuras emendas aprovadas ao texto português.',
    registryEyebrow: 'Registo verificável · Ethereum mainnet',
    registryTitle: 'Referências da associação na blockchain',
    registryIntro: 'Estes dados foram verificados diretamente na Ethereum mainnet em 28 de agosto de 2026. Os links públicos permitem confirmar cada registo independentemente.',
    ensLabel: 'Nome ENS',
    ensDetail: 'O registo de endereço de cryptoalegre.eth resolve para o Safe da Associação.',
    safeLabel: 'Safe da Associação',
    safeDetail: 'Safe 1.4.1 · limiar atual 1-de-3 · três signatários fundadores.',
    signersLabel: 'Signatários fundadores',
    signer: 'Signatário',
    openEns: 'Abrir registo ENS',
    openSafe: 'Abrir no Safe',
    openExplorer: 'Ver no Etherscan',
    transitionLabel: 'Transição constitucional prevista',
    transitionText: 'Depois de as três credenciais fundadoras serem emitidas e detidas pelas carteiras signatárias, a Constituição será ratificada e o limiar do Safe passará de 1-de-3 para 2-de-3.',
    contractsLabel: 'Contratos em preparação',
    membershipContract: 'Credencial de membro',
    governanceContract: 'Governação constitucional',
    notDeployed: 'Ainda não implementado · nenhum endereço oficial publicado',
    verificationNote: 'O estado indicado como previsto ou não implementado não é apresentado como facto on-chain. Novos endereços só serão acrescentados depois da implementação, auditoria e aprovação constitucional.',
    contents: 'Índice',
    sections: [
      ['§1', 'Missão e Finalidade', '#secao-1'],
      ['§2', 'Adesão', '#secao-2'],
      ['§3', 'Estrutura de Governação', '#secao-3'],
      ['§4', 'Decisão e Votação', '#secao-4'],
      ['§5', 'Resolução de Conflitos', '#secao-5'],
      ['§6', 'Emendas', '#secao-6'],
    ],
    documentLabel: 'Texto constitucional completo',
    backToGovernance: 'Ver a governação em resumo',
  },
  en: {
    eyebrow: 'Complete constitutional document',
    title: 'Cryptoalegre Constitution',
    intro: 'The complete public text defining the Association’s mission, membership, three Permanent Groups, decision-making, conflict resolution, and amendment process.',
    status: 'Draft pending ratification by the founding members',
    languageNote: 'Portuguese is the lead language of this document. The English version is a reading translation and should follow future amendments approved in the Portuguese text.',
    registryEyebrow: 'Verifiable registry · Ethereum mainnet',
    registryTitle: 'The Association’s blockchain references',
    registryIntro: 'These records were verified directly on Ethereum mainnet on 28 August 2026. The public links allow every record to be checked independently.',
    ensLabel: 'ENS name',
    ensDetail: 'The cryptoalegre.eth address record resolves to the Association Safe.',
    safeLabel: 'Association Safe',
    safeDetail: 'Safe 1.4.1 · current 1-of-3 threshold · three founding signers.',
    signersLabel: 'Founding signers',
    signer: 'Signer',
    openEns: 'Open ENS record',
    openSafe: 'Open in Safe',
    openExplorer: 'View on Etherscan',
    transitionLabel: 'Planned constitutional transition',
    transitionText: 'After the three founding credentials are issued to and held by the signer wallets, the Constitution will be ratified and the Safe threshold will change from 1-of-3 to 2-of-3.',
    contractsLabel: 'Contracts in preparation',
    membershipContract: 'Membership credential',
    governanceContract: 'Constitutional governance',
    notDeployed: 'Not yet deployed · no official address published',
    verificationNote: 'Planned or undeployed states are not presented as on-chain facts. New addresses will be added only after deployment, audit, and constitutional approval.',
    contents: 'Contents',
    sections: [
      ['§1', 'Mission and Purpose', '#section-1'],
      ['§2', 'Membership', '#section-2'],
      ['§3', 'Governance Structure', '#section-3'],
      ['§4', 'Decision-Making and Voting', '#section-4'],
      ['§5', 'Conflict Resolution', '#section-5'],
      ['§6', 'Amendments', '#section-6'],
    ],
    documentLabel: 'Complete constitutional text',
    backToGovernance: 'View the governance summary',
  },
} as const;

function BlockchainRegistry({ locale }: { locale: Locale }) {
  const c = pageCopy[locale];

  return (
    <section className="chain-registry" id={locale === 'pt' ? 'registo-blockchain' : 'blockchain-registry'}>
      <div className="chain-registry__heading">
        <p className="eyebrow">{c.registryEyebrow}</p>
        <h2>{c.registryTitle}</h2>
        <p>{c.registryIntro}</p>
      </div>

      <div className="chain-registry__grid">
        <article className="chain-record chain-record--ens">
          <span>{c.ensLabel}</span>
          <strong>cryptoalegre.eth</strong>
          <p>{c.ensDetail}</p>
          <a href={ENS_URL} target="_blank" rel="noreferrer">{c.openEns} <span aria-hidden="true">↗</span></a>
        </article>

        <article className="chain-record chain-record--safe">
          <span>{c.safeLabel}</span>
          <code>{SAFE_ADDRESS}</code>
          <p>{c.safeDetail}</p>
          <div className="chain-record__links">
            <a href={SAFE_URL} target="_blank" rel="noreferrer">{c.openSafe} <span aria-hidden="true">↗</span></a>
            <a href={ETHERSCAN_URL} target="_blank" rel="noreferrer">{c.openExplorer} <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="chain-record chain-record--signers">
          <span>{c.signersLabel}</span>
          <ol>
            {FOUNDING_SIGNERS.map((address, index) => (
              <li key={address}>
                <span>{c.signer} {index + 1}</span>
                <a href={`https://etherscan.io/address/${address}`} target="_blank" rel="noreferrer"><code>{address}</code></a>
              </li>
            ))}
          </ol>
        </article>

        <article className="chain-record chain-record--transition">
          <span>{c.transitionLabel}</span>
          <strong>1 / 3 <i aria-hidden="true">→</i> 2 / 3</strong>
          <p>{c.transitionText}</p>
        </article>

        <article className="chain-record chain-record--contracts">
          <span>{c.contractsLabel}</span>
          <dl>
            <div><dt>{c.membershipContract}</dt><dd>{c.notDeployed}</dd></div>
            <div><dt>{c.governanceContract}</dt><dd>{c.notDeployed}</dd></div>
          </dl>
          <p>{c.verificationNote}</p>
        </article>
      </div>
    </section>
  );
}

function PortugueseConstitution() {
  return (
    <>
      <section className="constitution-section" id="secao-1">
        <p className="constitution-section__number">§1</p>
        <h2>Missão e Finalidade</h2>
        <p>A Cryptoalegre é uma associação cultural e educativa dedicada a explorar a integração de criptomoedas e da tecnologia blockchain na sociedade. A missão da Associação é explorar, experimentar e criar inovações sociais e tecnológicas guiadas por valores culturais e crescimento educativo, conforme declarado no nosso objeto social. A Cryptoalegre segue uma filosofia em que a cultura lidera a visão, a tecnologia fornece as ferramentas e a educação cria os laços intelectuais e sociais necessários ao desenvolvimento da comunidade.</p>
      </section>

      <section className="constitution-section" id="secao-2">
        <p className="constitution-section__number">§2</p>
        <h2>Adesão</h2>
        <p><strong>(§2.1) Adesão aberta:</strong> Qualquer pessoa pode tornar-se membro da Cryptoalegre, desde que faça uma contribuição qualificada para a Associação ou para qualquer projeto afiliado. Uma contribuição qualificada pode ser definida como: voluntariar tempo, partilhar conhecimento, criar conteúdo cultural ou tecnológico, ou qualquer outra participação significativa oficialmente reconhecida pela Associação. O Conselho Primário, ou um grupo delegado, usará uma decisão discricionária razoável para avaliar as contribuições para elegibilidade de adesão.</p>
        <p><strong>(§2.2) Direitos dos membros:</strong> Todos os membros têm direitos de voto iguais nas principais decisões e a capacidade de participar nas atividades da Associação. Os membros podem também delegar o seu voto a outro membro, conforme desejarem.</p>
      </section>

      <section className="constitution-section" id="secao-3">
        <p className="constitution-section__number">§3</p>
        <h2>Estrutura de Governação</h2>
        <h3>(§3.1) Conselho Primário</h3>
        <p>O Conselho Primário é o principal órgão de governação da Cryptoalegre, responsável pela estratégia geral e pela tomada de decisões finais. Tem a seguinte estrutura:</p>
        <ul>
          <li><strong>(§3.1.1) Composição:</strong> Até 13 lugares no Conselho Primário (inicialmente começando com 3 lugares e expandindo ao longo do tempo até 13). Cada lugar é ocupado por um conselheiro.</li>
          <li><strong>(§3.1.2) Eleição e mandato:</strong> Os conselheiros são eleitos pelo conjunto de membros votantes da Cryptoalegre. As eleições para os lugares do Conselho usam um sistema de voto por ordem de preferência (ranked-choice) para garantir representação justa. Cada conselheiro eleito cumpre um mandato de 24 meses (2 anos). A cada 24 meses, ou antes se um lugar ficar vago, os membros votarão para reconfirmar o lugar ou eleger um novo representante.</li>
          <li><strong>(§3.1.3) Responsabilidades:</strong> O Conselho Primário define a direção geral da Associação, garante que a sua missão é cumprida e constitui os três Grupos Permanentes (Cultura, Educação e Tecnologia), tratando também de decisões importantes ou conflitos não resolvidos ao nível dos grupos. Pode criar ou dissolver grupos adicionais conforme necessário para delegar responsabilidades, mas os três Grupos Permanentes não podem ser alterados nem dissolvidos exceto por emenda constitucional.</li>
        </ul>

        <h3>(§3.2) Grupos Permanentes</h3>
        <p>O Conselho Primário é constituído de três Grupos Permanentes, focados em aspectos específicos da missão da Cryptoalegre: Cultura, Educação e Tecnologia. Os Grupos Permanentes operam de forma semi-autónoma, cada um focado na sua área central, colaborando também em conjunto com os restantes Grupos. Cada Grupo Permanente é liderado por um(a) Primeiro(a) Presidente (First Chair), que coordena os esforços e representa o Grupo em reuniões intergrupos ou no Conselho Primário quando necessário.</p>

        <h4>(§3.2.1) Cultura</h4>
        <p>O Grupo Cultural é responsável por iniciativas que promovem comunidade, artes, eventos culturais e os aspetos sociais da Cryptoalegre:</p>
        <ul>
          <li><strong>(§3.2.1.1) Foco:</strong> Envolvimento comunitário, eventos culturais, inclusão e preservação dos valores e da ética da Associação. Este Grupo garante que o elemento humano e cultural orienta a direção da Cryptoalegre.</li>
          <li><strong>(§3.2.1.2) Liderança:</strong> Liderado pelo(a) Primeiro(a) Presidente de Cultura. Este Grupo é considerado primário na orientação da visão da Associação — a cultura lidera a direção geral, garantindo que os esforços de tecnologia e educação permaneçam centrados no povo e no socialmente relevante.</li>
          <li><strong>(§3.2.1.3) Colaboração:</strong> Trabalha com o Grupo de Educação para organizar workshops e eventos comunitários, e com o Grupo de Tecnologia para garantir que os projetos tecnológicos se alinham com os valores da comunidade.</li>
        </ul>

        <h4>(§3.2.2) Educação</h4>
        <p>O Grupo de Educação tem a tarefa de criar laços intelectuais e sociais através da aprendizagem e da partilha de conhecimento:</p>
        <ul>
          <li><strong>(§3.2.2.1) Foco:</strong> Documentação educativa, workshops, programas e partilha de competências que capacitam os membros com conhecimento sobre criptomoedas, blockchain, temas culturais e técnicos relacionados. Este Grupo desenvolve a capacidade dos membros para participarem e beneficiarem das iniciativas da Cryptoalegre.</li>
          <li><strong>(§3.2.2.2) Liderança:</strong> Liderado pelo(a) Primeiro(a) Presidente de Educação. A educação atua como a cola entre cultura e tecnologia — cria os laços intelectuais e sociais que permitem que a exploração e a experimentação floresçam em toda a comunidade.</li>
          <li><strong>(§3.2.2.3) Colaboração:</strong> Trabalha com o Grupo Cultural para incorporar contexto cultural no conteúdo educativo e com o Grupo de Tecnologia para desenvolver formação sobre novas ferramentas e plataformas. Garante que o conhecimento flui livremente entre todos os membros e grupos.</li>
        </ul>

        <h4>(§3.2.3) Tecnologia</h4>
        <p>O Grupo de Tecnologia gere a exploração e implementação de tecnologias de criptomoedas e blockchain nos projetos da Cryptoalegre:</p>
        <ul>
          <li><strong>(§3.2.3.1) Foco:</strong> Desenvolvimento técnico, integração cripto, ferramentas digitais e inovação em aplicações blockchain. Este Grupo explora novas tecnologias e garante que a Cryptoalegre se mantenha na linha da frente da inovação relacionada com a cripto.</li>
          <li><strong>(§3.2.3.2) Liderança:</strong> Liderado pelo(a) Primeiro(a) Presidente de Tecnologia. A tecnologia segue a visão cultural — isto significa que as iniciativas tecnológicas são desenvolvidas para apoiar os objetivos culturais e as necessidades da comunidade identificadas pelo Grupo Cultural.</li>
          <li><strong>(§3.2.3.3) Colaboração:</strong> Coordena com o Grupo Cultural para compreender necessidades/valores da comunidade, e com o Grupo de Educação para ajudar, explicar e ensinar novas tecnologias aos membros.</li>
        </ul>

        <h4>(§3.2.4) Primeiras Cadeiras dos Grupos</h4>
        <p>Cada um dos três Grupos Permanentes (Cultura, Tecnologia, Educação) tem um(a) Primeiro(a) Presidente responsável pela liderança desse Grupo:</p>
        <ul>
          <li><strong>(§3.2.4.1) Seleção:</strong> Um(a) Primeiro(a) Presidente é tipicamente eleito(a) pelos membros desse Grupo ou nomeado(a) pelo Conselho Primário quando um Grupo é inicialmente estabelecido. Os(as) Primeiros(as) Presidentes servem um mandato de 24 meses (2 anos) até serem reeleitos(as) ou substituídos(as) pelos membros do Grupo.</li>
          <li><strong>(§3.2.4.2) Função:</strong> Os(as) Primeiros(as) Presidentes facilitam as atividades do seu Grupo, asseguram cooperação com os outros Grupos Permanentes e levam propostas ou questões principais do seu Grupo ao Conselho Primário. Atuam como ligação entre o seu Grupo e o Conselho Primário.</li>
        </ul>
      </section>

      <section className="constitution-section" id="secao-4">
        <p className="constitution-section__number">§4</p>
        <h2>Tomada de Decisão e Votação</h2>
        <p><strong>(§4.1) Voto dos membros:</strong><br />Todos os membros da Cryptoalegre podem votar em propostas importantes, incluindo eleger membros do Conselho Primário e aprovar iniciativas relevantes, alterações de políticas e emendas a esta Constituição. Os membros podem votar diretamente ou escolher delegar o seu voto a um representante de confiança, de acordo com quaisquer procedimentos definidos pela Associação.</p>
        <p><strong>(§4.2) Voto do Conselho e dos Grupos:</strong><br />No Conselho Primário, cada conselheiro tem um voto. As decisões do Conselho sobre matérias rotineiras são decididas por maioria dos votos válidos expressos, desde que exista quórum de conselheiros. Cada Grupo Permanente pode tomar as suas decisões internas por maioria dos seus membros ou conforme definido nas diretrizes internas do Grupo, desde que essas decisões não entrem em conflito com esta Constituição ou com qualquer orientação oficial do Conselho Primário.</p>
        <p><strong>(§4.3) Quórum:</strong></p>
        <ul>
          <li>(§4.3.1) Para qualquer voto oficial ser válido, deve participar um quórum.</li>
          <li>(§4.3.2) Salvo indicação em contrário, o quórum para qualquer órgão decisor (Conselho Primário, Grupo Permanente ou comissão) é atingido quando pelo menos 50% dos membros votantes elegíveis desse órgão estão presentes ou devidamente representados.</li>
          <li>(§4.3.3) Para votos de toda a associação, incluindo Decisões Maiores e Emendas Constitucionais, o quórum é atingido quando pelo menos 50% de todos os membros registrados estão presentes ou devidamente representados.</li>
        </ul>
        <p><strong>(§4.4) Limiares de decisão:</strong><br />Diferentes tipos de decisões exigem diferentes níveis de aprovação:</p>
        <ul>
          <li><strong>(§4.4.1) Decisões ordinárias:</strong> Decisões operacionais do dia a dia ou questões menores são decididas por maioria simples (mais de 50%) dos votos válidos expressos pelo grupo ou conselho, com quórum cumprido.</li>
          <li><strong>(§4.4.2) Decisões maiores:</strong> Ações organizacionais significativas, incluindo grandes iniciativas ou alterações de políticas, exigem maioria de dois terços (2/3) dos votos válidos expressos, com quórum cumprido.</li>
          <li><strong>(§4.4.3) Emendas constitucionais:</strong> Alterações a esta Constituição (ver secção Emendas) exigem aprovação por pelo menos maioria de três quartos (3/4) dos votos válidos expressos num voto de toda a associação, com o quórum para emendas conforme definido na secção de emendas.</li>
        </ul>
        <p><strong>(§4.5) Eleições:</strong><br />As eleições para lugares do Conselho Primário usam um sistema de voto por ordem de preferência (ranked-choice). Este método garante que os candidatos eleitos têm amplo apoio dos membros. Se um lugar do Conselho ou o cargo de Primeiro(a) Presidente de Grupo for preenchido por eleição interna do Grupo, o Grupo pode também usar voto por ordem de preferência ou outros métodos de votação justos. Todas as eleições devem satisfazer os requisitos de quórum aplicáveis.</p>
        <p><strong>(§4.6) Autoridade de prevalência do Conselho:</strong><br />Quando a autoridade decisória é delegada a um Grupo Permanente ou a outra comissão, e esse órgão:</p>
        <ul>
          <li>(§4.6.1) não consegue chegar a uma decisão após dois (2) votos válidos com quórum; ou</li>
          <li>(§4.6.2) não consegue atingir quórum após três (3) tentativas devidamente notificadas; ou</li>
          <li>(§4.6.3) está envolvido num conflito ou impasse formalmente escalado ao abrigo da secção Resolução de Conflitos.</li>
        </ul>
        <p>O assunto pode ser levado ao Conselho Primário. O Conselho Primário pode então adotar uma resolução vinculativa sobre esse assunto por, pelo menos, maioria de dois terços (2/3) dos membros do Conselho, com quórum do Conselho cumprido. Tal resolução prevalece sobre qualquer decisão ou não-decisão conflitante do grupo delegado, desde que não contradiga a Constituição da Cryptoalegre.</p>
      </section>

      <section className="constitution-section" id="secao-5">
        <p className="constitution-section__number">§5</p>
        <h2>Resolução de Conflitos</h2>
        <p><strong>(§5.1) Dentro de um Grupo:</strong><br />Se surgir um conflito ou impasse decisório dentro de um único Grupo Permanente (Cultura, Tecnologia ou Educação) que os membros do Grupo não consigam resolver, a questão pode ser levada ao Conselho Primário para mediação. O Conselho Primário analisará a situação e, após ouvir contributos do Grupo e do(a) seu(sua) Primeiro(a) Presidente, pode propor ou impor uma resolução. A adoção de tal resolução do Conselho exige, pelo menos, maioria de dois terços (2/3) dos membros do Conselho, com quórum cumprido. A perspetiva do(a) Primeiro(a) Presidente desse Grupo será formalmente registrada, mas não impede o Conselho de adotar uma resolução ao abrigo da sua autoridade de prevalência, desde que a resolução não contradiga a Constituição da Cryptoalegre.</p>
        <p><strong>(§5.2) Entre Grupos:</strong><br />Se surgir um conflito entre dois ou mais Grupos Permanentes, os(as) Primeiros(as) Presidentes dos três Grupos reunir-se-ão com o Conselho Primário para discutir a questão. O objetivo é alcançar uma solução aceitável para todas as partes e, sempre que possível, obter acordo unânime entre os(as) três Primeiros(as) Presidentes. Se não for possível alcançar unanimidade entre os(as) Primeiros(as) Presidentes num período razoável, o Conselho Primário pode propor um plano de mediação ou solução e, se necessário, adotar uma resolução final. Qualquer decisão final sobre um conflito intergrupos tomada pelo Conselho Primário como resolução vinculativa exige, pelo menos, maioria de dois terços (2/3) dos membros do Conselho, com quórum cumprido, e será vinculativa para todos os Grupos, desde que não contradiga esta Constituição.</p>
      </section>

      <section className="constitution-section" id="secao-6">
        <p className="constitution-section__number">§6</p>
        <h2>Emendas</h2>
        <p>Esta Constituição pode ser emendada para melhor responder às necessidades da Associação à medida que esta cresce. As emendas podem ser propostas pelo Conselho Primário, por um Grupo Permanente, ou por uma petição assinada por pelo menos 17,5% de todos os membros. Uma proposta de emenda deve ser partilhada com todos os membros com antecedência e permitir pelo menos 45 dias para discussão.</p>
        <p>Para ser adotada, uma emenda exige:</p>
        <ul>
          <li><strong>(§6.1) Quórum:</strong> Pelo menos 50% de todos os membros registados presentes ou devidamente representados na votação da emenda.</li>
          <li><strong>(§6.2) Limiar:</strong> Aprovação por pelo menos maioria de três quartos (3/4) dos votos válidos expressos pelos membros.</li>
        </ul>
        <p>Todos os membros são elegíveis para participar nas votações de emendas.</p>
        <p>Alterações menores ou regras detalhadas que não alterem a estrutura fundamental de governação, missão ou finalidade podem ser tratadas em quaisquer regulamentos internos ou políticas que a Associação estabeleça, os quais podem ser aprovados por maioria simples do Conselho Primário, com quórum cumprido. Contudo, <strong>nenhum regulamento interno ou político pode contradizer os valores da Constituição. Em caso de conflito, a Constituição Cryptoalegre prevalece</strong>.</p>
      </section>
    </>
  );
}

function EnglishConstitution() {
  return (
    <>
      <section className="constitution-section" id="section-1">
        <p className="constitution-section__number">§1</p>
        <h2>Mission and Purpose</h2>
        <p>Cryptoalegre is a cultural and educational association dedicated to exploring the integration of cryptocurrency and blockchain technology into society. The Association’s mission is to explore, experiment, and create social and technological innovations guided by cultural values and educational growth as stated in our social object. Cryptoalegre follows a philosophy where culture leads the vision, technology provides the tools, and education creates the intellectual and social bonds needed for community development.</p>
      </section>

      <section className="constitution-section" id="section-2">
        <p className="constitution-section__number">§2</p>
        <h2>Membership</h2>
        <p><strong>(§2.1) Open Membership:</strong> Any person may become a member of Cryptoalegre, provided they make a qualified contribution to the Association or any affiliated project. A qualified contribution can be volunteering time, sharing knowledge, creating cultural or technological content, or any other meaningful participation as recognized officially by the Association. The Primary Council or a delegated group will use reasonable discretion to evaluate contributions for membership eligibility.</p>
        <p><strong>(§2.2) Member Rights:</strong> All members have equal voting rights on major decisions and the ability to participate in the Association’s activities. Members may also delegate their vote to another member as they wish.</p>
      </section>

      <section className="constitution-section" id="section-3">
        <p className="constitution-section__number">§3</p>
        <h2>Governance Structure</h2>
        <h3>(§3.1) Primary Council</h3>
        <p>The Primary Council is the main governing body of Cryptoalegre, responsible for overarching strategy and final decision-making. It has the following structure:</p>
        <ul>
          <li><strong>(§3.1.1) Composition:</strong> Up to 13 seats on the Primary Council (initially starting with 3 seats and expanding over time up to 13). Each seat is held by a council member.</li>
          <li><strong>(§3.1.2) Election and Term:</strong> Council members are elected by the voting membership of Cryptoalegre. Elections for council seats use a ranked-choice voting system to ensure fair representation. Each elected council member serves a term of 24 months (2 years). Every 24 months, or sooner if a seat becomes vacant, members will vote to reconfirm the seat or elect a new representative.</li>
          <li><strong>(§3.1.3) Responsibilities:</strong> The Primary Council sets the overall direction of the Association, ensures that its mission is carried out, and charters the three Permanent Groups (Culture, Education, and Technology), while also handling major decisions or conflicts unresolved at the group level. It may create or dissolve additional groups as needed to delegate responsibilities, but the three Permanent Groups may not be altered or dissolved except by constitutional amendment.</li>
        </ul>

        <h3>(§3.2) Permanent Groups</h3>
        <p>The Primary Council charters three Permanent Groups to focus on specific aspects of Cryptoalegre’s mission: Culture, Education, and Technology. These Permanent Groups operate semi-autonomously, each focusing on its core area while collaborating closely with the others. Each Permanent Group is led by a First Chair who coordinates the efforts and represents the Group in cross-group meetings or in the Primary Council when necessary.</p>

        <h4>(§3.2.1) Culture</h4>
        <p>The Cultural Group is responsible for initiatives that foster community, arts, cultural events, and the social aspects of Cryptoalegre:</p>
        <ul>
          <li><strong>(§3.2.1.1) Focus:</strong> Community engagement, cultural events, inclusion, and preserving the Association’s values and ethos. This Group ensures that the human and cultural element guides Cryptoalegre’s direction.</li>
          <li><strong>(§3.2.1.2) Leadership:</strong> Led by the First Chair of Culture. This Group is considered primary in guiding the Association’s vision — culture leads the overall direction, ensuring that technology and education efforts remain human-centered and socially relevant.</li>
          <li><strong>(§3.2.1.3) Collaboration:</strong> Works closely with the Education Group to organize community workshops and events, and with the Technology Group to ensure tech projects align with community values.</li>
        </ul>

        <h4>(§3.2.2) Education</h4>
        <p>The Education Group is tasked with creating intellectual and social bonds through learning and knowledge-sharing:</p>
        <ul>
          <li><strong>(§3.2.2.1) Focus:</strong> Educational documentation, workshops, programs, and skill-sharing that empower members with knowledge about cryptocurrency, blockchain, and related cultural and technical topics. This Group builds the capacity of members to participate in and benefit from Cryptoalegre’s initiatives.</li>
          <li><strong>(§3.2.2.2) Leadership:</strong> Led by the First Chair of Education. Education acts as the glue between culture and technology — it creates the intellectual and social bonds that enable exploration and experimentation to flourish across the community.</li>
          <li><strong>(§3.2.2.3) Collaboration:</strong> Works with the Cultural Group to incorporate cultural context into educational content, and with the Technology Group to develop training on new tools and platforms. It ensures knowledge flows freely among all members and groups.</li>
        </ul>

        <h4>(§3.2.3) Technology</h4>
        <p>The Technology Group handles the exploration and implementation of cryptocurrency and blockchain technologies within Cryptoalegre’s projects:</p>
        <ul>
          <li><strong>(§3.2.3.1) Focus:</strong> Technical development, crypto integration, digital tools, and innovation in blockchain applications. This Group explores new technologies and ensures Cryptoalegre stays at the forefront of crypto-related innovation.</li>
          <li><strong>(§3.2.3.2) Leadership:</strong> Led by the First Chair of Technology. Technology follows the cultural vision — meaning tech initiatives are developed to support the cultural goals and community needs identified by the Cultural Group.</li>
          <li><strong>(§3.2.3.3) Collaboration:</strong> Coordinates with the Cultural Group to understand community needs/values, and with the Education Group to help explain and teach new technologies to members.</li>
        </ul>

        <h4>(§3.2.4) First Chairs of Groups</h4>
        <p>Each of the three Permanent Groups (Culture, Technology, Education) has a First Chair responsible for leadership of that Group:</p>
        <ul>
          <li><strong>(§3.2.4.1) Selection:</strong> A First Chair is typically elected by the members of that Group or appointed by the Primary Council when a Group is first established. First Chairs serve for a term of 24 months (2 years) until re-elected or replaced by the Group’s members.</li>
          <li><strong>(§3.2.4.2) Role:</strong> First Chairs facilitate their Group’s activities, ensure cooperation with the other Permanent Groups, and bring major proposals or issues from their Group to the Primary Council. They act as the liaison between their Group and the Primary Council.</li>
        </ul>
      </section>

      <section className="constitution-section" id="section-4">
        <p className="constitution-section__number">§4</p>
        <h2>Decision-Making and Voting</h2>
        <p><strong>(§4.1) Member Voting:</strong><br />All members of Cryptoalegre can vote on important proposals, including electing Primary Council members and approving relevant initiatives, policy changes, and amendments to this Constitution. Members may vote directly or choose to delegate their vote to a trusted representative, in accordance with any procedures defined by the Association.</p>
        <p><strong>(§4.2) Council and Group Voting:</strong><br />Within the Primary Council, each council member has one vote. Council decisions on routine matters are decided by a simple majority of valid votes cast, provided a quorum of council members is present. Each Permanent Group can make its own internal decisions by majority vote of its members or as defined in that Group’s internal guidelines, so long as those decisions do not conflict with this Constitution or any official direction of the Primary Council.</p>
        <p><strong>(§4.3) Quorum:</strong></p>
        <ul>
          <li>(§4.3.1) For any official vote to be valid, a quorum must participate.</li>
          <li>(§4.3.2) Unless otherwise specified, quorum for any decision-making body (Primary Council, Permanent Group, or committee) is met when at least 50% of the eligible voting members of that body are present or validly represented.</li>
          <li>(§4.3.3) For membership-wide votes, including Relevant Decisions and Constitutional Amendments, quorum is met when at least 50% of all registered members are present or validly represented.</li>
        </ul>
        <p><strong>(§4.4) Decision Thresholds:</strong><br />Different types of decisions require different levels of approval:</p>
        <ul>
          <li><strong>(§4.4.1) Ordinary Decisions:</strong> Day-to-day operational decisions or minor issues are decided by a simple majority (more than 50%) of valid votes cast by the group or council, with quorum met.</li>
          <li><strong>(§4.4.2) Major Decisions:</strong> Significant organizational actions, including major initiatives or policy changes, require a two-thirds (2/3) majority of valid votes cast, with quorum met.</li>
          <li><strong>(§4.4.3) Constitutional Amendments:</strong> Changes to this Constitution (see Amendments section) require approval by at least a three-fourths (3/4) majority of valid votes cast in a membership-wide vote, with the quorum for amendments as defined in the Amendments section.</li>
        </ul>
        <p><strong>(§4.5) Elections:</strong><br />Elections for Primary Council seats use a ranked-choice voting system. This method ensures that elected candidates have broad support from the members. If a council seat or Group First Chair position is filled by internal Group election, the Group may also use ranked-choice or other fair voting methods. All elections must satisfy the applicable quorum requirements.</p>
        <p><strong>(§4.6) Council Override Authority:</strong><br />Where decision-making authority is delegated to a Permanent Group or other committee, and that body:</p>
        <ul>
          <li>(§4.6.1) cannot reach a decision after two (2) valid votes with quorum; or</li>
          <li>(§4.6.2) cannot achieve quorum after three (3) duly noticed attempts; or</li>
          <li>(§4.6.3) is involved in a conflict or deadlock formally escalated under the Conflict Resolution section.</li>
        </ul>
        <p>The matter may be brought to the Primary Council. The Primary Council may then adopt a binding resolution on that matter by at least a two-thirds (2/3) majority vote of Council members, with Council quorum met. Such a resolution overrides any conflicting decision or non-decision of the delegated group, provided it does not contradict this Constitution.</p>
      </section>

      <section className="constitution-section" id="section-5">
        <p className="constitution-section__number">§5</p>
        <h2>Conflict Resolution</h2>
        <p><strong>(§5.1) Within a Group:</strong><br />If a conflict or decision deadlock arises inside a single Permanent Group (Culture, Technology, or Education) that the Group members cannot resolve, the issue can be brought to the Primary Council for mediation. The Primary Council will review the situation and, after hearing input from the Group and its First Chair, may propose or impose a resolution. Adopting such a resolution of the Council requires at least a two-thirds (2/3) majority vote of the Council members, with quorum met. The perspective of the First Chair of that Group shall be formally recorded, but does not prevent the Council from adopting a resolution under its override authority, provided the resolution does not contradict this Constitution.</p>
        <p><strong>(§5.2) Between Groups:</strong><br />If a conflict arises between two or more Permanent Groups, the First Chairs of all three Groups will meet with the Primary Council to discuss the issue. The goal is to reach a solution agreeable to all parties and, where possible, to achieve unanimous agreement among the three First Chairs. If unanimous agreement among the First Chairs cannot be reached within a reasonable period, the Primary Council may propose a mediation plan or solution and, if necessary, adopt a final resolution. Any final decision on an inter-group conflict taken by the Primary Council as a binding resolution requires at least a two-thirds (2/3) majority vote of Council members, with quorum met, and shall be binding on all Groups, provided it does not contradict this Constitution.</p>
      </section>

      <section className="constitution-section" id="section-6">
        <p className="constitution-section__number">§6</p>
        <h2>Amendments</h2>
        <p>This Constitution can be amended to better meet the needs of the Association as it grows. Amendments may be proposed by the Primary Council, a Permanent Group, or by a petition signed by at least 17.5% of all members. A proposed amendment must be shared with all members in advance and allow at least 45 days for discussion.</p>
        <p>To be adopted, an amendment requires:</p>
        <ul>
          <li><strong>(§6.1) Quorum:</strong> At least 50% of all registered members present or validly represented in the amendment vote.</li>
          <li><strong>(§6.2) Threshold:</strong> Approval by at least a three-fourths (3/4) majority of valid votes cast by the membership.</li>
        </ul>
        <p>All members are eligible to participate in amendment votes.</p>
        <p>Minor changes or detailed rules that do not alter the fundamental governance structure, mission, or purpose can be handled in any bylaws or policies the Association sets forth, which may be approved by a simple majority of the Primary Council, with quorum met. However, <strong>no bylaw or policy may contradict this Constitution. In the event of a conflict, this Cryptoalegre Constitution prevails</strong>.</p>
      </section>
    </>
  );
}

export function ConstitutionPage({ locale }: { locale: Locale }) {
  const c = pageCopy[locale];
  const isPt = locale === 'pt';

  return (
    <main lang={isPt ? 'pt-PT' : 'en'}>
      <SiteHeader locale={locale} languageHref={isPt ? '/en/constitution' : '/constituicao'} />

      <section className="constitution-hero">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <p className="constitution-hero__intro">{c.intro}</p>
        <div className="constitution-hero__status">
          <span className="status-pill">{c.status}</span>
          <p>{c.languageNote}</p>
        </div>
      </section>

      <BlockchainRegistry locale={locale} />

      <section className="constitution-reader">
        <aside className="constitution-toc">
          <p className="eyebrow">{c.contents}</p>
          <nav aria-label={c.contents}>
            {c.sections.map(([number, label, href]) => (
              <Link href={href} key={number}><span>{number}</span>{label}</Link>
            ))}
          </nav>
          <Link className="constitution-toc__governance" href={isPt ? '/governacao' : '/en/governance'}>{c.backToGovernance} <span aria-hidden="true">→</span></Link>
        </aside>

        <article className="constitution-document">
          <p className="eyebrow">{c.documentLabel}</p>
          {isPt ? <PortugueseConstitution /> : <EnglishConstitution />}
        </article>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
