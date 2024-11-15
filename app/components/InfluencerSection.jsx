"use client";
import React from "react";
import influencer1 from "../../public/images/stockPictures/ourInfluencers/Minka Kelly x Live Fashionable  — Austin Lord 1.png";
import influencer2 from "../../public/images/stockPictures/ourInfluencers/male.png";
import influencer3 from "../../public/images/stockPictures/ourInfluencers/_ (2) 1.png";
import Image from "next/image";

const InfluencersSection = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-black text-white">
      <h2 className="text-6xl font-semibold text-center text-teal-400 mb-6">
        Our Influencers
      </h2>

      <div className="flex flex-wrap justify-center space-x-8 gap-y-6">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
          <Image
            src={influencer2}
            alt="Influencer 2"
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
          <Image
            src={influencer1}
            alt="Influencer 1"
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
          <Image
            src={influencer3}
            alt="Influencer 3"
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
          <Image
            src={influencer2}
            alt="Influencer 4"
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default InfluencersSection;