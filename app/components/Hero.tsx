"use client";

import Button from "@/reusable/Button";
import InputField from "@/reusable/InputField";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <section className="bg-pink-100 h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4 mt-20 md:mt-0">
            স্তন ক্যান্সার চিকিৎসায় <br className="hidden sm:block" /> সহজ
            সমাধান!
          </h1>
          <p className="text-primary mb-6 leading-relaxed font-bold">
            বিশেষজ্ঞদের সাথে সরাসরি যোগাযোগ করুন
          </p>
          <p className="text-primary mb-6 leading-relaxed ">
            দেশের যেকোনো প্রান্ত থেকে বিশেষজ্ঞ ডাক্তারদের কাছে দ্রুত অনুরোধ{" "}
            <br className="hidden sm:block" />
            পাঠান এবং কয়েক ঘণ্টার মধ্যে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Button
              text="আরও জানুন"
              iconLeft={<ArrowRightIcon className="text-pink-600" />}
              className="bg-white text-pink-600 border border-pink-200 shadow hover:bg-pink-50"
              onClick={() => alert("Left Icon Button Clicked")}
            />
            <Button
              text="Book a Call"
              iconLeft={<PhoneIcon className="text-pink-600" />}
              className="bg-white text-pink-600 border border-pink-600 hover:bg-gray-100"
              onClick={() => alert("Book a Call clicked!")}
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-[#C1426D] rounded-lg shadow-lg lg:ml-auto p-6 lg:p-8 lg:w-[440px] lg:text-right">
          <h2 className="text-4xl font-bold text-[#FFC6D9] mb-4">
            Send a quick request
          </h2>
          <form className="space-y-4 ">
            <div className="flex gap-4">
              <InputField
                type="text"
                name="Full Name *"
                placeholder="Full Name *"
              />
              <InputField type="email" name="email" placeholder="Full Name *" />
            </div>
            <div className="flex gap-4">
              <InputField
                type="select"
                name="select"
                placeholder="Please Select"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />

              <InputField
                type="select"
                name="select"
                placeholder="4:00 Available"
                options={[
                  { value: "4:00 Available", label: "4:00 Available" },
                  { value: "5:00 Available", label: "5:00 Available" },
                  { value: "6:00 Available", label: "6:00 Available" },
                  { value: "7:00 Available", label: "7:00 Available" },
                  { value: "8:00 Available", label: "8:00 Available" },
                  { value: "9:00 Available", label: "9:00 Available" },
                  { value: "10:00 Available", label: "10:00 Available" },
                ]}
              />
            </div>
            <InputField type="textarea" name="message" placeholder="Message" />
            <div className="text-center">
              <Button
                text="Send Request"
                className=" bg-black text-white hover:bg-gray-800"
                onClick={() => alert("Form submitted!")}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
