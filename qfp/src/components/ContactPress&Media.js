import React, { useEffect, useState } from "react";
import pressmedia from "../assets/contact-press.png";
import contactData from "../data/pressandmedia.json";
import newsroomImage from "../assets/newsroom.png";

const PressMedia = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(contactData);
    }, []);

    const handleEmailClick = (email) => {
        const subject = encodeURIComponent("Inquiry");
        const body = encodeURIComponent("Hello, I have a question regarding...");
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[500px] flex items-center"
                style={{
                    backgroundImage: `url(${pressmedia})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute left-16 sm:left-32 p-8 rounded-lg max-w-lg sm:max-w-xl bg-opacity-80 bg-gray-800">
                    <h4 className="text-lg font-bold mb-2">CONTACT</h4>
                    <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
                    <p className="mt-2 text-lg leading-relaxed">
                        For press and media related questions, find your relevant PR contact person below.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center py-6">
                <div className="w-full max-w-[300mm] p-8 bg-transparent">
                    <h2 className="text-3xl text-gray-600 font-bold mt-2 mb-6">Contacts</h2>
                    <div className="flex">
                        <div className="w-1/2 pr-6">
                            {contacts.slice(0, 2).map((contact) => (
                                <div key={contact.email} className="mb-6">
                                    <h3 className="text-xl font-semibold">{contact.name}</h3>
                                    <p className="text-gray-700 mt-3">{contact.title}</p>
                                    <button
                                        onClick={() => handleEmailClick(contact.email)}
                                        className="text-blue-500 mt-2 hover:underline">
                                        Email {contact.name} &gt;
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Vertical Line Divider */}
                        <div className="border-l border-gray-300 mx-4"></div>

                        {/* Right side */}
                        <div className="w-1/2 pl-6">
                            {contacts.slice(2).map((contact) => (
                                <div key={contact.email} className="mb-6">
                                    <h3 className="text-xl font-semibold">{contact.name}</h3>
                                    <p className="text-gray-700 mt-3">{contact.title}</p>
                                    <button
                                        onClick={() => handleEmailClick(contact.email)}
                                        className="text-blue-500 mt-2 hover:underline">
                                        Email {contact.name} &gt;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsroom Section */}
            <div className="flex justify-center items-center py-6 bg-gray-100">
                <div className="w-full max-w-[300mm] bg-white p-8 shadow-lg flex">
                    <div className="w-1/2 pr-6">
                        <h2 className="text-3xl text-gray-600 font-bold mt-2 mb-6">Newsroom</h2>
                        <p className="text-lg text-gray-700">
                            The Tetra Pak Newsroom contains all our news & press releases as well as links to our
                            trends,
                            research and insights.
                        </p>
                        <button
                            onClick={() => window.location.href = "/newsroom"}
                            className="text-blue-500 mt-4 hover:underline">
                            Visit Newsroom &gt;
                        </button>
                    </div>

                    {/* Right Side (Newsroom Image) */}
                    <div className="w-1/2 pl-6">
                        <img src={newsroomImage} alt="Newsroom" className="w-full h-auto"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressMedia;
