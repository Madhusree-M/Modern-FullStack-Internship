// runs on server
// server side components
// async before the function
// cannot write useState, useEffect, button, eventhandlers

"use client"

import { useState, useEffect } from "react";

type User = {
    id: number,
    firstName: string
}

function UsersPage()
{
    const [users, setUsers] = useState([]);

    async function getAllUsers()
    {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
        console.log("data : ",data.users);
    }
    useEffect(() => {
        getAllUsers();

    },[])
    return(
        <>
        <h1>Users Page</h1>
        {
            users.map((user:User) => (
                <div key={user.id}>
                    <h3>{user.firstName}</h3>
                </div>
            ))
        }
        </>
    )
}

export default UsersPage;