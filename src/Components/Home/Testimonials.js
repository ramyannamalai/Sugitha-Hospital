import React, { useState } from 'react';
import men from "../../assets/images/men.webp"
import women from "../../assets/images/women.png"
const testimonials = [
  {
    name: 'Priya S',
    photo: women,
    text: `I had a wonderful experience at the clinic. The doctors took time to 
    explain everything clearly, and the staff were warm and supportive throughout my visit.`,
  },
  {
    name: 'Wilson',
    photo: men,
    text: `The tele-consultation was smooth and convenient. 
    I received the right treatment without even stepping out of my home. Highly recommended!`,
  },
  {
    name: 'Meena R',
    photo: women,
    text: `The clinic ambiance is calm and hygienic. 
    The team’s dedication and compassion made me feel completely at ease during my treatment.`,
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => setCurrent(current === 0 ? total - 1 : current - 1);
  const nextSlide = () => setCurrent(current === total - 1 ? 0 : current + 1);

  const { name, photo, text } = testimonials[current];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 font-nunito py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">TESTIMONIAL</h2>
     <div className="w-32 h-32 rounded-full overflow-hidden mb-6 flex justify-center items-center bg-gray-100">
  <img src={photo} alt={name} className="w-full h-full object-cover" />
</div>

      <p className="text-xl text-teal-400 mb-4 font-medium">{name}</p>
      <p className="text-center text-[17px] text-gray-900 px-4 max-w-4xl leading-relaxed">{text}</p>
      <span className="text-2xl mt-6 mb-4">&#10077;</span>
      <div className="flex gap-4 mt-2">
        <button onClick={prevSlide} className="bg-teal-500 hover:bg-teal-600 text-white rounded px-4 py-2 text-xl font-semibold transition-colors">&#8592;</button>
        <button onClick={nextSlide} className="bg-teal-500 hover:bg-teal-600 text-white rounded px-4 py-2 text-xl font-semibold transition-colors">&#8594;</button>
      </div>
    </div>
  );
};

export default Testimonial;
