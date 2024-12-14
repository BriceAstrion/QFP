import React from "react";
import { Link } from "react-router-dom";
import who from "../assets/who.png";
import purpose from "../assets/purpose.png";
import company from "../assets/company.png";
import facts from "../assets/facts.png";
import leadership from "../assets/leadership.png";

const Who = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex items-center"
                style={{
                    backgroundImage: `url(${who})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className="absolute left-16 sm:left-32 p-8 rounded-lg max-w-lg sm:max-w-xl bg-opacity-80 bg-gray-800"
                >
                    <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
                </div>
            </div>

            {/* Description Section */}
            <div className="ml-40 px-10 py-10 text-left">
                <h2 className="text-3xl font-bold text-black mb-4">
                    Quantum Food Preservation:{" "}
                    <span className="text-black">Preserving the Taste <br/> of Tomorrow,
                        Enhancing Nature’s Freshness!</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mb-6">
                    At Quantum Food Preservation, we are passionate about revolutionizing the way food is stored and
                    preserved. Our innovative technology harnesses the principles of quantum science to extend the shelf
                    life of perishable foods, ensuring that freshness and flavour are never compromised. Committed to
                    sustainability and health, we strive to minimize food waste while maximizing nutritional quality,
                    empowering individuals and communities to make smarter food choices. Join us on a journey to protect
                    what’s good for our plates and our planet.
                </p>
            </div>

            {/* Cards Section Title */}
            <div className="ml-40 px-10 py-4 text-left">
                <h2 className="text-3xl font-bold text-black mb-4">Get To Know Us!</h2>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center items-center px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-xl border-r border-gray-300">
                    {cardData.map((card, index) => (
                        <Card key={index} {...card} isLast={index === cardData.length - 1} />
                    ))}
                </div>
            </div>

            {/* Footer Space */}
            <div className="py-8"></div>
        </div>
    );
};

const Card = ({ title, text, link, image, isLast }) => {
    return (
        <div
            className={`bg-white p-5 hover:shadow-lg transition-shadow duration-200 ${
                isLast ? "" : "border-r border-gray-300"
            }`}
        >
            <Link to={link}>
                <img
                    src={image}
                    alt={title}
                    className="rounded-t-lg w-full h-40 object-cover mb-4"
                />
            </Link>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{text}</p>
            <Link to={link} className="text-blue-500 hover:underline">
                Learn more
            </Link>
        </div>
    );
};

const cardData = [
    {
        title: "Our purpose",
        text: "Discover our purpose.",
        link: "/about/who-we-are/purpose",
        image: purpose,
    },
    {
        title: "Our company",
        text: "Learn more about us.",
        link: "/about/who-we-are/company",
        image: company,
    },
    {
        title: "Facts & Figures",
        text: "Explore our key facts.",
        link: "/about/who-we-are/facts",
        image: facts,
    },
    {
        title: "Our leadership",
        text: "Meet our leadership team.",
        link: "/about/who-we-are/leadership",
        image: leadership,
    },
];

export default Who;
