import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"]|order(publishedAt desc)[0...12] {
  title,
  slug,
  summary,
  publishedAt,
  body,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "plainBody": blockContent[].children[].text
}`;

export const NEWS_QUERIES = groq`
*[_type == "news"]|order(publishedAt desc)[0...12] {
  title,
  slug,
  summary,
  publishedAt,
  body,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "plainBody": blockContent[].children[].text
}`;

export const CSS_QUERY = groq`
*[_type == "caseStudy"]|order(publishedAt desc)[0...12] {
  title,
  slug,
  summary,
  publishedAt,
  body,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "plainBody": blockContent[].children[].text
}`;


export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  summary,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  blockContent[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`

export const NEWS_QUERY = groq`
*[_type == "news" && slug.current == $slug][0] {
  title,
  summary,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  blockContent[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`

export const CS_QUERY = groq`
*[_type == "caseStudy" && slug.current == $slug][0] {
  title,
  summary,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  blockContent[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`
export const LOCATION_QUERY = groq`
*[_type == "location" && lower(title) == lower($slug)][0] {
  title,
  blockContent[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`
