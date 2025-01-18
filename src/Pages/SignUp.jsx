import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import bgImg from "../assets/bg img.png"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";




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
                    className="hero bg-base-200 pt-28 ">
                    <div className="hero-content flex-col lg:flex-row-reverse ">

                        <div className="card bg-base-100 w-[400px]  shadow-2xl">
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
                                        className="btn  bg-yellow-700 text-white"
                                        type="submit" value="Sign  Up" />
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn bg-black yellow-700 text-white" ><FcGoogle />SignUp Google</button>
                                </div>
                            </form>
                            <p className="px-3 text-center pb-3"><small>Already have an Account <Link to="/login"><i className="font-bold text-yellow-700 pl-4 ">Login Now</i></Link></small></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;