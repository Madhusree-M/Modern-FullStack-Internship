"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

type User = {
    id: number,
    firstName: string
}

function UserId()
{
    const params = useParams();
    const userId = params.id;
    console.log(userId);


    const [data, setData] = useState<User>()


    async function getData()
    {
        const res = await fetch(`https://dummyjson.com/users/${userId}`)
        const data = await res.json()
        console.log(data.firstName)
        setData(data);
    }
    useEffect(()=>{
        getData();

    },[])

    return (
        <>
            {data ? <h3>{data.firstName}</h3> : "No data found"}
        </>
    )
}

export default UserId;