import { useState } from 'react'
import LayoutAuth from '../../../layouts/auth/Index'
import FromLogin from '../../../form/login/Index'
import '../login/Login.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Username:', username);
        console.log('Password:', password);
        try {
            const response = await fetch('http://127.0.0.1:9010/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Login successful');
                // direct ke homepage
            } else {

                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while logging in.');
        }
    };


    return (
        <LayoutAuth>
            <div>
                <h2 class="login-title">Login</h2>
                <h6>welcome back, please login</h6>
                <h6 class="gapform">to your account</h6>

                <FromLogin
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                />

                <div >
                    <div className="form-check">
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember Password
                            </label>
                        </div>
                        <div>
                            <a href="">Forgot password</a>
                        </div>
                    </div>
                    <div >
                        <button className="submitlogin" onClick={handleLogin}>Login</button>
                        <button className="submitsignUp" onClick={() => { }}>SignUp</button>
                    </div>
                    <div >
                        <h6 className="policytext1">By Signing up, you agree to Book's</h6>
                        <h6 className="policytext2">Term and Conditions & Privacy Policy</h6>
                    </div>
                </div>
            </div>
        </LayoutAuth>
    );
}

export default Login