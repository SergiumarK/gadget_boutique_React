import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const Header  = () => {
    return (
        <header className="flex justify-between h-14 items-center">
            <div className="flex gap-2 text-xl text-blue-600 font-semibold">
                <h1>Gadget</h1>
                <h2>Boutique</h2>
            </div>
            <nav>
            <ul className="flex gap-4 text-lg items-center">
                <li className="hover:text-blue-600 hover:border-b border-blue-600">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-600 hover:border-b border-blue-600">
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link className="flex gap-2 itmes-center bg-blue-600 text-white py-1 px-2 rounded-md hover:bg-blue-700 active:bg-blue-800 items-baseline" to="/cart"><FaShoppingCart /> Cart</Link>
                </li>
        </ul>
            </nav>
        </header>
    )
}

export default Header