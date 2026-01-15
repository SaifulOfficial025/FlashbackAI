import React, { useState } from "react";
import Button from "../../../Shared/Button";
import { Link } from "react-router-dom";

function Questions() {
  const [satisfaction, setSatisfaction] = useState("");
  const [reason, setReason] = useState("");
  const [ease, setEase] = useState("");
  const [unclear, setUnclear] = useState("");
  const [stopped, setStopped] = useState("");
  const [improvement, setImprovement] = useState("");

  const reasons = [
    "I wanted to bring an old family photo to life",
    "I wanted to surprise someone with a meaningful memory",
    "I was curious after seeing an ad or post",
    "I wanted to preserve memories before they fade",
    "I was testing it out to see how it works",
  ];

  const submit = (e) => {
    e.preventDefault();
    console.log({ satisfaction, reason, ease, unclear, stopped, improvement });
    // TODO: wire to API or analytics
    alert("Thanks — feedback submitted.");
  };

  return (
    <form onSubmit={submit} className="max-w-7xl mx-auto p-4 space-y-6">
      <h1 className="text-xl font-semibold">
        Complete a Short Survey & Receive 4 Free Video Credits
      </h1>

      <section className="space-y-3">
        <label className="text-md font-bold">
          Are you satisfied with our service?
        </label>
        <div className="flex items-center gap-3">
          {["😃", "🙂", "😐", "😕", "☹️"].map((emo, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setSatisfaction(String(i))}
              className={`w-9 h-9 rounded-md flex items-center justify-center border ${
                satisfaction === String(i)
                  ? "border-[#7c602e] bg-[#f7efe2]"
                  : "border-gray-200"
              }`}
            >
              <span className="text-lg">{emo}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <label className="text-md font-bold">
          What best describes why you tried PureMotion?
        </label>
        <div className="bg-white border rounded-lg p-4 space-y-2">
          {reasons.map((r) => (
            <label key={r} className="flex items-start gap-3">
              <input
                type="radio"
                name="reason"
                value={r}
                checked={reason === r}
                onChange={() => setReason(r)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">{r}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <label className="text-md font-bold">
          How easy was it to understand what PureMotion does?
        </label>
        <div className="bg-white border rounded-lg p-4 space-y-2">
          {[
            "Very easy",
            "Somewhat easy",
            "Neutral",
            "Somewhat confusing",
            "Very confusing",
          ].map((opt) => (
            <label key={opt} className="flex items-start gap-3">
              <input
                type="radio"
                name="ease"
                value={opt}
                checked={ease === opt}
                onChange={() => setEase(opt)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <label className="text-md font-bold">
          Which part of the website felt most unclear or confusing?
        </label>
        <div className="bg-white border rounded-lg p-4 space-y-2">
          {[
            "Uploading a photo",
            "Choosing an animation style",
            "Understanding pricing & credits",
            "Knowing what happens after upload",
            "Checkout & payment",
            "I didn't feel confused",
          ].map((opt) => (
            <label key={opt} className="flex items-start gap-3">
              <input
                type="radio"
                name="unclear"
                value={opt}
                checked={unclear === opt}
                onChange={() => setUnclear(opt)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <label className="text-md font-bold">
          What almost stopped you from continuing today?
        </label>
        <div className="bg-white border rounded-lg p-4 space-y-2">
          {[
            "I wasn't sure what the final video would look like",
            "I was unsure if it was worth the price",
            "I was worried about privacy or security",
            "I didn't have the right photo ready",
            "The process felt too long",
            "Nothing - I was happy to continue",
          ].map((opt) => (
            <label key={opt} className="flex items-start gap-3">
              <input
                type="radio"
                name="stopped"
                value={opt}
                checked={stopped === opt}
                onChange={() => setStopped(opt)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </section>

      <div>
        <section className="space-y-2 mb-6">
          <label className="text-sm font-bold">
            If you could change ONE thing about PureMotion, what would it be?
          </label>
          <textarea
            value={improvement}
            onChange={(e) => setImprovement(e.target.value)}
            placeholder="Tell us one thing you'd change"
            className="w-full border rounded-md p-2 h-10 text-sm resize-none bg-white"
          />
        </section>
        <Link to="/dashboard/thankyou">
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Share feedback
          </Button>
        </Link>
      </div>
    </form>
  );
}

export default Questions;
