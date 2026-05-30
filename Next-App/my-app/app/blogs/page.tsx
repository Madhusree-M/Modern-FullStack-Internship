type Post =
{
    id:number,
    title:string,
    views:number,
    userId : number
}

async function getData()
{
    const data =  await fetch("https://dummyjson.com/posts");
    const res = await data.json();
    return res.posts;
}

async function Posts()
{
    const data = await getData();
    return(
        <>
        {
            data.map((post:Post) => 
                <div key={post.id} className="bg-gray-300">
                    <h1>{post.title}</h1>
                    <h1>{post.views}</h1>
                    <h1>{post.userId}</h1>
                </div>
            )
        }
        </>
    )
}

export default Posts;