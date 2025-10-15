import React from 'react';

const ContactSec = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20 gap-6 max-w-6xl mx-auto p-4 font-nunito">
      {/* Left: Form */}
      <div className="flex-1 space-y-4">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
         GET IN TOUCH
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded"
          >
            SEND
          </button>
        </form>
      </div>

  <div className="flex-1 h-[370px] rounded shadow overflow-hidden md:mt-14">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.4426739705!2d-74.01029378772656!3d40.71272805488533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316a9027e1%3A0xae6a6b7e3c1142d2!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1633938099339!5m2!1sen!2sin"
    width="100%"
    height="100%"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
};

export default ContactSec;
