import Input from "./Input.jsx";

import { NavLink } from "react-router";

function Submit() {
    return (<div>
        {/* <button className="cancel_btn auth_input" onClick={() => pageChangeHandler(0)}>Cancel</button> */}
        <NavLink to="/">
            <button className="cancel_btn auth_input">Cancel</button>
        </NavLink>
        
        <Input cssClass="submit_btn auth_input" inputType="submit" inputValue="Submit" />
    </div>);
}

export default Submit;