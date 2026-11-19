import { publicPageMetadata } from '@/lib/site-metadata';
import { InitiativesPage } from '@/components/InitiativesPage';

export const metadata = publicPageMetadata('initiatives', 'en');

export default function EnglishInitiatives() {
  return <InitiativesPage locale="en" />;
}
