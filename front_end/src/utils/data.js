import { RiOrderPlayFill } from "react-icons/ri";

 export const userDetail=(ownerId)=>{
    const query = `*[_type == "user" && _id=='${ownerId}']`
    return query;
}
 export const allPin =()=>{
    const query = `*[_type=="pin"]{
        name,
        about,
        destination,
        category,
        image,
        postedBy,
        save
    }`
    return query;
}
export const selectedPin = (category)=>{
    const query=`*[_type=='pin' && titlematch='${category}'|| categorymatch='${category}'|| aboutmatch='${category}' |order(_createdAt desc)]{
        title,
        about,
        destination,
        image{
            asset->{
                url
            }
        }
    }`
}