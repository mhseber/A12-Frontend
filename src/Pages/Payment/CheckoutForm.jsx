import { CardElement } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
    return (
        <div>
            <form >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                >
                </CardElement>
                <button
                    className="btn btn-primary my-4 btn-sm"
                    type="submit"
                >
                    Pay
                </button>
                <p className="text-red-600"></p>

            </form>
        </div>
    );
};

export default CheckoutForm;