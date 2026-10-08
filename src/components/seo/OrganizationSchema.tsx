export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://tglalearning.com/#organization",
        "name": "The Global Language Academy",
        "alternateName": "GLA - The Global Language Academy",
        "url": "https://tglalearning.com",
        "logo": "https://tglalearning.com/icon.png",
        "image": "https://tglalearning.com/images/logo-dark.png",
        "description": "Premier language institute in Delhi NCR providing certified German language coaching (A1-C2), IELTS preparation (Band 7.5+), and PTE Academic training with guaranteed exam success.",
        "telephone": "+91-9217999511",
        "email": "care@glaind.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 12, Dwarka",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110078",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.594833",
          "longitude": "77.030589"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "20:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/share/1RcNQDJLLG/",
          "https://www.instagram.com/the.globallanguageacademy/",
          "https://www.linkedin.com/company/the-global-language-academy/",
          "https://www.youtube.com/@TheGlobalLanguageAcademy"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://tglalearning.com/#website",
        "url": "https://tglalearning.com",
        "name": "The Global Language Academy",
        "publisher": {
          "@id": "https://tglalearning.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      id="organization-schema"
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
