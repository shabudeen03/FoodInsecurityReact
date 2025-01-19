import Input from "./Input.jsx";

function Username() {
    return(<div className="auth_form_username">
        <label className="auth_form_labels register_form_label_uname" style={{float: "left"}}>Username</label>
        <br />
        {/* <input className="auth_input" type="text" id="uname" name="uname" placeholder="enter your username" /> */}
        <Input cssClass="auth_input" inputId="uname" inputName="uname" inputPlaceholder="enter your username" />
    </div>);
}

export default Username;