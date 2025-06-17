/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "cdn.webibee.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/about/why_oneus",
        destination: "/about/why-choose-us",
        permanent: true,
      },
      {
        source: "/about/oneus_story",
        destination: "/about/our-story",
        permanent: true,
      },
      {
        source: "/about/our_vision",
        destination: "/about/our-vision",
        permanent: true,
      },
      {
        source: "/about/network",
        destination: "/about/list-of-countries",
        permanent: true,
      },
      {
        source: "/about/oneus_team",
        destination: "/about/meet-the-team",
        permanent: true,
      },
      // {
      //   source: "/services",
      //   destination: "/services",
      //   permanent: true,
      // },
      {
        source: "/services/corporate_travel",
        destination: "/corporate-travel",
        permanent: true,
      },
      {
        source: "/services/leisure",
        destination: "/leisure",
        permanent: true,
      },
      {
        source: "/services/visa_services",
        destination: "/visa-services",
        permanent: true,
      },
      {
        source: "/services/meeting_events",
        destination: "/services/meetings-and-events",
        permanent: true,
      },
      {
        source: "/technology",
        destination: "/solo-travel",
        permanent: true,
      },
      {
        source: "/resources/news",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/resources/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/resources/case_studies",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/privacy_policy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms_of_use",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/booking_t&c",
        destination: "/booking-terms-and-conditions",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
