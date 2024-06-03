export default function robots(){
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: 'Applebot',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://travel.com/sitemap.xml',
  }
}