import { publicPageMetadata } from '@/lib/site-metadata';
import { GovernancePage } from '@/components/GovernancePage';

export const metadata = publicPageMetadata('governance', 'en');

export default function EnglishGovernance() {
  return <GovernancePage locale="en" />;
}
