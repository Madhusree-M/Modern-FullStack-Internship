export default async function BlogsId(props:any)
{
    const user = await props.params;
    console.log(user)
    const name = user.username;
    const id = user.blogId
    return(
        <>
        <h1>Username : {name}</h1>
        <h2>BlogId : {id}</h2>
        </>
    )
}