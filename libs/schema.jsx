export const structuredDataForOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "One Us Travel Agency",
  url: "https://example.com",
  logo: "https://example.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-234-567-8910",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/yourprofile",
    "https://www.twitter.com/yourprofile",
    "https://www.linkedin.com/yourprofile",
  ],
};

export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Oneus Travel Consulting",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "AP Plot no. 1013, Old 28, New 56, near First left from Jessy Moses School, 10th St, Z Block ",
    addressLocality: "Anna Nagar",
    addressRegion: "Tamil Nadu",
    postalCode: "600040",
    addressCountry: "India",
  },
  openingHours: "Mon-Sat 09:30-18:30",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.089465306778516",
    longitude: "80.20958473068893",
  },
  url: "https://www.oneustravels.com/",
};

// Service Type Schema

export const corporateTravelServiceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Travel",
  provider: {
    "@type": "Organization",
    name: "Oneus Travel Agency",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "250",
  },
};

export const leisureServiceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Leisure Service",
  provider: {
    "@type": "Organization",
    name: "Oneus Travel Agency",
  },
};

export const visaServiceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Visa Service",
  provider: {
    "@type": "Organization",
    name: "Oneus Travel Agency",
  },
};

export const meetingEventServiceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Meeting  & Event",
  provider: {
    "@type": "Organization",
    name: "Oneus Travel Agency",
  },
};

// BlogPosting Type schema

export const blogPostData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Top 10 Travel Tips for 2024",
  image: "https://www.yourwebsite.com/blog-image.jpg",
  author: {
    "@type": "Person",
    name: "Jane Smith",
  },
  datePublished: "2024-06-17",
  articleBody: "Here are the top 10 travel tips for 2024...",
};

// contactForm Type Schema

export const contactPageData = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  telephone: "+91-98408 84460",
  contactType: "Customer Service",
  areaServed: "IND",
  availableLanguage: ["English", "Tamil"],
  email: "sales@oneustravels.com",
  hoursAvailable: "Mon-Sat 09:30-18:30",
};

// BreadcrumbList Schema

export const blogPostBreadcrumbsData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://oneus-travels.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://oneus-travels.vercel.app/resources/blog",
    },
  ],
};

export const corporateTravelBreadcrumbsData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://oneus-travels.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://oneus-travels.vercel.app/services/corporate_travel",
    },
  ],
};
