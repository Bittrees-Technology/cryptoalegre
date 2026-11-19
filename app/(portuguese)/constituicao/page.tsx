import { publicPageMetadata } from '@/lib/site-metadata';
import { ConstitutionPage } from '@/components/ConstitutionPage';

export const metadata = publicPageMetadata('constitution', 'pt');

export default function Constitution() {
  return <ConstitutionPage locale="pt" />;
}
