import "../../assets/stylesheets/authforms.css";

import Username from "../AuthComponents/Username";
import Password from "../AuthComponents/Password";
import Submit from "../AuthComponents/Submit";

function Login() {
    return (<section>
        <div className="auth_text">
            <h1>Login</h1>
        </div>

        <div className="auth_form_wrapper">
            <form className="auth_form" method="GET">
                <div className="auth_form_cred_field">
                    <Username />
                    <Password type="regular" />
                </div>
                <Submit />
            </form>
        </div>
    </section>);
}

export default Login;