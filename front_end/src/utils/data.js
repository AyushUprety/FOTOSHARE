const userDetail=(ownerId)=>{
    const query = `*[_type == "user" && _id=='${ownerId}']`
    return query;
}
export default userDetail;