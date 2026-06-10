import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is wealth management?",
      answer:
        "Wealth management is a comprehensive financial service that helps individuals grow, protect, and manage their wealth through investment planning, risk management, retirement strategies, and financial advisory."
    },
    {
      question: "How do I start investing?",
      answer:
        "Getting started is simple. Our advisors assess your financial goals, risk tolerance, and investment horizon before creating a personalized investment strategy."
    },
    {
      question: "What services do you provide?",
      answer:
        "We offer Investment Products Distribution, Financial Information Services, Insurance Products, Retirement Planning, Tax Planning, Wealth Management, Estate Planning, and Goal-Based Investing."
    },
    {
      question: "Can you help with retirement planning?",
      answer:
        "Yes. We help clients build retirement strategies that ensure financial independence and sustainable income throughout retirement."
    },
    {
      question: "How often is my portfolio reviewed?",
      answer:
        "We continuously monitor and periodically review portfolios to ensure they remain aligned with your financial goals and changing market conditions."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-gradient-to-b from-[#F8F5EF] to-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#011A41] font-semibold">
            FAQs
          </span>

          <h2 className="text-5xl font-bold text-[#011A41] mt-5">
            Frequently Asked Questions
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
            Find answers to the most common questions about our
            investment, wealth management, and financial planning services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                border
                border-gray-100
                overflow-hidden
                transition-all
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left
                  p-6
                  hover:bg-[#F8FAFC]
                  transition
                "
              >
                <h3 className="font-semibold text-lg text-[#011A41]">
                  {faq.question}
                </h3>

                <span className="text-2xl text-[#D4AF37]">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-100 mb-4" />

                  <p className="text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#011A41] rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h3>

          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Our financial experts are here to help you make informed
            decisions and achieve your financial goals.
          </p>

          <button className="mt-6 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Contact Our Advisors
          </button>
        </div>
      </div>
    </section>
  );
}