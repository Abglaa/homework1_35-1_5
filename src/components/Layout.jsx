import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.jsx";



const Layout = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main><Outlet /></main>
            <footer>Geeks 2024</footer>
        </div>
    )
}
export default Layout
