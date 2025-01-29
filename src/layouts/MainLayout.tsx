import Header from "../components/headers/Header.tsx";
import {Outlet} from "react-router-dom";


const MainLayout = () => {

    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;