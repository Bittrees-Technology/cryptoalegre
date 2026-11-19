import { groupPaths, groupSlugs, pageMetadata } from '@/lib/site-metadata';
import { notFound } from 'next/navigation';
import { getGroup, GroupPage } from '@/components/GroupPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return groupSlugs.map(group => ({ slug: group.pt }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paths = groupSlugs.find(group => group.pt === slug);
  if (!paths) notFound();
  const group = getGroup('pt', slug);
  if (!group) notFound();
  return pageMetadata('pt', groupPaths(paths), group.title + ' | Cryptoalegre', group.intro);
}

export default async function PermanentGroup({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = getGroup('pt', slug);
  if (!group) notFound();
  return <GroupPage locale="pt" group={group} />;
}
