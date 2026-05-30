import {Link} from "react-router-dom"

function Navbar()
{
    return(
    <>
    <nav className="flex justify-between bg-cyan-100 px-3 py-4">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/login'>Login</Link>
    </nav>
    </>
    );
}

export default Navbar;