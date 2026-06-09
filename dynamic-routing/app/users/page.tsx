import Link from "next/link"; 

export default function Users(props:any)
{
    // console.log(props)
    return(
        <>
        <h2>Users route</h2>
        <nav>
            <ul>
                <li>
                    <Link href={`/users/Madhu`}>Madhu</Link>
                </li>
                <li>
                    <Link href={`/users/Harshini/blogs/103`}>Harshini</Link>
                </li>
                <li>
                    <Link href={`/users/Mathu/blogs/102`}>Mathu</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}