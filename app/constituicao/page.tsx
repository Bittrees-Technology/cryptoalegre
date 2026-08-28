import type { Metadata } from 'next';
import { ConstitutionPage } from '../../components/ConstitutionPage';

export const metadata: Metadata = {
  title: 'Constituição da Cryptoalegre',
  description: 'Texto integral da Constituição da Cryptoalegre e referências verificáveis da Associação na Ethereum mainnet.',
  alternates: {
    canonical: '/constituicao',
    languages: { 'pt-PT': '/constituicao', en: '/en/constitution' },
  },
};

export default function Constitution() {
  return <ConstitutionPage locale="pt" />;
}
