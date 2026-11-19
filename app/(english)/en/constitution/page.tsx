import { publicPageMetadata } from '@/lib/site-metadata';
import { ConstitutionPage } from '@/components/ConstitutionPage';

export const metadata = publicPageMetadata('constitution', 'en');

export default function EnglishConstitution() {
  return <ConstitutionPage locale="en" />;
}
