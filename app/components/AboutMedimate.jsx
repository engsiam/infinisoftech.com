const AboutMedimate = () => {
  return (
    <section className="bg-pink-100 py-10">
     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 max-w-7xl">
     <div className="grid grid-cols-1 md:grid-cols-10 gap-20 items-center">
        {/* Image Section - 3 Columns */}
        <div className="col-span-1 md:col-span-3">
          <img
            src="/assets/images/women.png" // Update with actual image path
            alt="Medimate Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section - 7 Columns */}
        <div className="col-span-1 md:col-span-7">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
            মেডিমেট সম্পর্কে
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            একটি নতুন যুগের চিকিৎসা অ্যাপ্লিকেশন, যা ঢাকা <br /> শহরের বাইরে বসবাসকারী
            রোগীদের এবং শহরের বিশেষজ্ঞ ডাক্তারদের মধ্যে সেতুবন্ধন তৈরি করতে
            ডিজাইন করা হয়েছে।
          </p>
          <p className="text-lg text-gray-700">
            মেডিমেট একটি নতুন চিকিৎসা অ্যাপ্লিকেশন যা বিশেষভাবে স্তন ক্যান্সার
            রোগীদের জন্য ডিজাইন করা হয়েছে। এই অ্যাপটি ঢাকা শহরের বাইরে এবং
            ভিতরের বসবাসকারী রোগীদের জন্য বিশেষজ্ঞ ডাক্তারদের সাথে সংযোগ
            স্থাপনকে সহজতর করে।
          </p>
        </div>
      </div>
     </div>
    </section>
  );
};

export default AboutMedimate;
