import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import AboutDropdown from "./AboutDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import SustainabilityDropdown from "./SustainabilityDropdown";

const NavBar = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const navigate = useNavigate();

    // Dummy data
    const items = [];

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        if (searchVisible) {
            setSearchQuery("");
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        const result = items.find((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (result) {
            navigate(result.link);
        }
    };

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Handle clicks outside dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-container")) {
                setOpenDropdown(null); // Close dropdowns if clicked outside
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Manage body overflow when search is visible
    useEffect(() => {
        document.body.style.overflow = searchVisible ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [searchVisible]);

    return (
        <div className="bg-white shadow">
            {/* Navbar container */}
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo and branding */}
                <div className="flex items-center space-x-3">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-blue-800">
                            Quantum Food Preservation
                        </h1>
                        <p className="text-sm font-bold text-red-600 ml-12">
                            PROTECTS WHAT'S GOOD
                        </p>
                    </div>
                </div>

                {/* Hamburger and Search for Mobile */}
                <div className="flex items-center space-x-4 md:hidden">
                    {/* Search Icon */}
                    <button onClick={toggleSearch} className="text-green-600 hover:text-blue-600">
                        <i
                            className={`fas ${
                                searchVisible ? "fa-times text-red-600" : "fa-search"
                            }`}
                            style={{ fontSize: "24px" }}
                        ></i>
                    </button>
                    {/* Hamburger Icon */}
                    <button
                        onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
                        className="text-gray-700"
                        aria-label="Toggle menu"
                    >
                        <i
                            className={`fas ${
                                mobileMenuVisible ? "fa-times" : "fa-bars"
                            }`}
                            style={{ fontSize: "24px" }}
                        ></i>
                    </button>
                </div>

                {/* Links for Desktop */}
                <div className="hidden md:flex md:items-center space-x-6 font-bold text-green-800">
                    <Link to="/contact-us" className="hover:text-blue-600">
                        Contact Us
                    </Link>
                    <Link to="/about/careers" className="hover:text-blue-600">
                        Careers
                    </Link>
                    <Link to="/media" className="hover:text-blue-600">
                        Media
                    </Link>
                    <Link to="/suppliers" className="hover:text-blue-600">
                        Suppliers
                    </Link>
                    <Link to="/global" className="hover:text-blue-600 flex items-center">
                        <i className="fas fa-globe mr-1"></i> Global
                    </Link>
                    <Link to="/login" className="hover:text-blue-600 flex items-center">
                        <i className="fas fa-user mr-1"></i> Login
                    </Link>
                </div>
            </nav>

            {/* Second Navbar with Dropdowns (for Desktop) */}
            <nav className="container mx-auto px-4 py-3 hidden md:flex md:items-center md:justify-between">
                <div className="hidden md:flex md:items-center space-x-6 font-bold text-green-800">
                    <div className="dropdown-container">
                        <div onClick={() => toggleDropdown("solutions")}>
                            <SolutionsDropdown isOpen={openDropdown === "solutions"} />
                        </div>
                    </div>
                    <Link to="/insights" className="hover:text-blue-600">
                        Insights
                    </Link>
                    <div className="dropdown-container">
                        <div onClick={() => toggleDropdown("sustainability")}>
                            <SustainabilityDropdown isOpen={openDropdown === "sustainability"} />
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div onClick={() => toggleDropdown("about")}>
                            <AboutDropdown isOpen={openDropdown === "about"} />
                        </div>
                    </div>
                </div>

                {/* Search Icon for Desktop */}
                <button onClick={toggleSearch} className="hidden md:flex items-center">
                    <i
                        className={`fas ${
                            searchVisible
                                ? "fa-times text-red-600"
                                : "fa-search text-green-600"
                        }`}
                        style={{ fontSize: "24px" }}
                    ></i>
                </button>
            </nav>

            {/* Mobile Menu Links */}
            <div className={`${mobileMenuVisible ? "block" : "hidden"} md:hidden`}>
                <div className="flex flex-col items-start space-y-4 px-4 py-2">
                    <Link to="/contact-us" className="flex items-center space-x-2 text-green-600 hover:text-blue-600">
                        <i className="fas fa-envelope"></i>
                        <span>Contact Us</span>
                    </Link>
                    <Link to="/careers" className="flex items-center space-x-2 text-green-600 hover:text-blue-600">
                        <i className="fas fa-briefcase"></i>
                        <span>Careers</span>
                    </Link>
                    <Link to="/media" className="flex items-center space-x-2 text-green-600 hover:text-blue-600">
                        <i className="fas fa-photo-video"></i>
                        <span>Media</span>
                    </Link>
                    <Link to="/suppliers" className="flex items-center space-x-2 text-green-600 hover:text-blue-600">
                        <i className="fas fa-industry"></i>
                        <span>Suppliers</span>
                    </Link>
                    <Link to="/global" className="flex items-center space-x-2 text-green-600 hover:text-blue-600">
                        <i className="fas fa-globe"></i>
                        <span>Global</span>
                    </Link>
                    <Link to="/login" className="flex items-center space-x-2 text-green-600 hover:text-blue-600">
                        <i className="fas fa-user"></i>
                        <span>Login</span>
                    </Link>
                </div>

                <div className="flex flex-col items-start space-y-4 px-4 py-2">
                    <SolutionsDropdown />
                    <Link to="/insights" className="flex items-center space-x-2 text-green-600 hover:text-blue-600">
                        <span>Insights</span>
                    </Link>
                    <SustainabilityDropdown />
                    <AboutDropdown />
                </div>
            </div>

            {/* Search Bar for Mobile */}
            {searchVisible && (
                <div className="container mx-auto px-4 py-3 flex flex-col items-center bg-white shadow-md z-50">
                    <div className="relative w-full max-w-lg">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="What are you looking for?"
                            className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            onClick={handleSearchClick}
                            className="absolute right-3 top-3 text-green-600 hover:text-blue-600"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;