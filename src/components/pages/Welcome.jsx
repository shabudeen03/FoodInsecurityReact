import { NavLink } from "react-router";

import "../../assets/stylesheets/welcome.css";
import img_1 from "../../assets/images/welcome/img_1.png";
import img_2 from "../../assets/images/welcome/img_2.png";
import img_3 from "../../assets/images/welcome/img_3.png";
import feature_icon from "../../assets/images/welcome/feature_icon.png";

function Welcome() {
    const features_list = [
        {feature_title: "Find a Food Pantry", feature_content: "Locate nearby food pantries quickly with our easy-to-use tool, helping individuals and families access nutritious food when they need it most, in a matter of seconds."},
        {feature_title: "Inventory", feature_content: "View inventories of pantries local to you. This feature helps you find exactly what you need and ensures that donated items are utilized efficiently, improving access for everyone."},
        {feature_title: "Live Heatmap", feature_content: "Our real-time heatmap shows pantry locations and current activity, so you can make informed decisions about when and where to visit, reducing wait times by helping you plan your trip."},
        {feature_title: "AI Powered Recipes", feature_content: "Get creative with what’s available! Our AI-powered recipe generator suggests delicious, healthy meals based on the ingredients you have, minimizing waste and making the most of pantry items. Personalized for everyone!"},
        {feature_title: "News Updates", feature_content: "Stay up-to-date on food security initiatives, community events, and important changes in local pantry services.Keep yourself informed and connected to the latest developments in the fight against hunger."},
        {feature_title: "Resources", feature_content: "Access a variety of helpful resources, from nutrition guides to community support programs. With resources at your fingertips, this feature empowers individuals with information that enhances well-being and security."}
    ];

    const features_list_rendered = features_list.map((feature, index) => {
        return (
            <div key={index} className="feature_container">
                <div className="feature_panel"><img className="welcome_icon" src={feature_icon} /></div>
                <div className="feature_text">
                    <div className="feature_title">{feature.feature_title}</div>
                    <div className="feature_content">{feature.feature_content}</div>
                </div>
            </div>
        );
    });

    return (<div className="welcome_page_wrapper">
        <div>
            <h1>Welcome to Fi Security</h1>
            <p className="welcome_title_meta">We are a non-profit dealing with the problem of Food Insecurity in American households, providing ease of access and services to both food insecure households and organizations.</p>

            <div className="inline_element welcome_auth_btns">
                <NavLink to="/register">
                    <button className="register_btn">Register</button>
                </NavLink>
                <NavLink to="/login">
                    <button className="login_btn">Login</button>
                </NavLink>
            </div>

            <div className="welcome_images">
                <img className="welcome_image" src={img_1} />
                <img className="welcome_image" src={img_2} />
                <img className="welcome_image" src={img_3} />
            </div>
        </div>

        <div className="features">
            <div className="features_list_title"><h3>Features</h3></div>
            <p className="features_list_paragraph">We streamline the processes to help solve the problems and logistics of food insecurity.</p>
            <div className="feature_list"> {features_list_rendered}
            </div>
        </div>
    </div>);
}

export default Welcome;