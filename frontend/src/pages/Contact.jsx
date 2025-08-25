import React from 'react'
import { assets } from '../assets/assets'

function Contact() {


  return (
     <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <img 
            src={assets.contact_image} 
            alt="" 
            className="rounded-lg"
          />
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center text-gray-700">
          <h2 className="text-center md:text-left text-xl font-medium tracking-wide uppercase">
            Contact <span className="font-bold">Us</span>
          </h2>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold">Our Office</h3>
              <p>54709 W 1st Station<br />Suite 300, Washington, USA</p>
              <p className="mt-2">Tel: (473) 555-0132</p>
              <p>Email: <a href="mailto:prescripto-booking@gmail.com" className="text-blue-600">prescripto-booking@gmail.com</a></p>
            </div>

            <div>
              <h3 className="font-semibold">Careers at Prescripto</h3>
              <p>Learn more about our teams and job openings.</p>
              <button className="mt-4 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
