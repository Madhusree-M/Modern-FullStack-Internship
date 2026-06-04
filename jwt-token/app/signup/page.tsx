import handleSignup from "../actions/handleSignup";

function signup()
{
    return(
        <>
        <form action={handleSignup}>

            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" />

            <br /> <br />

            <label htmlFor="email">Email : </label>
            <input type="text" name="email" id="email" />

            <br /><br />

            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" />

            <br /><br />

            <button type="submit">Signup</button>
        </form>
        </>
    )
}

export default signup;