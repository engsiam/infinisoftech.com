/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#D44877] bg-opacity-90 z-50">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/logo.png"
              alt="Loading Logo"
              className="w-20 h-20 animate-pulse mb-4"
            />
            {/* <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div> */}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
