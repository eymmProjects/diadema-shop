import React from "react";

import backgroundImage from "./Image.png";

export const Contact = () => {
  const company = {
    name: "Your Company Name",
    address: "123 Main Street, City, Country",
    phone: "+1 (123) 456-7890",
    email: "info@company.com",
    website: "www.company.com",
  };
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className=" h-[50%] absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center bottom",
        }}
      ></div>

      {/* Contact Form Container */}
      <div className="relative z-10">
        <div className="container mx-auto py-12">
          <div className="bg-white p-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-full text-center">
              <h1 className="text-4xl font-bold text-center mt-8">
                Contact Us
              </h1>
            </div>
            {/* Contact Form */}
            <div>
              {/* <h1 className="text-4xl font-bold text-black mb-8">Contact Us</h1> */}
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                {/* Form fields */}
                {/* ... */}

                <div className="mb-4">
                  <label
                    className="text-left block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="text-left block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="text-left block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Company Details */}
            <div>
              <div className="bg-white  rounded p-8 ">
                {/* Company details */}

                <div className="container text-left py-12 bg-slate-600">
                  {/* Company Details */}
                  <h2 className="text-2xl   font-semibold ">Company Details</h2>
                  <p className="text-lg">
                    <strong>{company.name}</strong>
                    <br />
                    {company.address}
                    <br />
                    Phone: {company.phone}
                    <br />
                    Email: {company.email}
                    <br />
                    Website: {company.website}
                  </p>
                </div>
                {/* ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
