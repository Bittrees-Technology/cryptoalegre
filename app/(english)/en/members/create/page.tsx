import { privateRobots } from '@/lib/site-metadata';
import { MembershipCreationPage } from '@/components/MembershipCreationPage';

export const metadata = { robots: privateRobots };

export default function CreateEnglishMembership() {
  return <MembershipCreationPage locale="en" />;
}
