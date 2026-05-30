// 
// call dummyjson api using api
// store api data in state variable using useState()
// users, setUsers
// have loading variable - to display loading message
// set error - if any err occurs
//  display all the users 

import { useEffect, useState } from "react"

// useEffect - updation stage

// fetch("https://dummyjsonapi/users")
// .then((data) => {
//     console.log(data)
// })
// .then((response) => {
//     console.log(response)
// })
// .catch((err) => {
//     console.log(err)
// })

type User = {
    id  : number,
    firstName : string,
    lastName: string,
    email: string
}

const Users = () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    function getData()
    {
        fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((response) => {
            setData(response.users);
            setIsLoading(!isLoading);
            console.log(response.users)
        })
        .catch((err) => {
            setError(err.message)
            // console.log(err) 
        })

        if(error)
        {
            return (
                <><h5>{error}</h5></>
            )
        }
    }

    useEffect(() => 
    {
        getData();
    }, []);

    return (
        <>
        <h1>Users Data </h1>
            {isLoading ? "loading" : 
            
            data.map((user) => {
                return (
                <div key={user.id}>
                    <h3>{user.firstName}</h3>
                    <h3>{user.lastName}</h3>
                    <h3>{user.email}</h3>
                </div>
                )
            })
            
        }
        </>
    )
}

export default Users;
