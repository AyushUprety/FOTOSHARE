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
