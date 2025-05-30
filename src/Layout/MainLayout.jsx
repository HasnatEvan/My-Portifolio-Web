import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ContactIcon from "../Shared/ContactIcon";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ContactIcon></ContactIcon>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;