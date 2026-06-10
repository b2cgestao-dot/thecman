import { Helmet } from 'react-helmet-async'
import { seo, company } from '@/data/siteData'

/** Metadados de SEO e Open Graph centralizados. */
export function Seo() {
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={seo.url} />
      <meta
        name="keywords"
        content="assistência técnica WEG, revenda autorizada WEG, motores elétricos, motorredutores, alternadores, manutenção industrial, peças WEG, Salvador, Bahia"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={seo.ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
    </Helmet>
  )
}
