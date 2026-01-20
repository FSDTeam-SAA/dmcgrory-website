"use client";

import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { verifyDealer, VerifyDealerResponse } from "@/lib/api";
import { useQuestionnaireStore } from "@/lib/store/useQuestionnaireStore";

type DealerFormValues = {
  dealerId: string;
};

interface DealerModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: (data: VerifyDealerResponse["data"]) => void;
}

export default function DealerModal({
  isOpen,
  onOpenChange,
  onSuccess,
}: DealerModalProps) {
  const setDealerId = useQuestionnaireStore((state) => state.setDealerId);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DealerFormValues>({
    defaultValues: {
      dealerId: "",
    },
  });

  const onSubmit = async (data: DealerFormValues) => {
    try {
      const res = await verifyDealer(data);
      console.log("✅ Dealer Verified:", res);
      if (res.success && res.exists) {
        setDealerId(res.data.dealerId);
        reset();
        onOpenChange(false);
        onSuccess(res.data);
      } else {
        // Handle case where dealer not found if needed
        console.warn("Dealer not found or verification failed:", res.message);
      }
    } catch (err) {
      console.error("Error verifying dealer:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden border-none shadow-2xl">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* ===== Header ===== */}
              <DialogHeader className="px-6 py-6 border-b bg-gray-50/50 backdrop-blur-sm text-center">
                <DialogTitle className="text-xl font-bold text-gray-900">
                  Enter Dealer Information
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-600 mt-1">
                  Please provide your Dealer ID to continue.
                </DialogDescription>
              </DialogHeader>

              {/* ===== Form ===== */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 py-10 space-y-8 text-center"
              >
                <div className="space-y-4">
                  <label
                    htmlFor="dealerId"
                    className="block text-sm font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Dealer ID
                  </label>

                  <div className="relative max-w-xs mx-auto group">
                    <BadgeCheck
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.dealerId ? "text-red-400" : "text-gray-400 group-focus-within:text-[#07589E]"}`}
                    />
                    <input
                      id="dealerId"
                      placeholder="Enter your Dealer ID"
                      className={`h-12 w-full rounded-xl border bg-white pl-12 pr-4 text-base outline-none transition-all focus:ring-4 ${
                        errors.dealerId
                          ? "border-red-400 focus:ring-red-100"
                          : "border-gray-200 focus:border-[#07589E] focus:ring-[#07589E]/10"
                      }`}
                      {...register("dealerId", {
                        required: "Dealer ID is required",
                        minLength: {
                          value: 3,
                          message: "Dealer ID must be at least 3 characters",
                        },
                      })}
                    />
                  </div>

                  <AnimatePresence>
                    {errors.dealerId && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs font-medium text-red-500 mt-2"
                      >
                        {errors.dealerId.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* ===== Actions ===== */}
                <div className="flex justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="h-11 px-8 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all active:scale-95 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 px-10 rounded-xl text-sm font-bold bg-[#07589E] text-white hover:bg-[#064b85] shadow-lg hover:shadow-[#07589E]/20 transition-all active:scale-95 disabled:opacity-60 cursor-pointer flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
