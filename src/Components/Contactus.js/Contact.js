import React, { useState } from "react";
import Header from "../../Screens/Header";
import Footer from "../../Screens/Footer";

const SERVICE_OPTIONS = [
  "Consultation",
  "Medical Checkup",
  "Lab Test",
  "Home Visit",
  "Other",
];

const Contactus = () => {
  const [confirmation, setConfirmation] = useState("");
  const [form, setForm] = useState({
    name: "",
    age: "",
    sex: "",
    contact: "",
    email: "",
    place: "",
    service: "",
    datetime: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setConfirmation("Thank you! Your appointment request has been received.");
  };

  return (
    <>
    <Header/>
    <div className="max-w-5xl mx-auto py-24 px-4 md:px-0 font-nunito">
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow p-4">
        <div className="md:w-1/2 w-full">
 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
         GET IN TOUCH
        </h2>          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                type="text"
                placeholder="Name"
                className="p-3 bg-gray-100 rounded border border-gray-300"
              />
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                required
                type="number"
                min="0"
                placeholder="Age"
                className="p-3 bg-gray-100 rounded border border-gray-300"
              />
              <select
                name="sex"
                value={form.sex}
                onChange={handleChange}
                required
                className="p-3 bg-gray-100 rounded border border-gray-300"
              >
                <option value="">Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                required
                type="text"
                placeholder="Contact"
                className="p-3 bg-gray-100 rounded border border-gray-300"
              />
            </div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-100 rounded border border-gray-300"
            />
            <input
              name="place"
              value={form.place}
              onChange={handleChange}
              required
              type="text"
              placeholder="Place"
              className="w-full p-3 bg-gray-100 rounded border border-gray-300"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-100 rounded border border-gray-300"
            >
              <option value="">Service Type</option>
              {SERVICE_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <input
              name="datetime"
              value={form.datetime}
              onChange={handleChange}
              required
              type="datetime-local"
              className="w-full p-3 bg-gray-100 rounded border border-gray-300"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 rounded mt-4 hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
          {confirmation && (
            <div className="mt-6 text-center text-lg text-green-600 font-semibold">{confirmation}</div>
          )}
        </div>
        {/* Right: Map */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-10">
        <div className="h-[480px] w-full rounded shadow overflow-hidden">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7916033186707!2d80.17515847512412!3d13.048932987273577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261371318e101%3A0x27aa85f64814aae6!2s14%2C%20Radha%20Ave%20Main%20Rd%2C%20Sridevi%20Kuppam%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087!5e0!3m2!1sen!2sin!4v1760544617645!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </div>
    <Footer/>
        </>

  );
};

export default Contactus;
