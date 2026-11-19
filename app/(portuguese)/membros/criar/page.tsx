import { privateRobots } from '@/lib/site-metadata';
import { MembershipCreationPage } from '@/components/MembershipCreationPage';

export const metadata = { robots: privateRobots };

export default function CreateMembership() {
  return <MembershipCreationPage locale="pt" />;
}
