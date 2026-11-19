import { publicPageMetadata } from '@/lib/site-metadata';
import { MembersPage } from '@/components/MembersPage';

export const metadata = publicPageMetadata('members', 'en');

export default function EnglishMembers() {
  return <MembersPage locale="en" />;
}
