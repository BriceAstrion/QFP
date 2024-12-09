import React, { useState } from "react";
import company from "../assets/company.png";
import contactImage from "../assets/contactform.png";
import countries from "../data/countries.json";

const ContactForm = () => {
    const [purpose, setPurpose] = useState("");
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [isPolicyChecked, setIsPolicyChecked] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleOptionChange = (event) => {
        setPurpose(event.target.value);
    };

    const handleNext = () => {
        let currentErrors = {};
        if (step === 1) {
            if (!purpose) {
                currentErrors.purpose = "Please select a purpose of contact.";
            }
        } else if (step === 2) {
            if (!firstName) currentErrors.firstName = "First name is required.";
            if (!lastName) currentErrors.lastName = "Last name is required.";
            if (!email) {
                currentErrors.email = "Work e-mail is required.";
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                currentErrors.email = "Please enter a valid email address.";
            }
            if (!country) currentErrors.country = "Please select your country.";
        }

        if (Object.keys(currentErrors).length > 0) {
            setErrors(currentErrors);
            return;
        }

        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
            if (step === 2) {
                setPurpose(""); // Reset purpose when going back to Step 1
            }
        }
    };

    const handleSubmit = () => {
        if (!isPolicyChecked) {
            setErrors({ ...errors, policy: "You must confirm that you have read and acknowledge " +
                    "the privacy policy." });
            return;
        }

        if (!message || message.length < 10) {
            setErrors({ ...errors, message: "Please provide a more detailed message. It should be at " +
                    "least 10 characters long." });
            return;
        }

        setIsSubmitted(true); // Set to true to hide the form and show the success message
    };

    const handleNewRequest = () => {
        setPurpose("");
        setStep(1);
        setFirstName("");
        setLastName("");
        setEmail("");
        setCountry("");
        setMessage("");
        setIsPolicyChecked(false);
        setErrors({});
        setIsSubmitted(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[400px] flex items-center"
                style={{
                    backgroundImage: `url(${company})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-16 p-8 rounded-lg max-w-lg bg-opacity-80 bg-gray-800">
                    <h5 className="text-l font-bold mb-2">CONTACT</h5>
                    <h1 className="text-4xl font-bold mb-4">General Questions</h1>
                    <p className="text-gray-200 mt-3"> Any general questions about our company, our sustainability
                        approach or how to get in touch with us.</p>
                </div>
            </div>

            <div className="w-full mt-8">
                <div className="relative h-1 bg-gray-200 rounded-full">
                    <div
                        className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full"
                        style={{width: `${(step / 3) * 100}%`}}
                    ></div>
                </div>
            </div>

            <div className="flex p-8 max-w-7xl mx-auto bg-white rounded-lg shadow-lg mt-8">
                <div className="w-1/2 p-4">
                    {isSubmitted ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Thank you for contacting us!</h2>
                            <p className="mt-4 text-gray-700">
                                Your request has been sent to our team, and we will get back to you shortly.
                                Please click on the button below if you want to send another request or if you have more
                                questions.
                            </p>
                            <button
                                onClick={handleNewRequest}
                                className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                            >
                                New Request
                            </button>
                        </div>
                    ) : (
                        <div className="w-full p-4 border-r">
                            <h1 className="text-3xl text-gray-600 font-bold mb-4">Contact Form</h1>
                            {step === 2 ? (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-500 mb-4 mt-6">Summary</h2>
                                    <p className="text-lg text-gray-500">Purpose of contact: <strong className="ml-14">
                                        {purpose.charAt(0).toUpperCase() + purpose.slice(1)}</strong></p>
                                </div>
                            ) : step === 3 ? (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-500 mb-4">Summary</h2>
                                    <div className="grid grid-cols-2 gap-y-2">
                                        <p className="text-lg text-gray-500">Purpose of contact:</p>
                                        <strong className="text-lg text-gray-500">{purpose.charAt(0).toUpperCase()
                                            + purpose.slice(1)}</strong>

                                        <p className="text-lg text-gray-500">First name:</p>
                                        <strong className="text-lg text-gray-500">{firstName}</strong>

                                        <p className="text-lg text-gray-500">Last name:</p>
                                        <strong className="text-lg text-gray-500">{lastName}</strong>

                                        <p className="text-lg text-gray-500">Work e-mail:</p>
                                        <strong className="text-lg text-gray-500">{email}</strong>

                                        <p className="text-lg text-gray-500">Country/Region:</p>
                                        <strong className="text-lg text-gray-500">{country}</strong>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-gray-700 mt-2">Please fill out the form and tell us in more
                                        detail about your query,<br/> and we will get back to you as soon as possible.
                                    </p>
                                    <img src={contactImage} alt="Contact" className="mb-4 mt-3"/>
                                    <h1 className="text-3xl text-gray-600 font-bold mt-8 mb-4">Contact Numbers</h1>
                                    <p className="text-gray-700 mb-4">
                                        For direct assistance with one of our team, feel free to contact<br/> the
                                        following
                                        numbers as you wish.
                                    </p>
                                    <div className="space-y-4">
                                        <p><strong className="text-gray-600 mb-4">Support Team:</strong> +31 800 123 456
                                        </p>
                                        <p><strong className="text-gray-600 mb-4">Sales Team:</strong> +31 612 345 678
                                        </p>
                                        <p><strong className="text-gray-600 mb-4">Customer Service:</strong> +31 698 765
                                            432
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {!isSubmitted && (
                    <div className="w-1/2 p-4">
                        {step === 1 && (
                            <div>
                                <fieldset className="mb-8 mt-6 ml-8">
                                    <legend className="text-xl text-gray-600 font-semibold">Purpose of contact</legend>
                                    <div className="flex flex-col mt-2">
                                        <label className="flex items-center my-2 mt-4 mb-4">
                                            <input
                                                type="radio"
                                                value="sustainability"
                                                checked={purpose === "sustainability"}
                                                onChange={handleOptionChange}
                                                className="mr-2"
                                            />
                                            Sustainability
                                        </label>
                                        <label className="flex items-center my-2 mt-4 mb-4">
                                            <input
                                                type="radio"
                                                value="careers"
                                                checked={purpose === "careers"}
                                                onChange={handleOptionChange}
                                                className="mr-2"
                                            />
                                            Careers
                                        </label>
                                        <label className="flex items-center my-2 mt-4 mb-4">
                                            <input
                                                type="radio"
                                                value="general"
                                                checked={purpose === "general"}
                                                onChange={handleOptionChange}
                                                className="mr-2"
                                            />
                                            General
                                        </label>
                                        <label className="flex items-center my-2 mt-4 mb-4">
                                            <input
                                                type="radio"
                                                value="product Inquiry"
                                                checked={purpose === "productInquiry"}
                                                onChange={handleOptionChange}
                                                className="mr-2"
                                            />
                                            Product Inquiry
                                        </label>
                                    </div>
                                </fieldset>
                                {errors.purpose && <p className="text-red-500">{errors.purpose}</p>}
                                <button onClick={handleNext} className="bg-blue-500 text-white font-bold py-2 px-4
                    ml-8 rounded"> Next
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-xl font-semibold mt-6 mb-8 text-gray-600 ml-8">Contact
                                    Information</h2>
                                <form>
                                    <div className="mb-4 mt-2 ml-8">
                                        <label className="block text-sm text-gray-600 font-medium mb-1">First
                                            name</label>
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className={`border w-full p-2 rounded ${errors.firstName ? 'border-red-500' : ''}`}
                                            placeholder="First Name"
                                        />
                                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                                    </div>
                                    <div className="mb-4 mt-2 ml-8">
                                        <label className="block text-sm text-gray-600 font-medium mb-1">Last
                                            name</label>
                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className={`border w-full p-2 rounded ${errors.lastName ? 'border-red-500' : ''}`}
                                            placeholder="Last Name"
                                        />
                                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                                    </div>
                                    <div className="mb-4 mt-2 ml-8">
                                        <label className="block text-sm text-gray-600 font-medium mb-1">Work
                                            e-mail</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`border w-full p-2 rounded ${errors.email ? 'border-red-500' : ''}`}
                                            placeholder="example@example.com"
                                        />
                                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                                    </div>
                                    <div className="mb-4 mt-2 ml-8">
                                        <label
                                            className="block text-sm text-gray-600 font-medium mb-1">Country/Region</label>
                                        <select
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className={`border w-full p-2 rounded ${errors.country ? 'border-red-500' : ''}`}
                                        >
                                            <option value="">Choose your Country/Region</option>
                                            {countries.map((country) => (
                                                <option key={country.cca3} value={country.name.common}>
                                                    {country.name.common}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.country && <p className="text-red-500">{errors.country}</p>}
                                    </div>
                                </form>
                                <div className="flex justify-between mt-8 ml-8">
                                    <button
                                        onClick={handlePrevious}
                                        className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold mt-6 mb-8 ml-8 text-gray-600">How can I help
                                    you?</h2>
                                <div className="mb-2 ml-8">
                                    <label className="block text-sm font-medium mb-1 text-gray-600">Message</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className={`border w-full p-2 rounded ${errors.message ? 'border-red-500' : ''}`}
                                        placeholder="Your message..."
                                        rows="5"
                                        required
                                    ></textarea>
                                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                                </div>
                                <div className="flex items-center mb-6 ml-8">
                                    <input
                                        type="checkbox"
                                        checked={isPolicyChecked}
                                        onChange={() => setIsPolicyChecked(!isPolicyChecked)}
                                        className="mr-2"
                                    />
                                    <span className="text-sm">By submitting this form, you confirm you have read and
                            acknowledge Quantum Food Preservation's privacy policy.</span>
                                    {errors.policy && <p className="text-red-500">{errors.policy}</p>}
                                </div>

                                <div className="flex justify-between mt-8 ml-8">
                                    <button
                                        onClick={handlePrevious}
                                        className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="py-8"></div>
        </div>
    );
};

export default ContactForm;