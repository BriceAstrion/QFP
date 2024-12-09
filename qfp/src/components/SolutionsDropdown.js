import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBox, FaUtensils, FaCogs, FaTools, FaRecycle, FaLeaf } from "react-icons/fa";
import { MdFastfood, MdWaterDrop, MdEnergySavingsLeaf } from "react-icons/md";

const SolutionsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for the dropdown menu
    const buttonRef = useRef(null); // Ref for the dropdown button
    const navigate = useNavigate();

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
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
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

    return (
        <div className="relative">
            {/* Dropdown Button */}
            <button
                ref={buttonRef}
                onClick={handleClick}
                className="text-green-600 hover:text-blue-600 font-semibold"
            >
                Solutions
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 bg-white shadow-lg mt-2 z-20 p-6 border
                    border-gray-300 w-[300px] sm:w-[400px] lg:w-[700px] rounded-lg max-h-[80vh] overflow-auto"
                    style={{ borderRadius: "8px" }}
                >
                    <h5 className="text-xl font-bold text-blue-800 mb-4 sm:mb-6"> Solutions </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-gray-800">
                        {/* Column 1 */}
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/categories")}
                                        className="text-green-700 text-sm font-medium hover:text-blue-600 flex items-center"
                                    >
                                        <FaUtensils className="mr-2" /> CATEGORIES
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/hard-food")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <MdFastfood className="mr-2" /> Hard Food
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/soft-food")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <MdFastfood className="mr-2" /> Soft Food
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/packaging")}
                                        className="text-green-700 text-sm font-medium hover:text-blue-600 flex items-center"
                                    >
                                        <FaBox className="mr-2" /> PACKAGING
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/packaging/packages")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaBox className="mr-2" /> Packages
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/packaging/materials")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaCogs className="mr-2" /> Materials
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/packaging/openings")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaTools className="mr-2" /> Openings
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/packaging/differentiation")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaLeaf className="mr-2" /> Differentiation
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Rethinking Resources */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/resources")}
                                        className="text-green-700 text-sm font-medium hover:text-blue-600 flex items-center"
                                    >
                                        <FaRecycle className="mr-2" /> RETHINKING RESOURCES
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/resources/energy")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <MdEnergySavingsLeaf className="mr-2" /> Energy
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/resources/water")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <MdWaterDrop className="mr-2" /> Water
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSelection("/solutions/resources/waste")}
                                        className="text-green-600 text-sm hover:text-blue-600 flex items-center"
                                    >
                                        <FaRecycle className="mr-2" /> Waste
                                    </button>
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
