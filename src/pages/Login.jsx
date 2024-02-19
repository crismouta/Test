
import { useState } from "react";
import { AuthService } from '../services/AuthService';


function FormLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const authApi = AuthService();

    const handleSubmit = (e) => {
        e.preventDefault();

        authApi.postLogin(username, password).then(res => {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_user', res.data.user.name);
            setMessage(res.data.msg);
        }).catch(error => {
            console.log(error)
            setError(error);
        });
        setError('');

    };

    return (
        <>
            <div className="col-md-12">
                <div className="card card-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={onChangeUsername}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={onChangePassword}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block" >
                                <span>Login</span>
                            </button>
                        </div>
                        {message && <div className="alert alert-success">{message}</div>}
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormLogin