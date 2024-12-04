import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBox, FaUtensils, FaCogs, FaTools, FaRecycle, FaLeaf } from "react-icons/fa";
import { MdFastfood, MdWaterDrop, MdEnergySavingsLeaf } from "react-icons/md";

const SolutionsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div className="relative">
            {/* Dropdown Button */}
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-green-600 hover:text-blue-600 font-semibold"
            >
                Solutions
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute top-full left-0 bg-white shadow-lg mt-2 z-20 p-6 border
                    border-gray-300 w-[300px] sm:w-[400px] lg:w-[700px] rounded-lg max-h-[80vh] overflow-auto"
                    style={{ borderRadius: "8px" }}
                    onMouseEnter={handleMouseEnter} // Keep dropdown open when mouse is inside
                    onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
                >
                    <h5 className="text-xl font-bold text-blue-800 mb-4 sm:mb-6"> Solutions </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-gray-800">
                        {/* Column 1 */}
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        to="/solutions/categories"
                                        className="text-green-700 text-sm font-medium hover:text-blue-600 flex items-center"
                                    >
                                        <FaUtensils className="mr-2" /> CATEGORIES
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/solutions/hard-food"
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <MdFastfood className="mr-2" /> Hard Food
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/solutions/soft-food"
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <MdFastfood className="mr-2" /> Soft Food
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        to="/solutions/packaging"
                                        className="text-green-700 text-sm font-medium hover:text-blue-600 flex items-center"
                                    >
                                        <FaBox className="mr-2" /> PACKAGING
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/solutions/packaging/packages"
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaBox className="mr-2" /> Packages
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/solutions/packaging/materials"
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaCogs className="mr-2" /> Materials
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/solutions/packaging/openings"
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaTools className="mr-2" /> Openings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/solutions/packaging/differentiation"
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaLeaf className="mr-2" /> Differentiation
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Rethinking Resources */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/solutions/resources" className="text-green-700 text-sm font-medium hover:text-blue-600 flex items-center"><FaRecycle className="mr-2"/> RETHINKING RESOURCES </Link></li>
                                <li><Link to="/solutions/resources/energy" className="text-green-600 text-sm hover:text-blue-600 flex items-center"><MdEnergySavingsLeaf className="mr-2"/> Energy</Link></li>
                                <li><Link to="/solutions/resources/water" className="text-green-600 text-sm hover:text-blue-600 flex items-center"><MdWaterDrop className="mr-2" /> Water </Link></li>
                                <li><Link to="/solutions/resources/waste"  className="text-green-600 text-sm hover:text-blue-600 flex items-center"><FaRecycle className="mr-2" /> Waste </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SolutionsDropdown;
