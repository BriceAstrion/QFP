import React from "react";
import leadership from "../assets/leadership.png";

const Leadership = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[600px] flex items-center"
                style={{
                    backgroundImage: `url(${leadership})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className="absolute left-16 sm:left-32 p-8 rounded-lg max-w-lg sm:max-w-xl bg-opacity-80 bg-gray-800">
                    <h1 className="text-4xl font-bold mb-4">Leadership</h1>
                    <p className="mt-2 text-lg leading-relaxed">

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Leadership;