import { privateRobots } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { ForumPage } from '@/components/ForumPage';

export const metadata: Metadata = {
  robots: privateRobots,
  title: 'Fórum dos membros — Cryptoalegre',
  description: 'Espaço privado de diálogo e colaboração dos membros da Cryptoalegre.',
};

export default function Forum() {
  return <ForumPage locale="pt" />;
}
