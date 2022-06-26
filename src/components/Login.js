import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { doCustomerLogin } from '../store/actions/AuthenticationAction';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loggedInUser = useSelector(state => state.authenticationReducer.loggedInUser)

    const dispatch = useDispatch();   
    const navigate = useNavigate(); 

    const doLogin = () => {
        const payload = {
            userName: username,
            password: password
        }
        dispatch(doCustomerLogin(payload))
    }


    return (
        <div className="container">
            {
                loggedInUser !== null ?
                    navigate("/customer/dashboard")
                    :
                    <div>
                        <h3>sign in</h3>
                        
                        <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={e => setUsername(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                        </div>

                        <div>
                            <button onClick={doLogin} className="btn btn-primary">Login</button>
                        </div>

                    </div>
            }

        </div>
    )
}

export default Login;