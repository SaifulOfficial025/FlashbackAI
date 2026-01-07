import React from "react";
import { ChevronLeft, ThumbsUp, ThumbsDown, UploadCloud } from "lucide-react";
import Button from "../../Shared/Button";

const handleBack = () => {
  // Use browser history as a safe default (avoids referencing undefined view/state)
  if (
    typeof window !== "undefined" &&
    window.history &&
    window.history.length > 0
  ) {
    window.history.back();
  }
};

function FinalResult() {
  return (
    <div className="max-w-full mx-auto p-6">
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-12 hover:text-gray-900 transition-colors uppercase tracking-widest"
        >
          <ChevronLeft size={16} /> Back
        </button>
      </div>

      <div className=" rounded-2xl overflow-hidden shadow-sm p-6">
        <div className="max-w-full  mx-auto">
          <div className="rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="/result.jpg"
              alt="Final result"
              className="w-full h-[520px] object-cover rounded-2xl"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <Button
              onClick={() => console.log("like")}
              size="sm"
              variant="secondary"
              className="bg-green-500 text-white px-4 py-2 hover:bg-green-600"
            >
              <ThumbsUp size={14} className="mr-2 stroke-[3px]" /> Like
            </Button>

            <Button
              onClick={() => console.log("dislike")}
              size="sm"
              variant="secondary"
              className="bg-red-500 text-white px-4 py-2 hover:bg-red-600"
            >
              <ThumbsDown size={14} className="mr-2 stroke-[3px]" /> Dislike
            </Button>
          </div>

          <div className="mt-6 text-left">
            <Button
              variant="primary"
              size="lg"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => console.log("share")}
            >
              <UploadCloud size={16} /> Share Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalResult;
