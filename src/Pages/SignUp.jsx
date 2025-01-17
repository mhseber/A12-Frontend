import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>ThreadTales /\ SignUp</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form
                                // onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"

                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"


                                        placeholder="Photo URL"
                                        className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"

                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"

                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered" />

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-primary"
                                        type="submit" value="Sign  Up" />
                                </div>
                            </form>
                            <p className="px-6"><small>Already have an Account <Link to="/login">Login Now</Link></small></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;