import { publicPageMetadata } from '@/lib/site-metadata';
import { GovernancePage } from '@/components/GovernancePage';

export const metadata = publicPageMetadata('governance', 'pt');

export default function Governance() {
  return <GovernancePage locale="pt" />;
}
