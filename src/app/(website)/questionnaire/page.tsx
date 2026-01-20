"use client";

export default function QuestionnairePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Questionnaire
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Welcome! Please complete the following steps to provide us with more
          details about your fleet needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100"
            >
              <span className="w-10 h-10 rounded-full bg-[#07589E] text-white flex items-center justify-center font-bold mb-4">
                {step}
              </span>
              <h3 className="font-semibold text-gray-900">Step {step}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Description for step {step}
              </p>
            </div>
          ))}
        </div>

        <button className="px-8 py-3 bg-[#07589E] text-white rounded-md font-medium hover:bg-[#064b85] transition">
          Start Now
        </button>
      </div>
    </div>
  );
}
