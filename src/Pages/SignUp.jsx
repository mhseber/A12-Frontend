import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import bgImg from "../assets/bg img.png"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";




const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            });
    };


    return (
        <>
            <Helmet>
                <title>ThreadTales /\ SignUp</title>
            </Helmet>
            <div>
                <div
                    style={{ backgroundImage: `url(${bgImg})` }}
                    className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">name is required</span>}
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
                                        {...register("email", { required: true })}
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register("password")}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-primary"
                                        type="submit" value="Sign  Up" />
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-primary"
                                        type="submit" value=" SignUp Google" />
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