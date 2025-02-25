import { FaRegComments } from "react-icons/fa";
import usePost from "../Hooks/usePost";
import { MdHowToVote } from "react-icons/md";
import Swal from "sweetalert2";


const AllLatestPosts = () => {
    const [post, loading] = usePost();

    const timeAgo = (date) => {
        const now = new Date();
        const postDate = new Date(date);
        const diffInSeconds = Math.floor((now - postDate) / 1000);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} seconds ago`;
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} day${days > 1 ? "s" : ""} ago`;
        }
    };

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }
    return (
        <div className="p-5">
            <h1 className="flex items-center text-4xl font-extrabold pb-5">

                Latest Post
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 ">
                {post.map((item) => (
                    <div key={item.id} className="card bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-xl">
                        <div className=" card-body text-black">
                            {/* Announcement Title */}
                            <div className="">
                                <h2 className="card-title font-bold lg:pl-32">{item.title}</h2>
                                <div className="lg:pl-32 pt-5 space-x-3 space-y-2 ">
                                    <button className="btn text-blue-800 rounded-2xl hover:bg-blue-600">Gaming</button>
                                    <button className="btn text-blue-800 rounded-2xl hover:bg-blue-600">Trending Topics</button>
                                    <button className="btn text-blue-800 rounded-2xl hover:bg-blue-600">Online Learning</button>
                                    <button className="btn text-blue-800 rounded-2xl hover:bg-blue-600">FAQs</button>
                                </div>
                                <div className=" lg:flex pl-32  pt-10 space-y-5 ">
                                    <p className="text-gray-800">  Posted :{timeAgo(item.date)}</p>
                                    <p
                                        className="flex text-gray-800 gap-2 cursor-pointer"
                                        onClick={() => Swal.fire({
                                            title: `Comments for ${item.title}`,
                                            text: item.comments || "Very Good Keep Trying",
                                            imageUrl: item.img || "https://unsplash.it/400/200",
                                            imageWidth: 400,
                                            imageHeight: 200,
                                            imageAlt: item.title
                                        })}
                                    >
                                        <FaRegComments className="text-2xl" /> Comments
                                    </p>
                                    <p
                                        className="flex text-gray-800 gap-2 cursor-pointer"
                                        onClick={() =>
                                            Swal.fire({
                                                title: "Votes Count",
                                                text: `This post has ${item.votes || 0} votes.`,
                                                showClass: {
                                                    popup: `
                                                            animate__animated
                                                            animate__fadeInUp
                                                            animate__faster
                                                         `,
                                                },
                                                hideClass: {
                                                    popup: `
                                                            animate__animated
                                                            animate__fadeOutDown
                                                                animate__faster
                                                        `,
                                                },
                                            })
                                        }
                                    >
                                        <MdHowToVote className="text-2xl" /> Votes
                                    </p>
                                </div>
                            </div>
                            <div>
                                {/* Image and Name */}
                                <div className="flex items-center gap-3 py-3">
                                    {item.img && (
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full border-2 border-white"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllLatestPosts;