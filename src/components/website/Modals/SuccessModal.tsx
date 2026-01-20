"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  dealerData: {
    dealerId: string;
    dealerName: string;
    email: string;
  } | null;
  onQuestionnaireStart: () => void;
}

export default function SuccessModal({
  isOpen,
  onOpenChange,
  dealerData,
  onQuestionnaireStart,
}: SuccessModalProps) {
  const handleContinue = () => {
    onOpenChange(false);
    onQuestionnaireStart();
  };

  if (!dealerData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden">
        {/* ===== Header ===== */}
        <DialogHeader className="px-6 py-8 border-b bg-green-50 text-center flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <CheckCircle2 className="text-green-600 w-10 h-10" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Verification Successful!
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 mt-2">
            Dealer ID:{" "}
            <span className="font-semibold text-gray-900">
              {dealerData.dealerId}
            </span>
          </DialogDescription>
        </DialogHeader>

        {/* ===== Content ===== */}
        <div className="px-8 py-8 space-y-6 text-center">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 inline-block w-full">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">
              Welcome back
            </p>
            <h3 className="text-xl font-bold text-[#07589E]">
              {dealerData.dealerName}
            </h3>
          </div>

          <p className="text-gray-600 text-sm">
            Thank you for verifying your information. You can now proceed to
            complete the questionnaire.
          </p>

          <button
            onClick={handleContinue}
            className="w-full h-12 flex items-center justify-center gap-2 rounded-lg text-base font-semibold bg-[#07589E] text-white hover:bg-[#064b85] transition shadow-lg shadow-blue-100 cursor-pointer"
          >
            Go to Questionnaire
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
