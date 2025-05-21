import { NavLink } from "react-router-dom"
import "./Sidebar.css"


function Sidebar() {
    return (
        <div id="sidebar">
            <div id="sidebar-top">
                <NavLink to="/people" className="sidebar-item" >
                    <img src="/assets/people.svg" alt="People" />
                    People
                </NavLink>
                <NavLink to="/feed" className="sidebar-item">
                    <img src="/assets/feed.svg" alt="Feed" />
                    Feed
                </NavLink>
                <NavLink to="/chats" className="sidebar-item">
                    <img src="/assets/chats.svg" alt="Chats" />
                    Chats
                </NavLink>
            </div>

            <div id="sidebar-bottom">
                {/* <NavLink to="/settings" className="sidebar-item">
                    <img src="/assets/settings.svg" alt="Settings" />
                </NavLink> */}
                <NavLink to="/login" className="sidebar-item">
                    <img src="/assets/login.svg" alt="Login" />
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;