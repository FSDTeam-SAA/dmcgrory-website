"use client";

import Image from "next/image";
import { useState } from "react";
import { ShieldCheck, ClipboardList, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

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

  // ✅ Subtle animations
  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/banner.jpeg"
            alt="Banner"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-5xl md:text-7xl font-bold"
          >
            Welcome to <span className="text-yellow-400">Our Service</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 text-gray-200 text-xl md:text-2xl max-w-3xl"
          >
            Submit your vehicle details using our quick and easy form.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-10 py-3 bg-[#07589E] border border-white text-white rounded-md text-lg font-medium hover:bg-[#064b85] transition cursor-pointer"
          >
            Get Started
          </motion.button>
        </motion.div>
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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {/* Item 1 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center px-6 md:border-r"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ShieldCheck size={40} className="text-[#07589E]" />
            </motion.div>

            <h3 className="mt-4 font-semibold text-lg">Secure & Confidential</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your information is safe and protected
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center px-6 md:border-r"
          >
            <ClipboardList size={40} className="text-[#07589E]" />
            <h3 className="mt-4 font-semibold text-lg">Quick & Easy</h3>
            <p className="mt-2 text-sm text-gray-600">
              Simple form, fast submission
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center px-6"
          >
            <HelpCircle size={40} className="text-[#07589E]" />
            <h3 className="mt-4 font-semibold text-lg">Free & No Obligation</h3>
            <p className="mt-2 text-sm text-gray-600">
              No cost, no pressure, no commitment
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
