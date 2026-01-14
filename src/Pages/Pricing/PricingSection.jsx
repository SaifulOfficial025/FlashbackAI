import React, { useState } from "react";
import {
  Check,
  Star,
  Sparkles,
  Wind,
  History,
  Ghost,
  Sun,
  Leaf,
  Hourglass,
  Activity,
} from "lucide-react";
import { Button } from "../FlashbackAI/Button";
import { Link } from "react-router-dom";
import ReliveImg from "../../../public/moment-1.png";
import Agesightimg from "../../../public/cartoon.png";
import CartoonImg from "../../../public/cartoon.png";
import PolaroidImg from "../../../public/polaroid.jpg";
import FutureBabyImg from "../../../public/baby.jpeg";
import WeddingImg from "../../../public/wedding.webp";
import ValentineImg from "../../../public/valentine.jpg";
import DogVideoImg from "../../../public/dog.jpg";

const themes = [
  {
    id: "relive",
    name: "Relive",
    subtitle: "8 Styles",
    image: ReliveImg,
    badge: "New",
  },
  {
    id: "age-shift",
    name: "Age Shift",
    subtitle: "1 Default Style",
    image: Agesightimg,
  },
  {
    id: "cartoon",
    name: "Cartoon",
    subtitle: "1 Default Style",
    image: CartoonImg,
  },
  {
    id: "polaroid",
    name: "Polaroid Style Video",
    subtitle: "Upload 2 Images",
    image: PolaroidImg,
    requiresTwoImages: true,
  },
  {
    id: "future-baby",
    name: "Future Baby",
    subtitle: "Upload 2 Images",
    image: FutureBabyImg,
    requiresTwoImages: true,
  },
  {
    id: "wedding",
    name: "Wedding",
    subtitle: "Upload 2 Images",
    image: WeddingImg,
    requiresTwoImages: true,
  },
  {
    id: "valentine",
    name: "Valentine",
    subtitle: "Upload 2 Images",
    image: ValentineImg,
    requiresTwoImages: true,
  },
  {
    id: "dog-video",
    name: "Dog Video",
    subtitle: "1 Default Style",
    image: DogVideoImg,
  },
];

const packages = [
  {
    id: "weekly",
    name: "Weekly Plan",
    price: "$2.49",
    original: null,
    label: null,
    desc: "4 Credits Every Week",
  },
  {
    id: "family",
    name: "Fortnightly Package",
    price: "$0.99",
    original: "$2.49",
    label: "MOST POPULAR PACKAGE",
    desc: "4 Credits Every Week",
  },
  {
    id: "monthly",
    name: "Monthly Package",
    price: "$0.87",
    original: "$2.19",
    label: "BEST VALUE",
    desc: "4 Credits Every Week",
  },
];

export const PricingSection = () => {
  const [selected, setSelected] = useState("family");

  return (
    <section className="max-w-5xl mx-auto text-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 leading-tight font-bold">
        Watch Your Photo Come Alive Before Your Eyes
      </h1>
      <p className="text-[#7c602e] font-medium mb-6 text-2xl">
        Your exclusive{" "}
        <span className="text-[#7c602e] font-bold underline decoration-yellow-400 decoration-2">
          60%
        </span>{" "}
        discount is active — don't miss it
      </p>

      {/* Social Proof Mini */}
      <div className=" items-center border border-primary px-4 py-2 rounded-full inline-flex justify-center gap-2 mb-10">
        <div className="flex -space-x-1.5">
          <img src="/trusted.png" alt="" />
        </div>
        <p className="text-md font-light">Excellent</p>
        <div className="flex text-primary gap-1">
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />
        </div>
        <span className="text-[12px] text-black font-bold uppercase tracking-wider">
          4.7 (2,487 Happy Users)
        </span>
      </div>

      {/* Features List */}
      <div className="text-left mb-12">
        <h3 className="text-center font-bold text-lg mb-2">What's included?</h3>
        <p className="text-center mb-10 text-lg">
          Everything you need to tum a single photo into a moment that feels
          alive again.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-xl group bg-gray-100 aspect-[3/4]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Badge */}
              {/* {theme.badge && (
                <span className="absolute top-3 right-3 text-[10px] bg-green-500 text-white px-2.5 py-1 rounded-md font-bold uppercase tracking-tight">
                  {theme.badge}
                </span>
              )} */}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="font-bold text-white text-lg mb-1">
                  {theme.name}
                </h3>
                <p className="text-xs text-white/80 font-medium">
                  {theme.subtitle}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="space-y-5 mb-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="relative group">
            {pkg.label && (
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 bg-yellow-400 text-[9px] font-black px-3 py-0.5 rounded-full text-black whitespace-nowrap">
                {pkg.label}
              </div>
            )}
            <label
              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selected === pkg.id
                  ? "border-yellow-400 bg-white ring-1 ring-yellow-400"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="plan"
                className="hidden"
                onChange={() => setSelected(pkg.id)}
                checked={selected === pkg.id}
              />
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selected === pkg.id
                      ? "border-yellow-400"
                      : "border-gray-300"
                  }`}
                >
                  {selected === pkg.id && (
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">{pkg.name}</p>
                  {pkg.desc && (
                    <p className="text-[9px] font-bold text-gray-400">
                      {pkg.desc}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">{pkg.price}</p>
                <p className="text-[10px] text-gray-400 my-2 leading-none">
                  Per Video
                </p>
                <p className="text-[10px] text-gray-400 line-through leading-none">
                  {pkg.original}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>

      <Link to="/upsale">
        <Button className="w-2/3 py-4 text-lg mb-4 uppercase">
          Claim Offer
        </Button>
      </Link>
      <div className="flex items-center justify-center gap-1.5 text-[9px] text-gray-400 font-bold mb-4">
        <Check size={10} className="text-green-500" /> SECURE CHECKOUT • 100%
        SATISFACTION GUARANTEED
      </div>

      {/* Payment Icons */}
      <div className="flex justify-center gap-3  mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
          className="h-4"
          alt="Visa"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          className="h-6"
          alt="Mastercard"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
          className="h-5"
          alt="Paypal"
        />
      </div>

      <p className="text-[9px] text-gray-400 leading-relaxed px-4">
        By continuing, you agree to our Terms of Service and Privacy Policy.
        Pricing is subject to local taxes where applicable. Subscriptions renew
        automatically unless cancelled in settings 24h prior to period end.
      </p>
    </section>
  );
};
