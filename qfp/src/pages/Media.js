import React from "react";
import { Link } from "react-router-dom";
import careers from "../assets/careers.jpg";

const Media = () => {
    return (
        <div
            className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[485px] flex items-center"
            style={{
                backgroundImage: `url(${careers})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                <h1 className="text-3xl font-bold">Careers</h1>
                <p className="mt-6 text-md leading-relaxed">
                    Whether you're an experienced professional or just starting your career, your ideas are
                    welcomed here. Join us and make an impact to be proud of - for food, people and the planet.
                </p>
            </div>
        </div>
    );
};

export default Media;