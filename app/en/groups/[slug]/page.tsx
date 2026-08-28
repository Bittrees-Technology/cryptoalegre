import { notFound } from 'next/navigation';
import { getGroup, GroupPage } from '../../../../components/GroupPage';

export function generateStaticParams() {
  return ['culture', 'education', 'technology'].map((slug) => ({ slug }));
}

export default async function PermanentGroup({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = getGroup('en', slug);
  if (!group) notFound();
  return <GroupPage locale="en" group={group} />;
}
