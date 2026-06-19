import { Helmet } from 'react-helmet-async'
import { seo, company } from '@/data/siteData'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  description:
    'Assistência técnica e revenda autorizada WEG em Salvador, Bahia. Manutenção de motores elétricos, motorredutores, alternadores e fornecimento de peças WEG.',
  url: company.website,
  telephone: `+${company.whatsapp}`,
  email: company.email,
  areaServed: [
    { '@type': 'City', name: 'Salvador' },
    { '@type': 'AdministrativeArea', name: 'Bahia' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:30',
    closes: '17:30',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços e produtos',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manutenção de motores elétricos WEG' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manutenção de motorredutores e redutores' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manutenção de alternadores' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Peças WEG originais' } },
    ],
  },
  sameAs: ['https://share.google/W2sOHOm6bmEDmaXHW'],
}

export function Seo() {
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  )
}
