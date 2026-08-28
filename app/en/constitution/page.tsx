import type { Metadata } from 'next';
import { ConstitutionPage } from '../../../components/ConstitutionPage';

export const metadata: Metadata = {
  title: 'Cryptoalegre Constitution',
  description: 'The complete Cryptoalegre Constitution and the Association’s verifiable Ethereum mainnet references.',
  alternates: {
    canonical: '/en/constitution',
    languages: { 'pt-PT': '/constituicao', en: '/en/constitution' },
  },
};

export default function EnglishConstitution() {
  return <ConstitutionPage locale="en" />;
}
