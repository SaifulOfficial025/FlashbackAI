import React, { useState, useRef } from "react";
import { Star, Camera, Check, X } from "lucide-react";

export const Step3_Upload = ({ onNext, selectedTheme }) => {
  const requiresTwoImages = selectedTheme?.requiresTwoImages || false;
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const maxFiles = requiresTwoImages ? 2 : 1;

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));

    if (validFiles.length > 0) {
      const newFiles = [...uploadedFiles, ...validFiles].slice(0, maxFiles);
      setUploadedFiles(newFiles);
    }
  };

  const handleBrowseClick = (e) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));

    if (validFiles.length > 0) {
      const newFiles = [...uploadedFiles, ...validFiles].slice(0, maxFiles);
      setUploadedFiles(newFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const canProceed = requiresTwoImages
    ? uploadedFiles.length === 2
    : uploadedFiles.length >= 1;

  return (
    <div className="max-w-2xl mx-auto text-center animate-in fade-in zoom-in-95 duration-500">
      <h1 className="text-4xl font-serif text-gray-900 mb-3 font-semibold">
        {requiresTwoImages
          ? "Upload two photos"
          : "Start with a photo you love"}
      </h1>
      <p className="text-gray-500 mb-8">
        {requiresTwoImages
          ? "Upload two images of people to create your memory"
          : "Upload a special memory to begin the magic."}
      </p>

      {/* Social Proof Badge */}
      <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm mb-8">
        <div className="flex -space-x-2">
          <img src="/trusted.png" alt="" />
          {/* {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"
            />
          ))} */}
        </div>
        <span className="text-xs font-bold text-gray-600">Excellent</span>
        <div className="flex text-primary gap-2 scale-75">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <span className="text-xs text-black font-medium">
          <span className="font-bold">4.7 </span> | 2,487 Happy Users
        </span>
      </div>

      {/* Success Stats */}
      <div className="bg-primary/5 rounded-2xl p-6 mb-8 flex items-center gap-6 max-w-sm mx-auto shadow-md text-left ">
        <div className="text-4xl font-serif text-[#7c602e] font-bold">94%</div>
        <div>
          <div className="text-sm font-bold text-gray-800">
            Upload Success Rate
          </div>
          <p className="text-xs text-black leading-tight">
            Most users upload an image on this step
          </p>
        </div>
      </div>

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-[#e5d5bc] rounded-[2rem] p-12 mb-8 cursor-pointer hover:bg-[#fdfcfb] transition-all group relative"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple={requiresTwoImages}
          onChange={handleFileSelect}
          className="hidden"
        />

        {uploadedFiles.length === 0 ? (
          <>
            <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Camera className="text-gray-400" size={28} />
            </div>
            <p className="text-gray-600 font-semibold mb-1">
              Drag & drop your {requiresTwoImages ? "photos" : "photo"} here
            </p>
            <p className="text-gray-400 text-sm mb-6 font-medium">Or</p>
            <button
              onClick={handleBrowseClick}
              className="bg-[#7c602e] text-white px-10 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:bg-[#6b5127] transition-colors"
            >
              Browse
            </button>
          </>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto ">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="relative group/item">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-40 object-cover rounded-xl border-2 border-gray-200"
                  />
                  <button
                    onClick={() => removeFile(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover/item:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                  <p className="text-xs text-gray-500 mt-2 truncate">
                    {file.name}
                  </p>
                </div>
              ))}

              {uploadedFiles.length < maxFiles && (
                <div
                  onClick={handleBrowseClick}
                  className="w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#7c602e] hover:bg-gray-50 transition-all"
                >
                  <Camera className="text-gray-400 mb-2" size={24} />
                  <p className="text-xs text-gray-500 font-medium">
                    Add{" "}
                    {requiresTwoImages && uploadedFiles.length === 1
                      ? "second"
                      : "another"}{" "}
                    photo
                  </p>
                </div>
              )}
            </div>

            {canProceed && (
              <button
                onClick={onNext}
                className="bg-[#7c602e] text-white px-10 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:bg-[#6b5127] transition-colors mt-6"
              >
                Continue
                {/* with */}
                {/* {uploadedFiles.length}{" "} */}
                {/* {uploadedFiles.length === 1 ? "photo" : "photos"} */}
              </button>
            )}
          </div>
        )}
      </div>

      {requiresTwoImages ? (
        <>
          <p className="text-[#7c602e] font-bold mb-2">
            Upload Two Images of People
          </p>
          <p className="text-xs text-gray-400 mb-8 max-w-xs mx-auto leading-relaxed">
            This theme requires two images of people to create your special
            memory.
          </p>
        </>
      ) : (
        <>
          <p className="text-[#7c602e] font-bold mb-2">
            Start With Just One Photo
          </p>
          <p className="text-xs text-gray-400 mb-8 max-w-xs mx-auto leading-relaxed">
            You can upload many more right after onboarding — this first photo
            simply helps us begin.
          </p>
        </>
      )}

      <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest bg-gray-50/50 py-3 rounded-full border border-gray-100">
        <Check size={14} className="text-green-500 stroke-[3px]" /> AI-guided
        animation styles - no guesswork
      </div>
    </div>
  );
};
