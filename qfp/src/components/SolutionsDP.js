import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBox, FaUtensils, FaCogs, FaTools, FaRecycle, FaLeaf} from "react-icons/fa";
import { MdFastfood, MdWaterDrop, MdEnergySavingsLeaf } from "react-icons/md";


const SolutionsDropdown = () => {
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
                className="text-green-600 hover:text-blue-600 font-semibold"
            >
                Solutions
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute left-[-50px] top-full bg-white shadow-lg mt-2 z-20 p-8 border border-gray-300 w-[1200px]"
                    style={{ borderRadius: "8px" }}
                >
                    <h5 className="text-2xl font-bold text-blue-800 mb-6">Solutions</h5>

                    <div className="grid grid-cols-5 gap-12 text-gray-800">
                        {/* Column 1: Categories */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/solutions/categories" className="text-green-700 text-sm font-medium
                                 hover:text-blue-600 flex items-center"><FaUtensils className="mr-2"/> CATEGORIES </Link>
                                </li>
                                <li><Link to="/solutions/hard-food" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><MdFastfood className="mr-2" /> Hard Food </Link>
                                </li>
                                <li><Link to="/solutions/soft-food" className="text-green-600 text-sm
                                hover:text-blue-600 flex items-center"><MdFastfood className="mr-2" /> Soft Food </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Packaging */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/solutions/packaging" className="text-green-700 text-sm font-medium
                                 hover:text-blue-600 flex items-center"><FaBox className="mr-2"/> PACKAGING </Link>
                                </li>
                                <li><Link to="/solutions/packaging/packages" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaBox className="mr-2" /> Packages </Link>
                                </li>
                                <li><Link to="/solutions/packaging/materials" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaCogs className="mr-2" /> Materials </Link>
                                </li>
                                <li><Link to="/solutions/packaging/openings" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaTools className="mr-2" /> Openings </Link>
                                </li>
                                <li><Link to="/solutions/packaging/differentiation" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaLeaf className="mr-2" /> Differentiation </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Equipment */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/solutions/equipment" className="text-green-700 text-sm font-medium
                                 hover:text-blue-600 flex items-center"><FaBox className="mr-2"/> EQUIPMENT </Link>
                                </li>
                                <li><Link to="/solutions/equipment/processing"  className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center">
                                    Processing Equipment</Link>
                                </li>
                                <li><Link to="/solutions/equipment/filling"  className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center">
                                    Filling Machines</Link>
                                </li>
                                <li><Link to="/solutions/equipment/downstream"  className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center">
                                    Downstream Equipment</Link>
                                </li>
                                <li><Link to="/solutions/equipment/integrated"  className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center">
                                    Integrated Lines</Link>
                                </li>
                                <li><Link to="/solutions/equipment/factory"  className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center">
                                    Factory Sustainable Solutions</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Services */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/solutions/services" className="text-green-700 text-sm font-medium
                                 hover:text-blue-600 flex items-center"><FaTools className="mr-2 text-green-800"/>
                                    SERVICES </Link>
                                </li>
                                <li><Link to="/solutions/services/offerings" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaRecycle className="mr-2"/>
                                    Service Offerings </Link>
                                </li>
                                <li><Link to="/solutions/services/agreements" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaCogs className="mr-2"/>
                                    Service Agreements </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 5: Rethinking Resources */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/solutions/resources" className="text-green-700 text-sm font-medium
                                    hover:text-blue-600 flex items-center"><FaRecycle className="mr-2"/>
                                    RETHINKING RESOURCES </Link>
                                </li>
                                <li><Link to="/solutions/resources/energy" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><MdEnergySavingsLeaf className="mr-2"/>
                                    Energy</Link>
                                </li>
                                <li><Link to="/solutions/resources/water" className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><MdWaterDrop className="mr-2" /> Water </Link>
                                </li>
                                <li><Link to="/solutions/resources/waste"  className="text-green-600 text-sm
                                 hover:text-blue-600 flex items-center"><FaRecycle className="mr-2" /> Waste </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SolutionsDropdown;