"use client";

import Image from "next/image";

export default function AppSection() {
  return (
    <section className="py-0 md:py-8 lg:px-8 px-0">
      <div className="bg-[#C1426D] md:rounded-lg pt-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-0">
          {/* Left Content */}
          <div className="lg:text-left lg:w-1/2 space-y-6 flex flex-col justify-center">
            <h3 className="text-white text-xl font-medium">
              Working for Your Better Health.
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              Download the Medimate App <br className="hidden sm:block" />
              today!
            </h2>
            <p className="text-white text-sm">
              Scan the QR code to get the app now
            </p>

            {/* QR Code */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Image
                src="/assets/images/qr.png"
                alt="QR Code"
                width={100}
                height={100}
                className="w-24 h-24"
              />
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-row justify-center lg:justify-start gap-4">
              <Image
                src="/assets/images/play.png"
                alt="Google Play"
                width={150}
                height={50}
                className="w-36 cursor-pointer"
              />
              <Image
                src="/assets/images/apple.png"
                alt="App Store"
                width={150}
                height={50}
                className="w-36 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Content: App Mockup Images */}
          <div className="w-full flex justify-center lg:justify-end lg:w-1/2 mt-10 relative">
            <div className="">
              <Image
                src="/assets/images/mobile-app.png"
                alt="App Screen 1"
                width={500}
                height={0}
               // sizes="100vw"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
