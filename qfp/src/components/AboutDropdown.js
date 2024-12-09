import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    FaInfoCircle, FaBullseye, FaBuilding, FaChartBar, FaHistory, FaUsers, FaLightbulb,
    FaNewspaper, FaCalendarAlt, FaVideo, FaBookOpen, FaFlask, FaProjectDiagram, FaNetworkWired,
    FaUserTie, FaPeopleCarry, FaTasks, FaRoad,
} from 'react-icons/fa';

const AboutDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for the dropdown menu
    const buttonRef = useRef(null); // Ref for the dropdown button
    const navigate = useNavigate();
    const location = useLocation(); // This will track the current route

    // Toggle the dropdown visibility when clicked
    const handleClick = () => setIsOpen(!isOpen);

    // Handle navigation and close dropdown
    const handleSelection = (path) => {
        setIsOpen(false); // Close the dropdown
        navigate(path); // Navigate to the selected path
    };

    // Close the dropdown if the user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false); // Close dropdown if clicked outside
            }
        };

        // Attach event listener to the document
        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Close dropdown when the location changes
    useEffect(() => {
        setIsOpen(false); // Close dropdown on route change
    }, [location]);

    return (
        <div className="relative">
            {/* Dropdown Button */}
            <button
                ref={buttonRef}
                onClick={handleClick}
                className="text-green-600 hover:text-blue-600 font-semibold"
            >
                About QFP
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 bg-white shadow-lg mt-2 z-20 p-6 border
                    border-gray-300 w-[1000px] rounded-lg max-h-[80vh] overflow-auto"
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
                                    <Link to="/about/who-we-are" className="text-green-600 text-sm font-medium hover:text-blue-600 flex items-center">
                                        <FaInfoCircle className="mr-2" /> WHO WE ARE
                                    </Link>
                                </li>
                                <li><Link to="/about/who-we-are/purpose" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaBullseye className="mr-2" /> Purpose
                                </Link></li>
                                <li><Link to="/about/who-we-are/company" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaBuilding className="mr-2" /> Company
                                </Link></li>
                                <li><Link to="/about/who-we-are/facts-figures" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaChartBar className="mr-2" /> Facts & Figures
                                </Link></li>
                                <li><Link to="/about/who-we-are/leadership" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaUsers className="mr-2" /> Leadership
                                </Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Media */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/about/media" className="text-green-600 text-sm font-medium hover:text-blue-600 flex items-center">
                                        <FaNewspaper className="mr-2" /> MEDIA
                                    </Link>
                                </li>
                                <li><Link to="/about/media/newsroom" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaNewspaper className="mr-2" /> Newsroom
                                </Link></li>
                                <li><Link to="/about/media/events" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaCalendarAlt className="mr-2" /> Events
                                </Link></li>
                                <li><Link to="/about/media/webinars" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaVideo className="mr-2" /> Webinars
                                </Link></li>
                                <li><Link to="/about/media/stories" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaBookOpen className="mr-2" /> Stories
                                </Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Innovation */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/about/innovation" className="text-green-600 text-sm font-medium hover:text-blue-600 flex items-center">
                                        <FaFlask className="mr-2" /> INNOVATION
                                    </Link>
                                </li>
                                <li><Link to="/about/innovation/approach" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaLightbulb className="mr-2" /> Our Innovation Approach
                                </Link></li>
                                <li><Link to="/about/innovation/focus-areas" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaProjectDiagram className="mr-2" /> Focus Areas
                                </Link></li>
                                <li><Link to="/about/innovation/ecosystem" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaNetworkWired className="mr-2" /> Innovation Ecosystem
                                </Link></li>
                                <li><Link to="/about/innovation/heritage" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaHistory className="mr-2" /> Heritage of Innovation
                                </Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Careers */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/about/careers" className="text-green-600 text-sm font-medium hover:text-blue-600 flex items-center">
                                        <FaUserTie className="mr-2" /> CAREERS
                                    </Link>
                                </li>
                                <li><Link to="/about/careers/culture" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaPeopleCarry className="mr-2" /> Our People and Culture
                                </Link></li>
                                <li><Link to="/about/careers/roles" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaTasks className="mr-2" /> Our Roles
                                </Link></li>
                                <li><Link to="/about/careers/journey" className="text-black text-sm hover:text-blue-600 flex items-center">
                                    <FaRoad className="mr-2" /> Recruitment Journey
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
