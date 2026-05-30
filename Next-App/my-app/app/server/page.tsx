// fetch data directly from server
// then the page with the fetched data is rendered on the server
// then server will render the page to the client
// if somebody visits the page, immediately they will see the data without the delay

type User = {
    id: number,
    firstName: string,
    email: string
}

async function getUsers()
{
    const res = await fetch("https://dummyjson.com/users");

    const data = await res.json();

    return data.users;
}

async function UsersPage()
{
    const users = await getUsers();
    return(
        <>
            {
                users.map((user:User) => (
                    <div key={user.id}>
                        <h4>{user.firstName}</h4>
                        <h4>{user.email}</h4>
                    </div>
                ))
            }
        </>
    )
}

export default UsersPage;