import { Helmet } from "react-helmet";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdLocalPostOffice, MdOutlinePostAdd } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

// Import Components
import MyProfile from "../Pages/MyProfile";
import AddPost from "../Pages/AddPost";
import MyPost from "../Pages/MyPost";

const DashBoard = () => {
    const [activeComponent, setActiveComponent] = useState("Welcome");

    return (
        <div className="lg:flex pt-36 pl-7 gap-3 pb-5">
            <Helmet>
                <title>ThreadTales /\ DashBoard</title>
            </Helmet>

            {/* Sidebar */}
            <div>
                <div className="card card-compact bg-base-200 shadow-xl w-[350px] h-[500px] bg-gradient-to-r from-yellow-500 to-yellow-400">
                    <h2 className="text-center text-2xl font-bold pt-3">My DashBoard</h2>
                    <p className="border-b-2 border-dashed border-gray-400 pt-5"></p>
                    <div className="flex flex-col gap-y-3 pt-10 p-3">
                        <button onClick={() => setActiveComponent("MyProfile")} className="btn btn-outline border-0 border-b-4 border-t-4 text-black">
                            <CgProfile /> My Profile
                        </button>
                        <button onClick={() => setActiveComponent("AddPost")} className="btn btn-outline border-0 border-b-4 border-t-4 text-black">
                            <MdOutlinePostAdd /> Add Post
                        </button>
                        <button onClick={() => setActiveComponent("MyPost")} className="btn btn-outline border-0 border-b-4 border-t-4 text-black">
                            <MdLocalPostOffice /> My Post
                        </button>
                        <Link to="/"><button type="submit" className="btn btn-outline w-full border-0 border-b-4 border-t-4 text-black"><IoHome />Home</button></Link>
                    </div>
                </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="pt-2 flex-1">
                <div className="card card-compact bg-black shadow-xl p-5">
                    {activeComponent === "Welcome" && (
                        <div>
                            <h1 className="text-white font-extrabold text-2xl">Welcome to Your Dashboard</h1>
                            <p className="text-gray-400 pt-3">Here you can manage your profile, add new posts, and view your activity. Use the sidebar to navigate through different sections.</p>
                            <div className="pt-7 flex flex-col gap-4">
                                <div className="card w-96 shadow-xl ml-5 bg-green-400 hover:bg-green-500 hover:scale-105 transition-transform duration-300">
                                    <div className="card-body">
                                        <h1 className="text-xl font-semibold text-white">Profile</h1>
                                        <p>View and update your profile information.</p>
                                    </div>
                                </div>
                                <div className="card w-96 shadow-xl ml-5 lg:ml-[60px] bg-red-400 hover:bg-red-500 hover:scale-105 transition-transform duration-300">
                                    <div className="card-body">
                                        <h1 className="text-xl font-semibold text-white">Add Post</h1>
                                        <p>Share your thoughts and ideas with the community.</p>
                                    </div>
                                </div>
                                <div className="card w-96 shadow-xl ml-5 lg:ml-[100px] bg-blue-400 hover:bg-blue-500 hover:scale-105 transition-transform duration-300">
                                    <div className="card-body">
                                        <h1 className="text-xl font-semibold text-white">My Posts</h1>
                                        <p>View and manage all the posts you have created.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeComponent === "MyProfile" && <MyProfile />}
                    {activeComponent === "AddPost" && <AddPost />}
                    {activeComponent === "MyPost" && <MyPost />}
                </div>
            </div>
        </div>
    );
};

export default DashBoard;

