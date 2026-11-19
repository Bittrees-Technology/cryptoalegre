import { privateRobots } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { ForumPage } from '@/components/ForumPage';

export const metadata: Metadata = {
  robots: privateRobots,
  title: 'Member forum — Cryptoalegre',
  description: 'A private space for dialogue and collaboration among Cryptoalegre members.',
};

export default function EnglishForum() {
  return <ForumPage locale="en" />;
}
