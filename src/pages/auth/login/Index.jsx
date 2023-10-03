import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LayoutAuth from '../../../layouts/auth/Index'
// import FromLogin from '../../../form/login/Index'
import Form from 'react-bootstrap/Form';
import '../login/Login.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    // const [login, setlogin] = useState({
    //     username: '',
    //     password:"", 
    // });
    const navigateTo = useNavigate();
    // const routeDetail = () => {
    // navigateTo(`/`);};
    const navigateregis = useNavigate();
    const routetoRegister = () => {
        navigateregis(`/register`);};


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
            // console.log('1');
            const data = await response.json();
            console.log(data);
            if (data.success) {
                console.log('Login successful');
                // direct ke homepage
                // routeDetail;
                //set local storages
                navigateTo(`/`);
                localStorage.setItem("username", username)
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
                <h2 className="login-title">Login</h2>
                <h6 className="gapform">welcome back, please login</h6>
                <h6 className="gapform">to your account</h6>

                {/* <FromLogin
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                /> */}

                <Form>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label className='label'>Username</Form.Label>
                        <Form.Control type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        ></Form.Control>
                        {/* <Form.Control as="textarea" rows={3} /> */}
                    </Form.Group>
                </Form>

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
                        <button className="submitsignUp" onClick={routetoRegister}>SignUp</button>
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