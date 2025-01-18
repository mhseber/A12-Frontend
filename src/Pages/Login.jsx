import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import bgImg from "../assets/bg img.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successful.",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            });
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    };

    return (
        <>
            <Helmet>
                <title>ThreadTales /\ Sign In</title>
            </Helmet>
            <div>
                <div
                    style={{ backgroundImage: `url(${bgImg})` }}
                    className="hero bg-base-200 pt-28 bg-cover bg-center">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card bg-base-100 md:1/2 max-w-sm shadow-2xl">
                            <form
                                onSubmit={handleLogin}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input
                                        // onBlur={handleValidateCaptcha}
                                        onBlur={handleValidateCaptcha}

                                        type="text"
                                        name="captcha"
                                        placeholder="type the text captcha above"
                                        className="input input-bordered" required />


                                </div>
                                <div className="form-control mt-6">
                                    {/* TODO: apply disabled for re captcha */}
                                    <input
                                        disabled={disabled}
                                        className="btn bg-yellow-700 text-white"
                                        type="submit"
                                        value="LogIn" />
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn bg-black yellow-700 text-white" ><FcGoogle />SignUp Google</button>
                                </div>
                            </form>
                            <p className="px-3 text-center pb-3"><small>New Here?<Link to="/signup"><i className="text-blue-800">Create an Account</i></Link></small></p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;