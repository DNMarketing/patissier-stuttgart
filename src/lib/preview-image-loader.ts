/**
 * Nur für den GitHub-Pages-Preview-Export (PREVIEW_EXPORT=1):
 * next/image prependet den basePath bei `unoptimized` nicht selbst,
 * deshalb übernimmt das dieser Loader. In Produktion (Netlify) ungenutzt.
 */
export default function previewImageLoader({ src }: { src: string }) {
  return `/patissier-stuttgart${src}`;
}
