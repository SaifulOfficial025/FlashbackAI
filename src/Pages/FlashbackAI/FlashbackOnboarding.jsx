import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Step1_Upload } from './Step1_Upload';
import { Step2_Style } from './Step2_Style';
import { Step3_Loading } from './Step3_Loading';
import { Step4_Final } from './Step4_Final';
import { StepIndicator } from './StepIndicator';
import Header from '../../Shared/Header';
import AnnouncementBar from '../../Shared/AnnouncementBar';
import Footer from '../../Shared/Footer';
import { Step5_Login } from './Step5_Login';

export default function FlashbackOnboarding() {
  const [step, setStep] = useState(1);

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => setStep(step + 1);

  return (
    <div className="min-h-screen bg-[#fdfcfb] font-sans selection:bg-[#7c602e]/20">
      <AnnouncementBar/>
      {/* Navigation Header */}
      <header className="px-6 md:px-12 py-6 flex items-center justify-between border-b border-gray-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <button 
          onClick={handleBack}
          disabled={step === 4}
          className={`text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm font-bold uppercase tracking-wider ${step === 4 ? 'opacity-0' : ''}`}
        >
          <ChevronLeft size={18} /> Back
        </button>
        
        <div className="text-2xl font-serif tracking-tight text-[#7c602e] font-bold">
            FlashbackAI
        </div>
        
        <div className="text-gray-400 text-sm font-bold tabular-nums">
            {Math.min(step, 3)} of 3
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-12 pb-24 px-6 max-w-5xl mx-auto">
        {/* Step dots only show for first 3 steps */}
        {step <= 3 && <StepIndicator currentStep={step} />}
        
        <div className="mt-8">
            {step === 1 && <Step1_Upload onNext={handleNext} />}
            {step === 2 && <Step2_Style onNext={handleNext} />}
            {step === 3 && <Step3_Loading onNext={handleNext} />}
            {step === 4 && <Step4_Final onNext={handleNext}/>}
        </div>
      </main>
      <Footer/>
    </div>
  );
}