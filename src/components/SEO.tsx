import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
  canonical?: string;
  alternateLang?: { lang: string; url: string }[];
}

const SEO = ({
  title = 'BHSK Health Services - Comprehensive Healthcare & Medical Care in Qatar',
  description = 'BHSK Health Services provides comprehensive healthcare including home nursing, elderly care, neonatal care, palliative care, pregnancy care, school nursing, industrial nursing, travel care, and post-operative care in Qatar.',
  keywords = 'comprehensive healthcare Qatar, home nursing Qatar, elderly care Qatar, neonatal care Qatar, palliative care Qatar, pregnancy care Qatar, school nurse Qatar, industrial nurse Qatar, travel care Qatar, post-operative care Qatar, physiotherapy Qatar, professional medical care Doha',
  image = '/placeholder.svg',
  url = 'https://www.bhskforhealthservices.com',
  type = 'website',
  structuredData,
  canonical,
  alternateLang,
}: SEOProps) => {
  const fullTitle = title.includes('BHSK') ? title : `${title} | BHSK Health Services Qatar`;
  const fullUrl = canonical || url;
  const imageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="BHSK Health Services" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_QA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Alternate Language Versions */}
      {alternateLang?.map((alt) => (
        <link key={alt.lang} rel="alternate" hreflang={alt.lang} href={alt.url} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

