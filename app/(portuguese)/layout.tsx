import SiteDocument from '@/app/site-document';
import { siteMetadata } from '@/lib/site-metadata';

export const metadata = siteMetadata;

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument language="pt-PT">{children}</SiteDocument>;
}
