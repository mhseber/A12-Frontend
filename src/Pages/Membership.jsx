
const Membership = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="pt-20">
                <div className="hero bg-gradient-to-r from-yellow-600 to-yellow-400 text-white p-7">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Complete Your Payment</h1>
                            <p className="py-6">
                                For a one-time payment of $99, you can post more than 5 posts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Form */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="card bg-blue-500 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold">Payment Details</h2>

                        {/* Name on Card */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Name on Card</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-primary w-full"
                            />
                        </div>

                        {/* Card Details */}
                        <div className="form-control">
                            <label className="label pt-5">
                                <span className="label-text text-white font-bold">Card Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="1234 5678 9123 4567"
                                className="input input-bordered input-primary w-full"
                            />
                            <div className="flex gap-3 pt-5">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">Expiry Date</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="input input-bordered input-primary w-full"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">CVC</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="input input-bordered input-primary w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="form-control">
                            <label className="label pt-5">
                                <span className="label-text text-white font-bold">Email Address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered input-primary w-full"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="card-actions justify-center pt-5">
                            <button className="btn btn-primary w-full text-white font-bold">
                                <i>Pay Now</i>
                            </button>
                        </div>
                        <p className="text-xs text-white pt-3 text-center">
                            Your payment information is encrypted and processed securely. We do not store your card details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;