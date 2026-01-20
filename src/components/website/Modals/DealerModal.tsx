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

type DealerFormValues = {
  dealerId: string;
};

interface DealerModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DealerModal({
  isOpen,
  onOpenChange,
}: DealerModalProps) {
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
    console.log("✅ Dealer ID Submitted:", data.dealerId);
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden">
        {/* ===== Header ===== */}
        <DialogHeader className="px-6 py-6 border-b bg-gray-50 text-center">
          <DialogTitle className="text-lg font-semibold text-gray-800">
            Enter Dealer Information
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 mt-1">
            Please provide your Dealer ID to continue.
          </DialogDescription>
        </DialogHeader>

        {/* ===== Form ===== */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 py-8 space-y-6 text-center"
        >
          <div className="space-y-2">
            <label
              htmlFor="dealerId"
              className="block text-sm font-medium text-gray-700"
            >
              Dealer ID
            </label>

            <div className="relative max-w-xs mx-auto">
              <BadgeCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="dealerId"
                placeholder="Enter your Dealer ID"
                className={`h-11 w-full rounded-md border bg-white pl-10 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-[#07589E] ${
                  errors.dealerId ? "border-red-500" : "border-gray-300"
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

            {errors.dealerId && (
              <p className="text-xs text-red-500 mt-1">
                {errors.dealerId.message}
              </p>
            )}
          </div>

          {/* ===== Actions ===== */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="h-10 px-6 rounded-md text-sm border border-gray-300 text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 px-7 rounded-md text-sm font-medium bg-[#07589E] text-white hover:bg-[#064b85] transition disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Continue"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
