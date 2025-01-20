import { Helmet } from "react-helmet";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { MdLocalPostOffice, MdOutlinePostAdd } from "react-icons/md";

const DashBoard = () => {
    return (
        <div className="lg:flex pt-36 pl-7 gap-3 pb-5">
            <Helmet>
                <title>ThreadTales /\ DashBoard</title>
            </Helmet>
            <div>
                {/* DashBoard */}
                <div className="card card-compact bg-base-200 shadow-xl w-[350px] h-[500px]  bg-gradient-to-r from-yellow-500 to-yellow-400 ">

                    <div className="">
                        <h2 className=" text-center items-center text-2xl font-bold  pt-3">My DashBoard</h2>
                        <p className="border-b-2 border-dashed border-gray-400 pt-5"></p>
                        <div className="flex flex-col gap-y-3 pt-10 p-3">
                            <button type="submit" className="btn btn-outline border-0 border-b-4 border-t-4 text-black"><CgProfile />My Profile</button>
                            <button type="submit" className="btn btn-outline border-0 border-b-4 border-t-4 text-black"><MdOutlinePostAdd />Add Post</button>
                            <button type="submit" className="btn btn-outline border-0 border-b-4 border-t-4 text-black"><MdLocalPostOffice />My Post</button>
                            <button type="submit" className="btn btn-outline border-0 border-b-4 border-t-4 text-black"><IoHome />Home</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* d card */}
            <div className="pt-2">
                <div className="card card-compact  w-full h-[500px]  bg-black shadow-xl ">
                    <div className="p-3">
                        <h1 className="text-white font-extrabold text-2xl">Welcome to Your Dashboard</h1>
                        <p className="text-gray-400 pt-3">Here you can manage your profile, add new posts, and view your activity. Use the sidebar to navigate through different sections.</p>
                    </div>

                    <div className="pt-7 flex flex-col gap-4">
                        {/* 1 */}
                        <div className="card  w-96 shadow-xl ml-5 bg-green-400 hover:bg-green-500 hover:scale-105 transition-transform duration-300">
                            <div className="card-body">
                                <h1 className="text-xl font-semibold text-white">Profile</h1>
                                <p >View and update your profile information.</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="card  w-96 shadow-xl ml-5 lg:ml-[60px] bg-red-400 hover:bg-red-500 hover:scale-105 transition-transform duration-300">
                            <div className="card-body">
                                <h1 className="text-xl font-semibold text-white">Add Post</h1>
                                <p>Share your thoughts and ideas with the community.</p>
                            </div>

                        </div>
                        {/* 3 */}
                        <div className="card  w-96 shadow-xl ml-5 lg:ml-[100px] bg-blue-400 hover:bg-blue-500 hover:scale-105 transition-transform duration-300">
                            <div className="card-body">
                                <h1 className="text-xl font-semibold text-white">My Posts</h1>
                                <p>View and manage all the posts you have created.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;