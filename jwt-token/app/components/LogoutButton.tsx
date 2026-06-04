import { cookies } from "next/headers";
import handleLogout from "../actions/handleLogout";

function LogoutButton()
{
    return(
        <>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default LogoutButton;