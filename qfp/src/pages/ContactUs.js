import React from "react";
import bg from "../assets/img.png";

const ContactUs = () => {
    return (
        <div
            className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[485px] flex items-center"
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
    );
};

export default ContactUs;
