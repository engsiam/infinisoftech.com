"use client";

import Image from "next/image";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-18 space-x-5 md:space-x-11 space-y-12">
        {/* Logo and Description */}
        <div className="col-span-2 lg:col-span-1">
          <Image
            src="/assets/images/footer-logo.png" // Replace with your logo image path
            alt="Doccure Logo"
            width={137}
            height={50}
            className="mb-6"
          />
          <p className="text-sm text-gray-600 leading-relaxed lg:w-60">
            Effortlessly schedule your medical appointments with Doccure.
            Connect with healthcare professionals, manage appointments &
            prioritize your well being
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-pink-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Specialities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Video Consult
              </a>
            </li>
          </ul>
        </div>

        {/* Specialities Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Specialities
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-pink-600">
                Neurology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Cardiologist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Dentist
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <span className="flex items-start gap-2">
                <CiLocationOn fontSize={20} />
                3556 Beech Street, USA
              </span>
            </li>
            <li>
              <a
                href="tel:+13153695943"
                className="flex items-start gap-2 hover:text-pink-600"
              >
                <MdPhoneInTalk fontSize={20} />
                +1 315 369 5943
              </a>
            </li>
            <li>
              <a
                href="mailto:doccure@example.com"
                className="flex items-start gap-2 hover:text-pink-600"
              >
                <CiMail fontSize={20} />
                doccure@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Join Our Newsletter
          </h3>
          <form className="flex flex-col md:flex-row items-center w-full lg:max-w-xl mx-auto space-y-4 md:space-y-0 md:space-x-0">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md md:rounded-l-md md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#C1426D] focus:border-transparent w-full"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 md:h-auto bg-[#C1426D] text-white font-medium rounded-md md:rounded-l-none md:rounded-r-md hover:bg-[#A83256] focus:outline-none focus:ring-2 focus:ring-[#C1426D]"
            >
              Submit
            </button>
          </form>

          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-gray-800 hover:bg-black hover:text-white transition"
            >
              <FaFacebook fontSize={20} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-gray-800 hover:bg-black hover:text-white transition"
            >
              <FaInstagram fontSize={20} />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-gray-800 hover:bg-black hover:text-white transition"
            >
              <FaTwitter fontSize={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full text-gray-800 hover:bg-black hover:text-white transition"
            >
              <FaLinkedin fontSize={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-4 bg-[#F2F6F6]">
        <div className="lg:max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <p>Copyright © 2024 Doccure. All Rights Reserved</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-pink-600">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-pink-600">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
