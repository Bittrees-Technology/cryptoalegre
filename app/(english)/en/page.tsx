import { publicPageMetadata } from '@/lib/site-metadata';
import { HomePage } from '@/components/HomePage';

export const metadata = publicPageMetadata('home', 'en');

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
