
const Banner = () => {

    return (
        <div>
            <div className="hero bg-gradient-to-r from-[#7886C7] to-blue-950 text-white pt-28">
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
                        <div>
                            <h2 className="pr-80 pt-4 text-[15px] ">Popular Topics : </h2>
                            <div className="pt-3 space-x-4">
                                <button
                                    className="btn btn-outline btn-primary"

                                >
                                    Gaming
                                </button>
                                <button
                                    className="btn btn-outline btn-primary"

                                >
                                    Freelancing
                                </button>
                                <button
                                    className="btn btn-outline btn-primary"

                                >
                                    Photography
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;