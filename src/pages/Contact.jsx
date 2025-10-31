import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-17">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or feedback? Fill out the form or reach us through
            the details below.
          </p>

          <div className="space-y-4">
            <p>
              <span className="font-semibold">📍 Address:</span> Jaipur, Rajasthan,
              India
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span> support@example.com
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 9876543210
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
