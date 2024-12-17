import React from "react";
import heroImage from "../assets/img_1.png";
import foodImage from "../assets/img_1.png";
import peopleImage from "../assets/img_1.png";
import planetImage from "../assets/img_1.png";

const Purpose = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex items-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className="absolute left-16 sm:left-32 p-8 rounded-lg max-w-lg sm:max-w-xl bg-opacity-80 bg-gray-800"
                >
                    <h1 className="text-4xl font-bold mb-4">Our Purpose</h1>
                    <p className="mt-2 text-lg leading-relaxed">
                        We commit to making food safe and available, everywhere, and we promise to protect what’s good:
                        food, people, and the planet.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto py-12 px-6 md:px-0 text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our purpose:</h2>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
                    We commit to making food safe and available, everywhere and we promise to protect what’s good: food,
                    people and the planet.
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    We firmly believe that being able to access safe and nutritious food should be considered a right,
                    not a privilege. But how do you package a litre of milk, transport it to where it’s needed most, and
                    know that when it’s eventually opened, even months later, it is safe and tasty to drink? That’s the
                    challenge we solve with our customers every day. The ‘how’ is a little technical however...
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    We pioneered aseptic technology, which allows us to package a commercially sterile food product so
                    that it can last longer, be distributed further and stored without the need for refrigeration or
                    preservatives. This innovative technology underpins our ability to get food and drink that is safe
                    to consume to the remotest parts of the world where access to safe food cannot be taken for granted.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    And this kind of technology has never been more in-need. By 2030, there will be even more people in
                    the world – all of whom will be relying on a healthy, nourishing and affordable diet to thrive. Our
                    ability to make sure food and drink can reach the people who need it, while protecting its
                    nutritional quality will only become ever more important.
                </p>
            </div>

            {/* Superimpose Images Section */}
            <div className="flex flex-col gap-6 px-16">
                {/* Section 1: Food Waste & Hunger*/}
                <div className="relative w-full h-[350px] bg-gray-100 overflow-hidden">
                    <img
                        src={foodImage}
                        alt="Food Waste & Hunger"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 flex items-center p-8 bg-gradient-to-r from-black/70 to-transparent">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-white mb-4">Food Waste & Hunger</h2>
                            <p className="text-white leading-relaxed">
                                We want people all over the world to have access to safe food of the highest quality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Protecting People */}
                <div className="relative w-full h-[350px] bg-gray-100 overflow-hidden">
                    <img
                        src={peopleImage}
                        alt="Protecting People"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 flex items-center p-8 bg-gradient-to-r from-black/70 to-transparent">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-white mb-4">Protecting people</h2>
                            <p className="text-white leading-relaxed">
                                We continuously strive to protect the health and safety of people everywhere.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Protecting the Planet */}
                <div className="relative w-full h-[350px] bg-gray-100 overflow-hidden">
                    <img
                        src={planetImage}
                        alt="Protecting Marine Ecosystem"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 flex items-center p-8 bg-gradient-to-r from-black/70 to-transparent">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-white mb-4">Protecting the planet</h2>
                            <p className="text-white leading-relaxed">
                                Our solutions help reduce waste, support sustainability, and ensure long-term impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4"></div>
        </div>
    );
};

export default Purpose;
