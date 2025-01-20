import { IoNotificationsSharp } from "react-icons/io5";
import useAnno from "../Hooks/useAnno";

const Announcements = () => {
    const [anno, loading] = useAnno();

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    return (
        <div className="p-5">
            <h1 className="flex items-center text-4xl font-extrabold pb-5">
                <IoNotificationsSharp className="mr-2" />
                Announcements
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 ">
                {anno.map((item) => (
                    <div key={item.id} className="card bg-gradient-to-r from-yellow-200 to-yellow-100 text-white shadow-xl">
                        <div className="card-body text-black">
                            {/* Announcement Title */}
                            <div className="flex space-x-4">
                                <h2 className="card-title font-bold">{item.title}</h2>
                                <button className="btn bg-black rounded-full text-white">New</button>
                            </div>
                            {/* Announcement Description */}
                            <p>{item.description}</p>

                            <div className="flex">
                                {/* Image and Name */}
                                <div className="flex items-center gap-3 py-3">
                                    {item.img && (
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full border-2 border-white"
                                        />
                                    )}
                                    <p className="font-bold">{item.name}</p>
                                </div>

                                {/* Date */}
                                <p className="text-sm italic text-gray-700 pt-9 pl-8">
                                    Posted on: {new Date(item.date).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;