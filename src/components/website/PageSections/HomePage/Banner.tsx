"use client";

import Image from "next/image";
import { useState } from "react";
import { ShieldCheck, ClipboardList, HelpCircle } from "lucide-react";
import DealerModal from "@/components/website/Modals/DealerModal";
import SuccessModal from "@/components/website/Modals/SuccessModal";
import QuestionnaireModal from "@/components/website/Modals/QuestionnaireModal";
import { VerifyDealerResponse } from "@/lib/api";

export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showQuestionnaireModal, setShowQuestionnaireModal] = useState(false);
  const [verificationData, setVerificationData] = useState<
    VerifyDealerResponse["data"] | null
  >(null);

  const handleVerificationSuccess = (data: VerifyDealerResponse["data"]) => {
    setVerificationData(data);
    setShowSuccessModal(true);
  };

  const handleStartQuestionnaire = () => {
    setShowSuccessModal(false);
    setShowQuestionnaireModal(true);
  };

  return (
    <>
      {/* ... (Banner content) ... */}
      <section className="relative w-full h-[500px]">
        {/* Background Image */}
        <Image
          src="/images/banner.jpeg"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Welcome to <span className="text-yellow-400">Our Service</span>
          </h1>

          <p className="mt-4 text-gray-200 text-xl md:text-2xl max-w-3xl">
            Submit your vehicle details using our quick and easy form.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-10 py-3 bg-[#07589E] border border-white text-white rounded-md text-lg font-medium hover:bg-[#064b85] transition cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Dealer ID Modal */}
      <DealerModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSuccess={handleVerificationSuccess}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onOpenChange={setShowSuccessModal}
        dealerData={verificationData}
        onQuestionnaireStart={handleStartQuestionnaire}
      />

      {/* Questionnaire Modal */}
      <QuestionnaireModal
        isOpen={showQuestionnaireModal}
        onOpenChange={setShowQuestionnaireModal}
      />

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center px-6 md:border-r">
            <ShieldCheck size={40} className="text-[#07589E]" />
            <h3 className="mt-4 font-semibold text-lg">
              Secure & Confidential
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Your information is safe and protected
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center px-6 md:border-r">
            <ClipboardList size={40} className="text-[#07589E]" />
            <h3 className="mt-4 font-semibold text-lg">Quick & Easy</h3>
            <p className="mt-2 text-sm text-gray-600">
              Simple form, fast submission
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center px-6">
            <HelpCircle size={40} className="text-[#07589E]" />
            <h3 className="mt-4 font-semibold text-lg">Free & No Obligation</h3>
            <p className="mt-2 text-sm text-gray-600">
              No cost, no pressure, no commitment
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
