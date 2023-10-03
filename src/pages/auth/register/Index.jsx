import {useState} from 'react'
import FormRegister from '../../../form/register/Index';
import LayoutAuth from '../../../layouts/auth/Index'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Register = () => {

    const navigateTo = useNavigate();
    const routetoLogin = () => {
    navigateTo(`/login`);};

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    
    const navigateregis = useNavigate();
    const routetoRegister = () => {
        navigateregis(`/`);};


    const hadleRegister = async () => {
        console.log('Username:', username);
        console.log('Password:', password);
    
        try {
            const response = await fetch('http://127.0.0.1:9010/users', {
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
                <h2 className="login-title">Register</h2>
                <h6>welcome back, please register</h6>
                <h6 className="gapform"> your account</h6>
                <Form>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
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
                        <button className="submitsignUp" onClick={hadleRegister}>SignUp</button>
                        <button className="submitlogin" onClick={routetoLogin }>Login</button>
                    </div>
                    <div >
                        <h6 className="policytext1">By Signing up, you agree to Book's</h6>
                        <h6 className="policytext2">Term and Conditions & Privacy Policy</h6>
                    </div>
            </div>
            
        </LayoutAuth>
    );
}

export default Register