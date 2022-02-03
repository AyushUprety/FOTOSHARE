const userDetail=(ownerId)=>{
    const query = `*[_type == "user" && Id=${ownerId}]`
    return query;
}
export default userDetail;