import React from "react";
import { SlPhone } from "react-icons/sl";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className=" w-[80%] md:w-[70%] border border-purple-300 shadow-lg rounded-xl p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 w-full h-auto">
                    <div className="text-6xl font-semibold text-[#4B006E]">Contact Us</div>
                    <div className="text-white mb-15 pt-4 text-sm">Feel free to contact us .Give your comment to us and fill form</div>
                    <div className="flex items-center gap-4 mt-4 text-md text-white"><SlPhone /><div>+921 435 4568</div></div>
                    <div className="flex items-center gap-4 mt-4 text-md text-white"><PiEnvelopeSimpleThin /><div>ibnehawwa29@gmail.com</div></div>
                    <div className="flex items-center gap-2 mt-4 text-md text-white"><CiLocationOn /><div></div>Main industrial area Karachi,Pakistan</div>
                </div>
                <div className="md:w-1/2 w-full my-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-white">First Name</label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 w-full bg-transparent border-0 border-b-1 border-gray-300 focus:border-gray-100 focus:outline-none focus:ring-0 text-gray-100 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-white">Last Name</label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 w-full bg-transparent border-0 border-b-1 border-gray-300 focus:border-gray-100 focus:outline-none focus:ring-0 text-gray-100 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="mt-1 w-full bg-transparent border-0 border-b-1 border-gray-300 focus:border-gray-100 focus:outline-none focus:ring-0 text-gray-100 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                className="mt-1 w-full bg-transparent border-0 border-b-1 border-gray-300 focus:border-gray-100 focus:outline-none focus:ring-0 text-gray-100 placeholder-gray-400"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4" className="block w-full rounded-md px-3 py-1.5 text-base text-white outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 focus:outline-gray-100 sm:text-sm/6"
                                placeholder="Enter your message..."
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex items-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4B006E] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;
