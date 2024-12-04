import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaInfoCircle, FaBullseye, FaBuilding, FaChartBar, FaHistory, FaUsers, FaLightbulb,
    FaNewspaper, FaCalendarAlt, FaVideo, FaBookOpen, FaFlask, FaProjectDiagram, FaNetworkWired,
    FaUserTie, FaPeopleCarry, FaTasks, FaRoad,
} from 'react-icons/fa';

const AboutDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Dropdown Button */}
            <button
                onClick={handleToggle}
                className="text-green-600 hover:text-blue-600 font-semibold"> About QFP
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute left-[-50px] top-full bg-white shadow-lg mt-2 z-20 p-8 border
                    border-gray-300 w-[1000px]"
                    style={{ borderRadius: "8px" }}
                >
                    {/* Dropdown Header */}
                    <h5 className="text-xl font-bold text-blue-800 sm:mb-6">
                        About Quantum Food Preservation
                    </h5>

                    {/* Dropdown Content in Four Columns */}
                    <div className="grid grid-cols-4 gap-12 text-gray-800">
                        {/* Column 1: Who We Are */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/about/who-we-are" className="text-green-700 text-sm font-medium
                                    hover:text-blue-600 flex items-center"><FaInfoCircle className="mr-2"/> WHO WE ARE
                                    </Link>
                                </li>
                                <li><Link to="/about/who-we-are/purpose" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center">
                                    <FaBullseye className="mr-2"/> Purpose
                                </Link></li>
                                <li><Link to="/about/who-we-are/company" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaBuilding className="mr-2"/> Company
                                </Link></li>
                                <li><Link to="/about/who-we-are/facts-figures" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center">
                                    <FaChartBar className="mr-2"/> Facts & Figures
                                </Link></li>
                                <li><Link to="/about/who-we-are/leadership" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaUsers className="mr-2"/> Leadership
                                </Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Media */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/about/media" className="text-green-700 text-sm font-medium
                                    hover:text-blue-600 flex items-center">
                                        <FaNewspaper className="mr-2"/> MEDIA
                                    </Link>
                                </li>
                                <li><Link to="/about/media/newsroom" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaNewspaper className="mr-2"/> Newsroom
                                </Link></li>
                                <li><Link to="/about/media/events" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaCalendarAlt className="mr-2"/> Events
                                </Link></li>
                                <li><Link to="/about/media/webinars" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaVideo className="mr-2"/> Webinars
                                </Link></li>
                                <li><Link to="/about/media/stories" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaBookOpen className="mr-2"/> Stories
                                </Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Innovation */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/about/innovation" className="text-green-700 text-sm font-medium
                                    hover:text-blue-600 flex items-center">
                                        <FaFlask className="mr-2"/> INNOVATION
                                    </Link>
                                </li>
                                <li><Link to="/about/innovation/approach" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaLightbulb className="mr-2"/> Our Innovation Approach
                                </Link></li>
                                <li><Link to="/about/innovation/focus-areas" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaProjectDiagram className="mr-2"/> Focus Areas
                                </Link></li>
                                <li><Link to="/about/innovation/ecosystem" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaNetworkWired className="mr-2"/> Innovation Ecosystem
                                </Link></li>
                                <li><Link to="/about/innovation/heritage" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaHistory className="mr-2"/> Heritage of Innovation
                                </Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Careers */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/about/careers" className="text-green-700 text-sm font-medium
                                    hover:text-blue-600 flex items-center">
                                        <FaUserTie className="mr-2"/> CAREERS
                                    </Link>
                                </li>
                                <li><Link to="/about/careers/culture" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaPeopleCarry className="mr-2"/> Our People and Culture
                                </Link></li>
                                <li><Link to="/about/careers/roles" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaTasks className="mr-2"/> Our Roles
                                </Link></li>
                                <li><Link to="/about/careers/journey" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaRoad className="mr-2"/> Recruitment Journey
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutDropdown;