import { notFound } from 'next/navigation';
import { getGroup, GroupPage } from '../../../components/GroupPage';

export function generateStaticParams() {
  return ['cultura', 'educacao', 'tecnologia'].map((slug) => ({ slug }));
}

export default async function PermanentGroup({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = getGroup('pt', slug);
  if (!group) notFound();
  return <GroupPage locale="pt" group={group} />;
}
