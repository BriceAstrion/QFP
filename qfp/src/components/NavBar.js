import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import AboutDP from "./AboutDP";
import Solutions from "./SolutionsDP"
import SustainabilityDP from "./SustainabilityDP";


const NavBar = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const navigate = useNavigate();

    // Dummy data
    const items = [];

    // Toggle Search Bar Visibility
    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        if (searchVisible) {
            setSearchQuery('');
        }
    };

    // Handle Search Input Change
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle Search Icon Click
    const handleSearchClick = () => {
        // Find the matching result
        const result = items.find(item => item.name.toLowerCase()
            .includes(searchQuery.toLowerCase()));

        if (result) {
            // If result found, redirect to the corresponding page
            setSearchResult(result);
            navigate(result.link); // Redirect to the corresponding page
        } else {
            setSearchResult(null); // Clear any previous results
        }
    };

    // Prevent Scrolling When Search Bar is Open
    React.useEffect(() => {
        if (searchVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto"; // Cleanup on unmount
        };
    }, [searchVisible]);

    // Reset search state when navigating to a new page
    React.useEffect(() => {
        setSearchVisible(false); // Hide the search bar on page load
        setSearchQuery(''); // Clear the search query
    }, [navigate]);


    return (
        <div className="bg-white shadow">
            {/* Upper Section */}
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo Section with Link to Home */}
                <div className="flex items-center space-x-3">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-blue-800">Quantum Food Preservation</h1>
                        <p className="text-sm font-bold text-red-600 ml-12">PROTECTS WHAT'S GOOD</p>
                    </div>
                </div>

                {/* Right Section: Upper Links */}
                <div className="flex items-center space-x-6">
                    <Link to="/contact-us" className="font-bold text-green-900 hover:text-blue-600"
                          onClick={toggleSearch}>Contact Us</Link>
                    <Link to="/careers" className="font-bold text-green-800 hover:text-blue-600"
                          onClick={toggleSearch}>Careers</Link>
                    <Link to="/media" className="font-bold text-green-800 hover:text-blue-600"
                          onClick={toggleSearch}>Media</Link>
                    <Link to="/suppliers" className="font-bold text-green-800 hover:text-blue-600"
                          onClick={toggleSearch}>Suppliers</Link>
                    <Link to="/global" className="font-bold text-green-800 hover:text-blue-600 flex items-center"
                          onClick={toggleSearch}>
                        <i className="fas fa-globe mr-1"></i> Global
                    </Link>
                    <Link to="/login" className="font-bold text-green-800 hover:text-blue-600 flex items-center"
                          onClick={toggleSearch}>
                        <i className="fas fa-user mr-1"></i> Login
                    </Link>
                </div>
            </nav>

            {/* Divider Line */}
            <hr className="border-gray-300" />

            {/* Lower Links */}
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex space-x-8">
                    <Solutions />
                    <Link to="/insights" className="text-green-600 hover:text-blue-600"
                          onClick={toggleSearch}>Insights</Link>
                    <SustainabilityDP />
                    <AboutDP />

                </div>

                {/* Search Icon */}
                <button onClick={toggleSearch} className="flex items-center">
                    <i
                        className={`fas ${searchVisible ? 'fa-times text-red-600' : 'fa-search text-green-600'}`}
                        style={{ fontSize: '24px' }}
                    ></i>
                </button>
            </nav>

            {/* Search Bar Section */}
            {searchVisible && (
                <div className="container mx-auto px-4 py-3 flex flex-col items-center">
                    {/* Search Input */}
                    <div className="relative w-full max-w-lg">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="What are you looking for?"
                            className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring
                            focus:ring-blue-300"
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
