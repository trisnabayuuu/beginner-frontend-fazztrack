import React from 'react'
import LayoutAuth from '../../../layouts/auth/Index'
import FromLogin from '../../../form/login/Index'
import '../login/Login.css'

const Login = () => {
    return (
        <LayoutAuth>
            <div>
                <h2 class="login-title">Login</h2>
                <h6>welcome back, please login</h6>
                <h6 class="gapform">to your account</h6>

                <FromLogin />

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
                        <button className="submitlogin" onClick={() => { }}>Login</button>
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