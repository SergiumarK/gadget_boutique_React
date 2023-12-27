import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layouts/layout"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Cart from "./pages/Cart"
import Context from "./data/Context"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contacts",
                element: <Contacts />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

const App = () => {

    return <div className="container m-auto">
        <Context>
            <RouterProvider router={router} />
        </Context>
    </div>
}

export default App