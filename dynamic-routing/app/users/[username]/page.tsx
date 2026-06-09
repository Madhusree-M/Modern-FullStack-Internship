export default async function UserName(props:any)
{
    const username = await props.params;
    console.log( await username.username)
    return(
        <>
        <h2>Hello {username.username}</h2>
        </>
    )
}

// /users/username/blogs/blogId

// Madhu - users/Madhu/blogs/101


// users/username/page.tsx
//  blogs/page.tsx