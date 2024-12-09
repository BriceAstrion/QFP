import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/img.png";
import business from "../assets/business.png";
import careers from "../assets/careers.png";
import suppliers from "../assets/supplier.png";
import contactpress from "../assets/contact-press.png";
import company from "../assets/company.png";

const ContactUs = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[485px] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                    <h4 className="text-3xl font-bold">How can we help you?</h4>
                    <p className="mt-2 text-md leading-relaxed">
                        We are happy to answer your questions – please feel free to reach out!
                    </p>
                </div>
            </div>

            {/* Contact Options Section */}
            <div className="container mx-auto px-6 py-10">
                {/* First Section (Business and Careers) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Business Inquiries */}
                    <div className="bg-white rounded-lg shadow-lg max-w-[600px] mx-auto overflow-hidden">
                        <div className="relative">
                            <img
                                src={business}
                                alt="Business Icon"
                                className="w-full h-[350px] object-cover"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h5 className="text-lg font-bold">Business Inquiries</h5>
                            <p className="text-sm text-gray-600 mt-2">
                                Have questions about our solutions or need expert advice? Our friendly team is here
                                to help! Fill out the form, and we'll get back to you as soon as possible.
                            </p>
                            <a href="#business" className="text-blue-600 mt-4 block font-semibold">
                                Get in Touch Today!
                            </a>
                        </div>
                    </div>

                    {/* Careers */}
                    <div className="bg-white rounded-lg shadow-lg max-w-[600px] mx-auto overflow-hidden">
                        <div className="relative">
                            <img
                                src={careers}
                                alt="Careers Icon"
                                className="w-full h-[350px] object-cover"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h5 className="text-lg font-bold">Careers</h5>
                            <p className="text-sm text-gray-600 mt-2">
                                Food is essential to us all. And you can play a role in helping improve access to safe,
                                nutritious food for everyone, everywhere.
                            </p>
                            <a href="#careers" className="text-blue-600 mt-4 block font-semibold">
                                Learn more about QFP careers
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second Section (Suppliers, Press, Contact) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Suppliers */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <a href="#suppliers">
                            <img
                                src={suppliers}
                                alt="Suppliers Icon"
                                className="w-full h-[180px] object-cover"
                            />
                        </a>
                        <div className="p-6 text-left">
                            <h5 className="text-lg font-bold">Get To Know Our Suppliers</h5>
                            <p className="text-sm text-gray-600 mt-2">
                                Our supplier partners play a fundamental role in making a positive impact along our
                                value chain
                                and meeting our customers’ expectations.
                            </p>
                            <a href="#suppliers" className="text-blue-600 mt-4 block font-semibold">
                                Learn more
                            </a>
                        </div>
                    </div>

                    {/* Contact Press and Media */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Link to="/contact-us/press-and-media">
                            <img
                                src={contactpress}
                                alt="Press Icon"
                                className="w-full h-[180px] object-cover"
                            />
                        </Link>
                        <div className="p-6 text-left">
                            <h5 className="text-lg font-bold">Contact Press & Media</h5>
                            <p className="text-sm text-gray-600 mt-2">
                                If you are a media representative, please contact our Press & Media team using the
                                contact details below to make your specific enquiry.
                            </p>
                            <Link to="/contact-us/press-and-media" className="text-blue-600 mt-4 block font-semibold">
                                Contact Press & Media
                            </Link>
                        </div>
                    </div>

                    {/* Contact QFP */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Link to="/contact-us/contact-qfp">
                            <img
                                src={company}
                                alt="Contact Icon"
                                className="w-full h-[180px] object-cover"
                            />
                        </Link>
                        <div className="p-6 text-left">
                            <h5 className="text-lg font-bold">Contact QFP</h5>
                            <p className="text-sm text-gray-600 mt-2">
                                Contact page for any general questions about our company, our sustainability approach,
                                or how to get in touch.
                            </p>
                            <Link to="/contact-us/contact-qfp" className="text-blue-600 mt-4 block font-semibold">
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
