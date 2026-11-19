import { publicPageMetadata } from '@/lib/site-metadata';
import { HomePage } from '@/components/HomePage';

export const metadata = publicPageMetadata('home', 'pt');

export default function Home() {
  return <HomePage locale="pt" />;
}
