import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                    className="absolute left-[-50px] top-full bg-white shadow-lg mt-2 z-20 border border-gray-300
                    w-[1300px] p-6 rounded-lg"
                >
                    <h5 className="text-2xl font-bold text-blue-800 mb-6">Solutions</h5>

                    <div className="grid grid-cols-5 gap-12 text-gray-800">
                        {/* Column 1: Categories */}
                        <div>
                            <ul className="space-y-6">
                                <li><Link to="/solutions/categories" className="block hover:text-blue-600 flex items-center">
                                        <span className="text-green-800 text-sm font-medium leading-none">CATEGORIES</span>
                                    </Link>
                                </li>

                                <li><Link to="/solutions/hard-food" className="block hover:text-blue-600">Hard
                                        Food</Link>
                                </li>
                                <li><Link to="/solutions/soft-food" className="block hover:text-blue-600">Soft
                                        Food</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Packaging */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/solutions/packaging"
                                          className="block hover:text-blue-600 flex items-center">
                                        <span className="text-green-800 text-sm font-medium leading-none">PACKAGING</span>
                                    </Link>
                                </li>
                                <li><Link to="/solutions/packaging/packages" className="block hover:text-blue-600">
                                    Packages</Link>
                                </li>
                                <li><Link to="/solutions/packaging/materials" className="block hover:text-blue-600">
                                    Materials</Link>
                                </li>
                                <li><Link to="/solutions/packaging/openings" className="block hover:text-blue-600">
                                    Openings</Link>
                                </li>
                                <li><Link to="/solutions/packaging/differentiation" className="block hover:text-blue-600">
                                    Differentiation</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Equipment */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/solutions/equipment" className="block hover:text-blue-600 flex items-center">
                                        <span className="text-green-800 text-sm font-medium leading-none">EQUIPMENT</span>
                                    </Link>
                                </li>
                                <li><Link to="/solutions/equipment/processing" className="block hover:text-blue-600">
                                    Processing equipment</Link>
                                </li>
                                <li><Link to="/solutions/equipment/filling" className="block hover:text-blue-600">
                                    Filling machines</Link>
                                </li>
                                <li><Link to="/solutions/equipment/downstream" className="block hover:text-blue-600">
                                    Downstream equipment</Link>
                                </li>
                                <li><Link to="/solutions/equipment/integrated" className="block hover:text-blue-600">
                                    Integrated lines</Link>
                                </li>
                                <li><Link to="/solutions/equipment/factory" className="block hover:text-blue-600">
                                    Factory sustainable solutions</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Services */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/solutions/services"
                                          className="block hover:text-blue-600 flex items-center">
                                        <span
                                            className="text-green-800 text-sm font-medium leading-none">SERVICES</span>
                                    </Link>
                                </li>
                                <li><Link to="/solutions/services/offerings" className="block hover:text-blue-600">
                                    Service offerings</Link>
                                </li>
                                <li><Link to="/solutions/services/agreements" className="block hover:text-blue-600">
                                    Service agreements</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 5: Rethinking Resources */}
                        <div>
                            <ul className="space-y-6">
                                <li>
                                    <Link to="/solutions/resources"
                                          className="block hover:text-blue-600 flex items-center">
                                        <span className="text-green-800 text-sm font-medium leading-none">RETHINKING
                                            RESOURCES</span>
                                    </Link>
                                </li>
                                <li><Link to="/solutions/resources/energy" className="block hover:text-blue-600">Energy</Link>
                                </li>
                                <li><Link to="/solutions/resources/water" className="block hover:text-blue-600">Water</Link>
                                </li>
                                <li><Link to="/solutions/resources/waste" className="block hover:text-blue-600">Waste</Link>
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