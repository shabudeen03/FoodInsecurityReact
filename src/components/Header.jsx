import { NavLink } from "react-router";

import logo from "../assets/images/logo.png";
import "../assets/stylesheets/header.css";

/*
    This header is the core of all the links the user can interact with, excluding form cancel/submit buttons.
    Personal notes - you can wrap a button, image or text with <NavLink></NavLink>, Navlink over Link due to supposed styling conveniency in the future
*/
function Header() {
    return (<header className="header">
        <div className="site-header_wrapper">
            <span className="logo">
                <NavLink to="/">
                    <img id="logo" src={logo} />
                </NavLink>
            </span>

            <div className="inline_element nav_btns">
                <div className="inline_element top_nav">
                    <div className="inline_element">
                        <NavLink to="/dashboard" className="nav_link">Dashboard</NavLink>
                    </div>

                    <div className="inline_element">
                        <NavLink to="/heatmap"  className="nav_link">Heatmap</NavLink>
                    </div>

                    <div className="inline_element">
                        <NavLink to="/recipes"  className="nav_link">Recipes</NavLink>
                    </div>

                    <div className="inline_element">
                        <NavLink to="/resources"  className="nav_link">Resources</NavLink>
                    </div>

                    <div className="inline_element">
                        <NavLink to="/contact"  className="nav_link">Contact</NavLink>
                    </div>
                </div>


                <div className="inline_element">
                    <div className="inline_element">
                        <NavLink to="/register" className="auth_btns register_btn">Register</NavLink>
                    </div>

                    <div className="inline_element">
                        <NavLink to="/login"  className="auth_btns login_btn">Login</NavLink>
                    </div>

                    {/* <div className="inline_element">
                        <NavLink to="/login"  className="auth_btns logout_btn">Logout</NavLink>
                    </div> */ }
                </div>
            </div>
        </div>
    </header>);
}

export default Header;