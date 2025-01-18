
const Banner = () => {
    return (
        <div>
            <div className="hero bg-gradient-to-r from-yellow-600 to-yellow-400 text-white pt-28">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Find Your Topics </h1>
                        <div className="flex gap-2 mt-10">
                            <input
                                type="text"
                                placeholder="Search Posted By...."
                                className="input input-bordered input-warning w-[700px] text-black" />
                            <button className="btn btn-outline border-0 border-b-4 border-t-4 text-black">Search</button>
                        </div>
                        <h2 className="pr-80 pt-4 text-[15px]">Popular Topics :</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;