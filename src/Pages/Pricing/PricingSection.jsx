import React, { useState } from 'react';
import { Check, Star, Sparkles, Wind, History, Ghost, Sun, Leaf, Hourglass, Activity } from 'lucide-react';
import { Button } from '../FlashbackAI/Button';

const includedStyles = [
  { name: 'Memory Match Motion', desc: 'AI suggests the higher impact movement for your specific photo style.', icon: <Sparkles size={16} className="text-yellow-500" /> },
  { name: 'Gentle Sway', desc: 'Subtle movement that breathes life into portraits with soft, natural motion.', icon: <Wind size={16} className="text-green-500" /> },
  { name: 'Vintage Film', desc: 'Classic cinema feel with subtle grain and nostalgic motion effects.', icon: <History size={16} className="text-blue-400" /> },
  { name: 'Dreamy Float', desc: 'Ethereal, cloud-like movement perfect for scenic and landscape memories.', icon: <Ghost size={16} className="text-gray-400" /> },
  { name: 'Warm Glow', desc: 'Soft lighting shifts that add warmth and depth to cherished moments.', icon: <Sun size={16} className="text-orange-400" /> },
  { name: 'Nature Breeze', desc: 'Organic motion that brings outdoor scenes to life with gentle wind effects.', icon: <Leaf size={16} className="text-emerald-500" /> },
  { name: 'Timeless Fade', desc: 'Elegant transitions that evoke the passage of time with grace.', icon: <Hourglass size={16} className="text-amber-600" /> },
  { name: 'Joyful Pulse', desc: 'Vibrant energy for celebrations and happy moments full of life.', icon: <Activity size={16} className="text-rose-500" /> },
];

const packages = [
  { id: 'weekly', name: 'Weekly Plan', price: '$2.49', original: '$6.99', label: null, desc: "4 Credits Every Week" },
  { id: 'family', name: 'Fortnightly Package', price: '$2.49', original: '$12.99', label: 'MOST POPULAR PACKAGE',  desc: "4 Credits Every Week" },
  { id: 'monthly', name: 'Monthly Package', price: '$9.49', original: '$24.99', label: 'BEST VALUE', desc: "4 Credits Every Week" },
];

export const PricingSection = () => {
  const [selected, setSelected] = useState('family');

  return (
    <section className="max-w-2xl mx-auto text-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 leading-tight font-bold">
        Watch Your Photo Come Alive Before Your Eyes
      </h1>
      <p className="text-gray-600 font-medium mb-6 text-2xl">
        Your exclusive{" "}
        <span className="text-[#7c602e] font-bold underline decoration-yellow-400 decoration-2">
          60%
        </span>{" "}
        discount is active — don't miss it
      </p>

      {/* Social Proof Mini */}
      <div className=" items-center border border-primary px-4 py-2 rounded-full inline-flex justify-center gap-2 mb-10">
        <div className="flex -space-x-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border border-white bg-gray-200"
            />
          ))}
        </div>
        <p className="text-xs font-light">Excellent</p>
        <div className="flex text-primary gap-1">
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />{" "}
          <Star size={12} fill="currentColor" />
        </div>
        <span className="text-[10px] text-black font-bold uppercase tracking-wider">
          4.7 (2,487 Happy Users)
        </span>
      </div>

      {/* Features List */}
      <div className="text-left mb-12">
        <h3 className="text-center font-bold text-lg mb-6">What's included?</h3>
        <div className="space-y-5">
          {includedStyles.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1">{item.icon}</div>
              <div>
                <p className="text-md font-bold text-gray-800">{item.name}</p>
                <p className="text-[10px] text-gray-500 leading-tight">
                  {item.desc}
                </p>
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

      <Button className="w-2/3 py-4 text-lg mb-4 uppercase">Claim Offer</Button>
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