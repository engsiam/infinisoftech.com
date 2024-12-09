import React from 'react'

const Hero = () => {
  return (
    <section className="bg-pink-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
            স্তন ক্যান্সার চিকিৎসায় সহজ সমাধান!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            বিশেষজ্ঞদের সাথে সরাসরি যোগাযোগ করুন দেশের যেকোনো প্রান্ত থেকে
            বিশেষজ্ঞ ডাক্তারদের সাথে খুব সহজেই পরামর্শ এবং ক্যান্সার চিকিৎসার
            মধ্যে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।
          </p>
          <div className="flex space-x-4">
            <button className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600">
              অ্যাপয়েন্টমেন্ট বুক করুন
            </button>
            <button className="bg-white text-pink-500 border border-pink-500 py-2 px-6 rounded-lg shadow-md hover:bg-pink-100">
              আরও জানুন
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/images/women.png"
            alt="Breast Cancer Awareness"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
