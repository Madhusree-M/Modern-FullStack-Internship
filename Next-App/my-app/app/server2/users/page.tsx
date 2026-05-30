// In client side component, we are using useEffect and useState to store the data and request the data
// In server side component, we can still make a network request without useState and useEffect

type User = {
    id: number,
    firstName: string
}

async function getAllUsers()
{
    const res = await fetch ("https:dummyjson.com/users");
    const data = await res.json();
    console.log("Server data : ",data);
    return data.users;
}
async function UsersPage()
{
    const users = await getAllUsers();
    return (
        <>
        <h1>Server Users</h1>
        {
            users.map((user:User) => (

                <h3 key={user.id}>{user.firstName}</h3>
            ))
        }
        </>
    )
}

export default UsersPage;