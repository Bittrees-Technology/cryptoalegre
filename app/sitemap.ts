import type { MetadataRoute } from 'next';
import { groupPaths, groupSlugs, publicPages, siteOrigin } from '@/lib/site-metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.values(publicPages).flatMap(pair => [pair.pt.path, pair.en.path]);
  const groups = groupSlugs.flatMap(pair => Object.values(groupPaths(pair)));
  return [...pages, ...groups].map(path => ({ url: siteOrigin + path }));
}
