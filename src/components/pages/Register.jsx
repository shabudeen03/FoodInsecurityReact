import "../../assets/stylesheets/authforms.css";

import Fullname from "../AuthComponents/Fullname";
import Username from "../AuthComponents/Username";
import Password from "../AuthComponents/Password";
import Submit from "../AuthComponents/Submit";

function Register() {
    return (<section>
        <div className="auth_text">
            <h1>Register</h1>
        </div>

        <div className="auth_form_wrapper">
            <form className="auth_form" method="GET">
                <Fullname />
                <div className="auth_form_cred_field">
                    <Username />
                    <Password type="regular" />
                    <Password type="again" />
                </div>
                <Submit />
            </form>
        </div>
    </section>);
}

export default Register;