import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/sujilogo.png"
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-teal-700 py-12 text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-6">
        
      {/* About */}
      <div className="max-w-xs">
        <img src={logo} className="w-32 h-32" />
        <p className="text-white/90 mt-2 text-justify">
At Dr.Sujitha Hospital, we are dedicated to providing compassionate, high-quality healthcare for individuals and families.        </p>
      </div>

     


      {/* Links */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Important Links</h2>
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:text-green-300 transition">Home</a>
<Link to="/about" className="hover:text-green-300 transition">About</Link>          
<a href="#" className="hover:text-green-300 transition">Departments</a>
          <a href="#" className="hover:text-green-300 transition">Doctors</a>
          <a href="#" className="hover:text-green-300 transition">Contact Us</a>
        </div>
      </div>

      {/* services */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:text-green-300 transition">OPD</a>
          <a href="#" className="hover:text-green-300 transition">Tele Consultation</a>
          <a href="#" className="hover:text-green-300 transition">Lab</a>
          <a href="#" className="hover:text-green-300 transition">ECG</a>
          <a href="#" className="hover:text-green-300 transition">Pharmacy</a>
          <a href="#" className="hover:text-green-300 transition">Home Visit</a>
        </div>
      </div>
       {/* Reach at.. */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reach at</h2>
        <ul className="space-y-3">
<li className="flex items-center gap-2">
  <span className="text-lg">📞</span>
  <span>
    <a href="tel:7449034505" className="hover:underline-none hover:text-teal-300">7449034505</a> /
    <a href="tel:04446029809" className="hover:underline-none hover:text-teal-300 ml-1">044 46029809</a>
  </span>
</li>
          <li className="flex items-center gap-2"><span className="text-lg">✉️</span>
           <span>
            <a href="mailto:dr.sugithahospital@gmail.com" className="hover:underline-none hover:text-teal-300">dr.sugithahospital@gmail.com</a>
           </span></li>


          <li className="flex items-center gap-2"><span className="text-lg">📍</span> <span>Plot no.14a, radha avenue main <br/> road, sridevi kuppam, valasaravakkam,<br/> chennai-600087</span></li>
          <li className="flex gap-5 mt-3 text-2xl">
            <FaFacebookF className="hover:text-green-300 transition" />
            <FaTwitter className="hover:text-green-300 transition" />
            <FaLinkedinIn className="hover:text-green-300 transition" />
            <FaInstagram className="hover:text-green-300 transition" />
          </li>
        </ul>
      </div>

     
    </div>

    {/* Bottom note */}
    <div className="text-center mt-12 text-white/80 text-base">
      Powered by 360 Global Media
    </div>
  </footer>
);

export default Footer;
