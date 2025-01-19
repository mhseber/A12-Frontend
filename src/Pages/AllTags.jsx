import { FaTags } from "react-icons/fa";

const AllTags = () => {
    return (
        <div>
            <h1 className="flex text-4xl font-extrabold pt-5 pl-5"><FaTags />All Tags</h1>
            <div className=" pb-5">
                <div className="lg:flex gap-2 lg:pl-9 lg:pt-9 pl-4 pt-2 space-y-2 lg:space-y-0">
                    <button className="btn btn-neutral w-28 rounded-full">General Discussion</button>
                    <button className="btn btn-neutral w-28 rounded-full">FAQs</button>
                    <button className="btn btn-neutral w-28 rounded-full">Photography</button>
                    <button className="btn btn-neutral w-28 rounded-full">Gaming</button>
                </div>
                <div className="lg:flex gap-2 lg:pl-9 lg:pt-9 pl-4 pt-2 space-y-2 lg:space-y-0">
                    <button className="btn btn-neutral w-28 rounded-full">Online Learning</button>
                    <button className="btn btn-neutral w-28 rounded-full">Freelancing</button>
                    <button className="btn btn-neutral w-28 rounded-full">Trending Topics</button>
                    <button className="btn btn-neutral w-28 rounded-full">DevOps</button>
                </div>
                <div className="lg:flex gap-2 lg:pl-9 lg:pt-9 pl-4 pt-2 space-y-2 lg:space-y-0">
                    <button className="btn btn-neutral w-28 rounded-full">Q&A</button>
                    <button className="btn btn-neutral w-28 rounded-full">UI/UX Design</button>
                    <button className="btn btn-neutral w-28 rounded-full">Programming</button>
                    <button className="btn btn-neutral w-28 rounded-full">Career Advice</button>
                </div>
            </div>
        </div>
    );
};

export default AllTags;