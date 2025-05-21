import { Outlet } from "react-router-dom";
import "./Container.css";


function Container() {
    return (
        <div id="main">
            <Outlet />
        </div>
    )
}

export default Container;