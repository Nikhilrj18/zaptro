import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        About Us
      </h1>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Welcome to Our Store
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are passionate about providing the best products to our customers.
            Our mission is to deliver high-quality items at affordable prices
            while ensuring excellent customer service.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Since our launch in 2025, we’ve become a trusted platform for fashion,
            electronics, and lifestyle products. We are constantly growing and
            innovating to make your shopping experience seamless.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our mission is simple: to make online shopping enjoyable, secure, and
          affordable. We aim to bring a wide variety of products under one roof
          and deliver them with efficiency and reliability. Customer happiness
          drives everything we do.
        </p>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Team Member */}
          <div className="text-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/200x200/?man,portrait"
              alt="Team Member"
              className="w-28 h-28 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              Nikhil Saini
            </h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          <div className="text-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/200x200/?woman,portrait"
              alt="Team Member"
              className="w-28 h-28 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Priya Sharma</h3>
            <p className="text-gray-500">Head of Marketing</p>
          </div>

          <div className="text-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/200x200/?developer,person"
              alt="Team Member"
              className="w-28 h-28 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Aman Verma</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
