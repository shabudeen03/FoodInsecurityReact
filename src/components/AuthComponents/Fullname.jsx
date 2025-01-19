import Input from "./Input.jsx";

function Fullname() {
    return (<div className="register_form_names">
        <div className="register_form_name" style={{paddingRight: "20px"}}>
            <label className="auth_form_labels">First Name: </label>
            <br />
            {/* <input className="auth_input" type="text" id="fname" name="fname" placeholder="first name..." /> */}
            <Input cssClass="auth_input" inputId="fname" inputName="fname" inputPlaceholder="first name..." />
        </div>
    
        <div className="register_form_name" style={{paddingLeft: "20px"}}>
            <label className="auth_form_labels">Last Name: </label>
            <br />
            {/* <input className="auth_input" type="text" id="lname" name="lname" placeholder="last name..." /> */}
            <Input cssClass="auth_input" inputId="lname" inputName="lname" inputPlaceholder="last name..." />
        </div>
    </div>);
}

export default Fullname;