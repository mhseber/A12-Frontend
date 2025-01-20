
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white ">
            <div className="container mx-auto py-10 px-4">
                {/* Footer Top */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1: Branding */}
                    <div>
                        <h3 className="text-lg font-bold">ThreadTales</h3>
                        <p className="text-sm mt-2">
                            Building conversations, one thread at a time.
                        </p>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div>
                        <h4 className="text-md font-semibold">Quick Links</h4>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="link link-hover">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/membership" className="link link-hover">
                                    Membership
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard" className="link link-hover">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="link link-hover">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h4 className="text-md font-semibold">Follow Us</h4>
                        <div className="mt-2 flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-500"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-400"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-600"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
                    <p>© {new Date().getFullYear()} ThreadTales. All rights reserved.</p>
                    <p>
                        <a href="/privacy-policy" className="link link-hover">
                            Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href="/terms" className="link link-hover">
                            Terms & Conditions
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;