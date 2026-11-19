import { publicPageMetadata } from '@/lib/site-metadata';
import { InitiativesPage } from '@/components/InitiativesPage';

export const metadata = publicPageMetadata('initiatives', 'pt');

export default function Initiatives() {
  return <InitiativesPage locale="pt" />;
}
