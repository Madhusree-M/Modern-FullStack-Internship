"use client"
import Link from "next/link";
// adding this line will treat it as a client-components



import { useEffect, useState } from "react";
type User = {
    id : number,
    firstName : string,
    lastName : string
}
function Users ()
{
    const [data,setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function getData()
    {
        try{
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setData(data.users);
        setIsLoading(!isLoading);
        }
        catch(err:any)
        {
            console.log(err.message);
        }
    }

    useEffect(() =>
    {
        getData();
    },[])
    return (
        <>
        {
            isLoading ? "loading... " :
            data.map((user) => {
                return(
                    <div key={user.id}>
                        <Link href={`/client/users/${user.id}`}>{user.firstName}</Link>
                        <p>{user.lastName}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Users;