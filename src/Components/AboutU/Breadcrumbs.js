import React from 'react';
import bg from "../../assets/images/abtimg.jpeg";


const Breadcrumbs = () => (
  <div
    className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >
    <div className=" ">
      <div className="flex items-center">
<h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
          ABOUT US
        </h2>      </div>
    </div>
  </div>
);

export default Breadcrumbs;
