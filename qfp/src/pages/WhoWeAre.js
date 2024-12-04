import React from "react";
import who from "../assets/who.png";
import purpose from "../assets/purpose.png";
import company from "../assets/company.png";
import facts from "../assets/facts.png";
import heritage from "../assets/heritage.png";
import leadership from "../assets/leadership.png";
import strategy from "../assets/strategy.png";
import values from "../assets/values.png";

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
                <div className="absolute left-16 sm:left-32 p-8 rounded-lg max-w-lg sm:max-w-xl bg-opacity-80 bg-gray-800">
                    <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
                </div>
            </div>

            {/* Description Section */}
            <div className="px-10 py-20 text-left">
                <h2 className="text-3xl font-bold mb-4">Tetra Pak: Protects What's Good</h2>
                <p className="text-gray-600 max-w-3xl mb-10">
                    We are committed to providing access to safe, nutritious food for hundreds of millions of people
                    around the world, in a way that protects our planet. It is why we were created, and why we still
                    exist today. And it is also why all our decisions are underpinned by our promise to protect what’s
                    good. For us this means protecting food, protecting people, and protecting our planet.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 ">
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};


const Card = ({ title, text, link, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200">
            <img src={image} alt={title} className="rounded-t-lg w-full h-40 object-cover mb-4" />
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{text}</p>
            <a href={link} className="text-blue-500 hover:underline">
                Learn more
            </a>
        </div>
    );
};

const cardData = [
    {
        title: "Our purpose",
        text: "",
        link: "/about/who-we-are/purpose",
        image: purpose,
    },
    {
        title: "Our company",
        text: "",
        link: "/about/who-we-are/company",
        image: company,
    },
    {
        title: "Facts & Figures",
        text: "",
        link: "/about/who-we-are/facts",
        image: facts,
    },
    {
        title: "Our heritage",
        text: "",
        link: "/about/who-we-are/heritage",
        image: heritage,
    },
    {
        title: "Our leadership",
        text: "",
        link: "/about/who-we-are/leadership",
        image: leadership,
    },
    {
        title: "Our strategy",
        text: "",
        link: "/about/who-we-are/strategy",
        image: strategy,
    },
    {
        title: "Our values",
        text: "",
        link: "/about/who-we-are/values",
        image: values,
    },
];

export default Who;
