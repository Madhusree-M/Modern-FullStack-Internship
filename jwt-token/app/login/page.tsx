import handleLogin from "../actions/handleLogin";

function login()
{
    return(
        <>
        <form action={handleLogin}>
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" id="email" />

            <br /><br />

            <label htmlFor="password">Password :</label>
            <input type="password" name="password" id="password" />

            <br /><br />

            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default login;