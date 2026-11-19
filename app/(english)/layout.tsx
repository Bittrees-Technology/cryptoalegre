import SiteDocument from '@/app/site-document';
import { siteMetadata } from '@/lib/site-metadata';

export const metadata = siteMetadata;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument language="en">{children}</SiteDocument>;
}
