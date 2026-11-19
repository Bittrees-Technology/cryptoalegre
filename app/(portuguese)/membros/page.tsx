import { publicPageMetadata } from '@/lib/site-metadata';
import { MembersPage } from '@/components/MembersPage';

export const metadata = publicPageMetadata('members', 'pt');

export default function Members() {
  return <MembersPage locale="pt" />;
}
