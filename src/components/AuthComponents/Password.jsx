import Input from "./Input.jsx";

function Password({ type }) {
    let text = "Password";
    if(type === "again") text = "Re-enter Password";

    return (<div>
        <label className="auth_form_labels" style={{float: "left"}}>{text}</label>
        <br />
        {/* <input className="auth_input" type="text" id="passwd" name="passwd" /> */}
        <Input cssClass="auth_input" inputId="passwd" inputName="passwd" />
    </div>);
}

export default Password;