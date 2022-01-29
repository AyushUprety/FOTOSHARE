import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'
export default sanityClient({
    projectId: 'm8sl0fa3',
    dataset: 'production',
    apiVersion:'2022-01-29',
    token:'skcdvfur7XK9mfR08Q2zN8g4ZRla5uF1bhAQbr8qh2maqzGfXS3nkjmOn8ptWv2jIBfd43zRgEj5tU0YIofe19G5nWoITy3962cEZeeNSxAcmCior8MfzTzu8guaCsRYngWCIjYolBLOgUGArwlgNCuSlB8BgRHPx8IgIXHBsuDtH3xWyduP',
    useCdn: true
});
const builder = imageUrlBuilder(SanityClient)

export const urlFor = (source)=>builder.image(source);