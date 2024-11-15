"use client";
import React from "react";
import mountain from "../../public/images/stockPictures/travelSection/mountain.png";
import indiaGate from "../../public/images/stockPictures/travelSection/our curated travel itineraries/Frame 1182.png";
import munnar from "../../public/images/stockPictures/travelSection/our curated travel itineraries/Frame 1183.png";
import darjeeling from "../../public/images/stockPictures/travelSection/our curated travel itineraries/Frame 1575.png";
import influencer from "../../public/images/stockPictures/ourInfluencers/Minka Kelly x Live Fashionable  — Austin Lord 1.png";
import Image from "next/image";

const CenterCard = () => {
  return (
    <div className="text-white bg-[#181818]">
      <div className="  p-5">
        <nav className="flex justify-around p-4 bg-black text-white text-[16px] md:text-[32px] rounded-xl ">
          <a href="#" className="hover:underline hover:decoration-[#00dc82]">
            Travel
          </a>
          <a href="#" className="hover:underline hover:decoration-[#00dc82]">
            Digital
          </a>
          <a href="#" className="hover:underline hover:decoration-[#00dc82]">
            Brand
          </a>
          <a href="#" className="hover:underline hover:decoration-[#00dc82]">
            Merch
          </a>
        </nav>
      </div>

      <section
        className="relative text-center py-10 md:py-20 bg-gray-800 rounded-xl"
        style={{
          backgroundImage: `url(${mountain.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-9xl font-bold mb-2 md:mb-4 ">TRAVEL</h1>
        <p className="text-lg md:text-3xl max-w-md md:max-w-xl mx-auto px-4 md:px-0">
          Turn your travel experience into itinerary, travel package with VYB
          Store and share it with your true followers.
        </p>

        <section className="text-center py-10 md:py-20 ">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
            Explore Our Curated Travel Itineraries
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6">
            {[darjeeling, munnar, indiaGate, indiaGate].map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={item}
                  alt={`Itinerary ${index + 1}`}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                  <h3 className="text-lg md:text-xl font-semibold">
                    Location Name
                  </h3>
                  <p className="text-sm">Region Name</p>
                  <button className="flex items-center space-x-3 bg-white text-black font-semibold px-3 md:px-4 py-2 rounded-full shadow-lg w-40 md:w-60 mx-auto justify-between">
                    <p className="text-sm md:text-[18px]">Samira Hadid</p>
                    <Image
                      src={influencer}
                      width={30}
                      height={30}
                      alt="Samira Hadid"
                      className="rounded-full"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-20">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
            How to list?
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 px-6">
            {[
              "Create Itinerary",
              "Convert into Travel Package",
              "Earn by sharing",
            ].map((text, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">✈️</div>
                <p className="font-semibold text-lg md:text-xl">{`0${
                  index + 1
                }`}</p>
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="text-center py-4 text-xl md:text-4xl text-white">
          <p>You Curate Experience. We Make It Happen</p>
        </footer>
      </section>
    </div>
  );
};

export default CenterCard;