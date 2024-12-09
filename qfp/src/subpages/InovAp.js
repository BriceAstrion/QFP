import React from "react";
import background from "../assets/inov.png";
import front from "../assets/cov.png";
import second from "../assets/clean.png";
import third from "../assets/cust.png";

const InnovationAp = () => {
    return (
        <div
            className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex items-center"
            style={{
                backgroundImage: `url(${front})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute left-16 sm:left-32 p-8 rounded-lg max-w-lg sm:max-w-xl bg-opacity-80 bg-gray-800">
                <h1 className="text-4xl font-bold mb-4">Our Innovation Approach</h1>
                <p className="mt-2 text-lg leading-relaxed">
                    To transform food preservation via a hydrogel solution. We’re thinking of reinventing instead of
                    just thinking outside the box. Our approach to food preservation is set to transform the way we
                    store and consume our food.
                </p>
            </div>
        </div>
    );
};

const ScienceBehindSolution = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center p-6 sm:p-8 space-x-6 sm:space-x-10 bg-white
        text-black rounded-lg shadow-lg mt-10 max-w-screen-lg mx-auto">
            {/* Left Section (Text) */}
            <div className="sm:w-1/2 max-w-lg p-6 sm:p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">The Science Behind the Solution</h2>
                <p className="mb-4">
                    Our team has developed a game-changing hydrogel using a combination of seaweed-derived alginate and
                    <strong className="text-gray-800"> CMC (carboxymethyl cellulose)</strong>, a naturally occurring
                    polysaccharide.
                    Together this forms a protective membrane that:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong className="text-gray-800">Extends freshness:</strong> it slows down enzymatic
                        activity and reduces the oxidation process to keep your food the same quality as day one.</li>
                    <li><strong className="text-gray-800">Versatile protection:</strong> fruits, vegetables, meat,
                        fish, and even nuts – our solution protects a wide variety of consumables.</li>
                </ul>
                <h3 className="text-2xl font-bold mt-6 mb-2 text-gray-800">A Cleaner Future</h3>
                <p className="mb-4">
                    At QFP, we are not preserving food – we are preserving our planet. Our membrane is a sustainable
                    alternative to traditional plastic packaging, helping to fight the global plastic pollution crisis.
                </p>
                <h3 className="text-2xl font-bold mt-6 mb-2 text-gray-800">Consumer - Beneficial Qualities</h3>
                <p className="mb-4">
                    At QPF, we have designed a solution for consumers:
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li><strong className="text-gray-800">Longer Expiry Date:</strong> Extending the shelf
                        life of your food, giving you more time to enjoy your purchases.</li>
                    <li><strong className="text-gray-800">Easy Removal:</strong> Our water-soluble membrane can be
                        easily washed off when you’re ready to consume your food.</li>
                </ol>
            </div>

            {/* Right Section (Image) */}
            <div className="sm:w-1/2">
                <img
                    src={background}
                    alt="Science Behind the Solution"
                    className="w-full h-auto object-cover rounded-lg mb-6"
                    style={{ maxHeight: "400px", objectPosition: "center" }}
                />
                <img
                    src={second}
                    alt="Second Image"
                    className="w-full h-auto object-cover rounded-lg mb-6"
                    style={{ maxHeight: "400px", objectPosition: "center" }}
                />
                <img
                    src={third}
                    alt="Third Image"
                    className="w-full h-auto object-cover rounded-lg"
                    style={{ maxHeight: "400px", objectPosition: "center" }}
                />
            </div>

        </div>
    );
};

const InnovationPage = () => {
    return (
        <div>
            <InnovationAp/>
            <ScienceBehindSolution/>
        </div>
    );
};

export default InnovationPage;
