import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const raw = (process.env.SITE_INDEXABLE ?? process.env.NEXT_PUBLIC_SITE_INDEXABLE ?? 'false')
    .trim()
    .toLowerCase();
  const isIndexable = raw === 'true' || raw === '1' || raw === 'yes';

  return {
    rules: {
      userAgent: '*',
      ...(isIndexable ? { allow: '/' } : { disallow: '/' }),
    },
  };
}

