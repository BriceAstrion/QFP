import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaLeaf, FaClipboardList, FaUsers, FaRecycle, FaBook, FaChartLine, FaFileAlt,
    FaShieldAlt, FaGlobe, FaSeedling, FaHandsHelping, FaCloudSunRain, FaTree, FaUsersCog
} from 'react-icons/fa';

const SustainabilityDropdown = () => {
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
            <button
                onClick={handleToggle}
                className="text-green-600 hover:text-blue-600 font-semibold">
                Sustainability
            </button>

            {isOpen && (
                <div
                    className="absolute left-[-50px] top-full bg-white shadow-lg mt-2 z-20 p-8 border border-gray-300 w-[1100px]"
                    style={{ borderRadius: "8px" }}
                >
                    {/* Dropdown Header */}
                    <h5 className="text-xl font-bold text-blue-800 mb-6">
                        Sustainability
                    </h5>

                    {/* Dropdown Content in Four Columns */}
                    <div className="grid grid-cols-4 gap-12 text-gray-800">
                        {/* Column 1: Focus Areas */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/sustainability/focus-area" className="text-green-700 text-sm font-medium
                                 hover:text-blue-600 flex items-center"><FaLeaf className="mr-2" /> FOCUS AREAS</Link>
                                </li>
                                <li><Link to="/sustainability/food-safety" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaShieldAlt className="mr-2"/> Food Safety & Quality</Link>
                                </li>
                                <li><Link to="/sustainability/food-loss" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaRecycle className="mr-2"/> Food Loss & Waste</Link>
                                </li>
                                <li><Link to="/sustainability/access" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaGlobe className="mr-2"/> Food Access,
                                    Availability & Resilience</Link>
                                </li>
                                <li><Link to="/sustainability/workforce" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaUsersCog className="mr-2"/> Our Workforce</Link>
                                </li>
                                <li><Link to="/sustainability/climate" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaCloudSunRain className="mr-2"/> Climate &
                                    Decarbonization</Link>
                                </li>
                                <li><Link to="/sustainability/circularity" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaRecycle className="mr-2"/> Biodegradability
                                    & Circularity</Link>
                                </li>
                                <li><Link to="/sustainability/biodiversity" className="text-green-500 text-sm
                                hover:text-blue-600 flex items-center"><FaTree className="mr-2"/> Biodiversity & Nature
                                </Link></li>
                                <li><Link to="/sustainability/social" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaHandsHelping className="mr-2"/> Social
                                    Sustainability</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Approach */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/sustainability/approach" className="text-green-700 text-sm font-medium
                                 hover:text-blue-600 flex items-center"><FaClipboardList  className="mr-2"/> APPROACH
                                </Link></li>
                                <li><Link to="/sustainability/governance" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaBook className="mr-2"/> Good Governance
                                </Link></li>
                                <li><Link to="/sustainability/stakeholders" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaUsers className="mr-2"/> Stakeholder Engagement
                                </Link></li>
                                <li><Link to="/sustainability/advisory" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaFileAlt className="mr-2"/> Advisory Panel
                                </Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Acting for Sustainability */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/sustainability/acting-sustainability" className="text-green-700
                                    text-sm font-medium hover:text-blue-600 flex items-center"><FaUsers
                                    className="mr-2"/> ACTING FOR SUSTAINABILITY</Link>
                                </li>
                                <li>
                                    <Link to="/sustainability/moving-food" className="text-green-600 text-sm
                                     hover:text-blue-600 flex items-center"><FaChartLine className="mr-2"/> Moving
                                        Food Forward</Link>
                                </li>
                                <li>
                                    <Link to="/sustainability/go-nature" className="text-green-600 text-sm
                                    hover:text-blue-600 flex items-center"><FaLeaf className="mr-2"/> Go Nature. Go Carton.
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sustainability/case-stories" className="text-green-600 text-sm
                                    hover:text-blue-600 flex items-center"><FaBook className="mr-2"/> Sustainability
                                        Case Stories</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Measuring & Reporting */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/sustainability/measure-reporting" className="text-green-700
                                    text-sm font-medium hover:text-blue-600 flex items-center"><FaChartLine
                                    className="mr-2"/> MEASURING & REPORTING</Link>
                                </li>
                                <li><Link to="/sustainability/reports" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center">
                                    <FaFileAlt className="mr-2"/> Sustainability Reports</Link>
                                </li>
                                <li><Link to="/sustainability/performance-data" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaChartLine className="mr-2"/> Sustainability
                                    Performance Data</Link>
                                </li>
                                <li><Link to="/sustainability/lifecycle" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><FaSeedling className="mr-2"/> Lifecycle
                                    Assessment
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SustainabilityDropdown;