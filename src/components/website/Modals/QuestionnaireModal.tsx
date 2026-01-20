"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useQuestionnaireStore } from "@/lib/store/useQuestionnaireStore";
import { CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitDealerForm } from "@/lib/api";

interface QuestionnaireModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuestionnaireModal({
  isOpen,
  onOpenChange,
}: QuestionnaireModalProps) {
  const { data, step, setStep, updateData, reset } = useQuestionnaireStore();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate years from current back to 1950
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, i) => currentYear - i,
  );

  const auctions = ["Orlando", "CRL", "TRA", "CRA"];
  const colors = [
    "Black",
    "White",
    "Silver",
    "Gray",
    "Blue",
    "Red",
    "Tan",
    "Gray Fabric",
  ];
  const models = [
    "Honda Civic",
    "Toyota Camry",
    "Ford F-150",
    "Chevrolet Silverado",
    "Tesla Model 3",
  ];

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      try {
        console.log("🚀 Final Questionnaire Submission Data:", data);
        const res = await submitDealerForm(data);
        if (res.success) {
          setShowSuccess(true);
          toast.success("Questionnaire submitted successfully!");
        } else {
          toast.error(res.message || "Failed to submit questionnaire");
        }
      } catch (err) {
        console.error("Submission Error:", err);
        toast.error("An unexpected error occurred during submission.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    onOpenChange(false);
    if (showSuccess) {
      // Delay reset slightly to let the modal close animation finish if any
      setTimeout(() => {
        reset();
        setShowSuccess(false);
      }, 300);
    }
  };

  const stepVariants: Variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const renderStep = () => {
    if (showSuccess) {
      return (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="py-12 flex flex-col items-center text-center space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            className="bg-green-100 p-4 rounded-full"
          >
            <CheckCircle2 className="text-green-600 w-12 h-12" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900">
            Submission Successful!
          </h2>
          <p className="text-gray-600 max-w-xs">
            Your vehicle details have been recorded. Thank you for your
            submission.
          </p>
          <button
            onClick={handleClose}
            className="mt-6 px-8 py-2 bg-[#07589E] text-white rounded-md hover:bg-[#064b85] transition shadow-lg hover:shadow-[#07589E]/20"
          >
            Close
          </button>
        </motion.div>
      );
    }

    return (
      <AnimatePresence mode="wait" custom={step}>
        <motion.div
          key={step}
          custom={step}
          variants={stepVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {step === 1 && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Select Auction
                </label>
                <select
                  className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                  value={data.auction}
                  onChange={(e) => updateData({ auction: e.target.value })}
                >
                  <option value="">Select Auction</option>
                  {auctions.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Vehicle Year
                </label>
                <select
                  className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                  value={data.vehicleYear}
                  onChange={(e) => updateData({ vehicleYear: e.target.value })}
                >
                  <option value="">Select Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">VIN</label>
                <input
                  type="text"
                  placeholder="Enter VIN"
                  className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                  value={data.vin}
                  onChange={(e) => updateData({ vin: e.target.value })}
                />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Mileage
                </label>
                <input
                  type="number"
                  placeholder="Enter Mileage"
                  className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                  value={data.mileage}
                  onChange={(e) => updateData({ mileage: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Choose Interior Color
                </label>
                <select
                  className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                  value={data.interiorChoice}
                  onChange={(e) =>
                    updateData({ interiorChoice: e.target.value })
                  }
                >
                  <option value="">Select Color</option>
                  {colors.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Model
                  </label>
                  <select
                    className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                    value={data.model}
                    onChange={(e) => updateData({ model: e.target.value })}
                  >
                    <option value="">Select Model</option>
                    {models.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Series
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. LX, Sport"
                    className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                    value={data.series}
                    onChange={(e) => updateData({ series: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Floor Price
                </label>
                <input
                  type="number"
                  placeholder="Enter Floor Price"
                  className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                  value={data.floorPrice}
                  onChange={(e) => updateData({ floorPrice: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Announcement
                </label>
                <input
                  type="text"
                  placeholder="Enter Announcement"
                  className="w-full h-11 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] transition-all"
                  value={data.announcement}
                  onChange={(e) => updateData({ announcement: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Remarks
                </label>
                <textarea
                  placeholder="Enter any additional remarks"
                  className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#07589E] resize-none transition-all"
                  value={data.remarks}
                  onChange={(e) => updateData({ remarks: e.target.value })}
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden border-none shadow-2xl">
        {!showSuccess && (
          <DialogHeader className="px-6 py-4 border-b bg-gray-50/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-lg font-semibold text-gray-800">
                  Vehicle Questionnaire
                </DialogTitle>
                <DialogDescription>Step {step} of 3</DialogDescription>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((s) => (
                  <motion.div
                    key={s}
                    animate={{
                      width: s === step ? 32 : 8,
                      backgroundColor: s <= step ? "#07589E" : "#E5E7EB",
                    }}
                    className="h-1.5 rounded-full transition-colors"
                  />
                ))}
              </div>
            </div>
          </DialogHeader>
        )}

        <div className="px-6 py-2 overflow-hidden">{renderStep()}</div>

        {!showSuccess && (
          <div className="px-6 py-4 border-t flex justify-between bg-gray-50/50 backdrop-blur-sm">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-30 cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="relative flex items-center gap-1 bg-[#07589E] text-white px-6 py-2 rounded-md hover:bg-[#064b85] transition-all text-sm font-medium cursor-pointer disabled:opacity-50 shadow-md hover:shadow-[#07589E]/20"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-1"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </motion.div>
                ) : (
                  <motion.div
                    key="next"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-1"
                  >
                    {step === 3 ? "Submit" : "Next"}
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
