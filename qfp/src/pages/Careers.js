import React from "react";
import { Link } from "react-router-dom";
import careers from "../assets/careers.jpg";
import connect from "../assets/connect.png";

const Careers = () => {
    return (
        <div>
            {/* Careers Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[500px] flex items-center"
                style={{
                    backgroundImage: `url(${careers})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                    <h1 className="text-3xl font-bold">Careers</h1>
                    <p className="mt-6 text-md leading-relaxed">
                        Whether you're an experienced professional or just starting your career, your ideas are welcomed
                        here. Join us and make an impact to be proud of - for food, people, and the planet.
                    </p>
                </div>
            </div>

            {/* Connected by Purpose Section */}
            <div
                className="relative mt-10 h-[500px] max-w-7xl mx-auto overflow-hidden flex items-center"
                style={{
                    backgroundImage: `url(${connect})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start">
                    <div
                        className="p-10 max-w-xl ml-10"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                    >
                        <h2 className="text-3xl font-bold text-gray-600">Connected by purpose</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Being part of our team means contributing to groundbreaking innovations that extend the
                            shelf life of soft and hard foods, reducing waste, and promoting sustainability in the food
                            industry. Here, you'll thrive in an environment designed to nurture your growth while
                            collaborating with supportive teams to create meaningful impact for people and the planet.
                        </p>
                        <Link
                            to="/about/careers/culture"
                            className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Learn more about our people and culture
                        </Link>
                    </div>
                </div>
            </div>

            {/* Discover Our Roles Section */}
            <div
                className="relative mt-10 h-[500px] max-w-7xl mx-auto overflow-hidden flex items-center"
                style={{
                    backgroundImage: `url(${connect})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start">
                    <div
                        className="p-10 max-w-xl ml-10"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                    >
                        <h2 className="text-3xl font-bold text-gray-600">Discover our roles</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            We offer rewarding roles across our organization, including engineering, research and
                            development, and production operations. Whether you're starting your career or seeking a
                            senior role, you'll have the opportunity to work on transformative solutions, collaborate
                            across borders, and deliver innovations that shape the future of food preservation. The only
                            question is: how will you help us revolutionize the way we preserve food?
                        </p>
                        <Link
                            to="/about/careers/culture"
                            className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Learn more about our roles
                        </Link>
                    </div>
                </div>
            </div>

            {/* Learning and Rewards Section */}
            <div className="relative mt-10 h-[500px] max-w-7xl mx-auto rounded-lg overflow-hidden flex">
                {/* Learning and Development Section */}
                <div className="w-1/2 p-10 border-r flex flex-col items-start">
                    <img
                        alt="Learning and Development"
                        className="rounded-lg w-full mb-6"
                    />
                    <h2 className="text-3xl font-bold text-gray-600 mb-4">
                        Learning and development
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Growth here isn’t just personal. It’s professional. We have a well-established focus on
                        structured learning and development for all roles at our company. From technical training on
                        food preservation technologies to leadership development, mentorship, and international
                        opportunities, you’ll find everything you need to develop your skills, learn new things, and
                        stay relevant in an ever-changing world. Join us in creating impactful solutions for the future
                        of food sustainability.
                    </p>
                    <Link
                        to="/about/careers/learning"
                        className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Learn more
                    </Link>
                </div>

                {/* Right Side - Rewards and Benefits */}
                <div className="w-1/2 p-10 flex flex-col items-start">
                    <img
                        alt="Rewards and Benefits"
                        className="rounded-lg w-full mb-6"
                    />
                    <h2 className="text-3xl font-bold text-gray-600 mb-4">
                        Rewards and benefits
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-left">
                        We’re creating an environment that supports and rewards you, so you have what you need to reach
                        your potential with us. Our competitive rewards framework recognizes high performance and is
                        based on equity and fairness. We also offer benefits designed to support your wellbeing while
                        you work on revolutionary solutions to extend food shelf life, reduce waste, and promote
                        sustainability in the food industry.
                    </p>
                    <Link
                        to="/about/careers/rewards"
                        className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Careers;
