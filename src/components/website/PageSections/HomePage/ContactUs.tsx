"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

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
    console.log("✅ Contact Form Submit Data:", data);

    // optional: reset after submit
    reset();
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Outer Box (like screenshot) */}
        <div className="border border-blue-300 rounded-2xl px-6 py-10 md:px-12 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* ================= FORM ================= */}
            <div className="md:pl-6">
              <p className="text-xs text-gray-700">Get in touch</p>
              <p className="mt-2 text-sm text-gray-600 max-w-xs leading-relaxed">
                Our friendly team would love to hear from you.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                {/* First + Last */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                {/* Email */}
                <div className="text-left">
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
                </div>

                {/* Phone */}
                <div className="text-left">
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
                </div>

                {/* Message */}
                <div className="text-left">
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
                </div>

                {/* Checkbox */}
                <div className="text-left">
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
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#07589E] text-white py-2.5 rounded-md hover:bg-[#064b85] transition text-xs font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>

            {/* ================= IMAGE (BIGGER) ================= */}
            <div className="flex justify-center md:justify-end md:pr-6">
              <div className="relative w-full max-w-[420px] h-[540px] md:h-[620px] rounded-sm overflow-hidden border-2 border-blue-600">
                <Image
                  src="/images/contact.jpg"
                  alt="Contact Us"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
