

const Services = () => {
  return (
    <section className="bg-white py-10 max-w-7xl mx-auto">
    <div className="container mx-auto px-4 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-2">
        মেডিমেট কিভাবে কাজ করে
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        আপনার স্বাস্থ্য, আপনার সন্তুষ্টি গুরুত্বপূর্ণ!
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          {/* Number and Heading in the Same Div */}
          <div className="flex items-center mb-4">
            <span className="bg-pink-500 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
              1
            </span>
            <h3 className="text-xl font-bold text-pink-700">
              নিবন্ধন এবং প্রোফাইল তৈরি করুন
            </h3>
          </div>
          {/* Description in a Separate Div */}
          <div>
            <p className="text-gray-700">
              রোগীরা মেডিমেট অ্যাপে নিবন্ধন করে, তাদের মৌলিক তথ্য এবং স্বাস্থ্য
              সম্পর্কিত তথ্য দিয়ে একটি নিরাপদ প্রোফাইল তৈরি করেন। এতে
              ডাক্তারদের সঠিক চিকিৎসা দেওয়ার জন্য প্রয়োজনীয় তথ্য থাকে।
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <span className="bg-pink-500 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
              2
            </span>
            <h3 className="text-xl font-bold text-pink-700">
              বিশেষজ্ঞ নির্ধারণ করুন
            </h3>
          </div>
          <div>
            <p className="text-gray-700">
              আপনার সমস্যার জন্য সেরা বিশেষজ্ঞ নির্ধারণ করুন এবং খুব সহজে
              পরামর্শ নিন। মেডিমেট আপনাকে সঠিক ডাক্তার পেতে সহায়তা করবে।
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <span className="bg-pink-500 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
              3
            </span>
            <h3 className="text-xl font-bold text-pink-700">
              শুধু একটি টিকেই অনুরোধ পাঠান
            </h3>
          </div>
          <div>
            <p className="text-gray-700">
              আপনার চিকিৎসার প্রয়োজনীয়তা নিশ্চিত করার জন্য বিশেষজ্ঞদের সাথে
              সরাসরি যোগাযোগ করুন। তারা আপনাকে সময়মতো এবং নির্ভুল তথ্যের
              মাধ্যমে সেবা প্রদান করবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services
