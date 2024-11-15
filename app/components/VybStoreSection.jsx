"use client";
import React from "react";
import a from "../../public/images/stockPictures/illustrations/a.png";
import b from "../../public/images/stockPictures/illustrations/b.png";
import c from "../../public/images/stockPictures/illustrations/c.png";
import d from "../../public/images/stockPictures/illustrations/d.png";
import Image from "next/image";

const VybStoreSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-6 py-12">
      <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start mb-6 md:mb-0 text-justify">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-green-400">
          From Creation to <br /> Monetization:{" "}
          <span className="text-green-400">Vyb Store</span> <br /> Has It All
        </h1>
      </div>

      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="font-semibold mb-4 text-3xl md:text-4xl">
            Trusted By <br /> Influencers
          </h2>
          <p className="text-gray-400 mb-4 text-xl md:text-2xl">
            A trusted platform for influencers to grow and earn.
          </p>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-40 h-40 md:w-56 md:h-56">
              <Image
                src={d}
                alt="Influencer 1"
                className="rounded-full max-w-full max-h-full"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Secured Data
          </h2>
          <p className="text-gray-400 mb-4 text-xl md:text-2xl">
            Advanced security measures to protect your valuable data.
          </p>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto">
            <Image
              src={a}
              alt="Secure Data Icon"
              className="rounded-full max-w-full max-h-full"
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Authentic Payment <br /> Partner
          </h2>
          <p className="text-gray-400 mb-4 text-xl md:text-2xl">
            Reliable, fast, and secure payments you can trust.
          </p>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto">
            <Image
              src={b}
              alt="Payment Icon"
              className="rounded-full max-w-full max-h-full"
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Monetize Your Influence
          </h2>
          <p className="text-gray-400 mb-4 text-xl md:text-2xl">
            Seamlessly turn your influence into consistent revenue.
          </p>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto">
            <Image
              src={c}
              alt="Monetize Icon"
              className="rounded-full max-w-full max-h-full"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VybStoreSection;