"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    },
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", { id: toastId });
        reset();
      } else {
        toast.error(result.error || "Failed to send message", { id: toastId });
      }
    } catch (error) {
      console.error("✅ Contact Form Submit Error:", error);
      toast.error("An unexpected error occurred. Please try again later.", {
        id: toastId,
      });
    }
  };

  // ✅ subtle animations
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Outer Box */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="border border-blue-300 rounded-2xl px-6 py-10 md:px-12 md:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* ================= FORM ================= */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="md:pl-6"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-xs text-gray-700"
              >
                Get in touch
              </motion.p>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-2 text-sm text-gray-600 max-w-xs leading-relaxed"
              >
                Our friendly team would love to hear from you.
              </motion.p>

              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
                variants={stagger}
              >
                {/* First + Last */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="text-left">
                    <label className="text-xs text-gray-700">First name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      className={`mt-2 w-full border rounded-md px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500 ${
                        errors.firstName ? "border-red-400" : "border-gray-200"
                      }`}
                      {...register("firstName", {
                        required: "First name is required",
                        minLength: {
                          value: 2,
                          message: "Minimum 2 characters",
                        },
                      })}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="text-left">
                    <label className="text-xs text-gray-700">Last name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className={`mt-2 w-full border rounded-md px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500 ${
                        errors.lastName ? "border-red-400" : "border-gray-200"
                      }`}
                      {...register("lastName", {
                        required: "Last name is required",
                        minLength: {
                          value: 2,
                          message: "Minimum 2 characters",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-left"
                >
                  <label className="text-xs text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className={`mt-2 w-full border rounded-md px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-left"
                >
                  <label className="text-xs text-gray-700">Phone number</label>
                  <input
                    type="text"
                    placeholder="US +1 (555) 000-0000"
                    className={`mt-2 w-full border rounded-md px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors.phone ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: {
                        value: 8,
                        message: "Phone number too short",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-left"
                >
                  <label className="text-xs text-gray-700">Message</label>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className={`mt-2 w-full border rounded-md px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500 resize-none ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Minimum 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>

                {/* Checkbox */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-left"
                >
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded"
                      {...register("agree", {
                        required: "You must agree to the privacy policy",
                      })}
                    />
                    <span>
                      You agree to our friendly{" "}
                      <a href="#" className="text-blue-600 underline">
                        privacy policy
                      </a>
                      .
                    </span>
                  </div>

                  {errors.agree && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.agree.message}
                    </p>
                  )}
                </motion.div>

                {/* Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="w-full bg-[#07589E] text-white py-2.5 rounded-md hover:bg-[#064b85] transition text-xs font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* ================= IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex justify-center md:justify-end md:pr-6"
            >
              <div className="relative w-full max-w-[420px] h-[540px] md:h-[620px] rounded-sm overflow-hidden border-2 border-blue-600">
                <Image
                  src="/images/contact.jpg"
                  alt="Contact Us"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
