import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'
export default sanityClient({
    projectId: 'm8sl0fa3',
    dataset: 'production',
    apiVersion:'2022-01-29',
    token:process.env.REACT_APP_SANITY_TOKEN,
    useCdn: true
});
const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source)=>builder.image(source);