export default function InvestmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Goals",
      description:
        "We understand your financial objectives, lifestyle aspirations, and future requirements."
    },
    {
      number: "02",
      title: "Risk Assessment",
      description:
        "Our advisors evaluate your risk profile to create a balanced investment strategy."
    },
    {
      number: "03",
      title: "Portfolio Creation",
      description:
        "A personalized investment portfolio is designed based on your goals and timeline."
    },
    {
      number: "04",
      title: "Monitor & Grow",
      description:
        "We continuously monitor and optimize your portfolio for long-term wealth creation."
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-[#F8F5EF] to-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#011A41] font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold text-[#011A41] mt-5">
            How We Help You Build Wealth
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
            A simple, transparent, and proven process designed to
            help you achieve your financial goals confidently.
          </p>
        </div>

        {/* Process Cards */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-[#D4AF37]/20"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border
                border-gray-100
                hover:border-[#D4AF37]/40
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >
                {/* Number */}
                <div className="relative">
                  <div
                    className="
                    w-20
                    h-20
                    mx-auto
                    rounded-full
                    bg-[#011A41]
                    text-[#D4AF37]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    border-4
                    border-white
                    shadow-xl
                    "
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#011A41] mt-8 text-center">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-center mt-4 leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-[#011A41] rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Ready to Start Your Investment Journey?
          </h3>

          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Let our financial experts guide you toward smarter
            investment decisions and long-term wealth creation.
          </p>

          <button className="mt-6 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}