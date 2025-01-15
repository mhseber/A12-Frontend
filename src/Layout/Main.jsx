import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer.jsx/Footer";
import Navbar from "../Pages/Shared/Footer.jsx/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;