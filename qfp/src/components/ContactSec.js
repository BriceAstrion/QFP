import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/img.png";
import Button from "./Button";

const ContactSec = () => {
    return (
        <div
            className="relative p-10 text-white  overflow-hidden h-[485px] flex items-center"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                <h1 className="text-3xl font-bold">Contact Quantum Food Preservation</h1>
                <p className="mt-6 text-md leading-relaxed">
                    Any questions or queries about our company, our product and solution offerings, career opportunities,
                    or our sustainability approach? We are happy to answer your questions – please feel free to reach out.
                    We appreciate it!
                </p>
                <Link to="/contact-us">
                    <button className="mt-6 bg-white text-xl text-bold text-blue-700 py-3 px-6 rounded-lg
                    hover:bg-green-300 transition duration-300">
                        Contact us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactSec;
