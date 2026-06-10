export default function WhyChooseUs() {
  const features = [
    {
      icon: "📈",
      title: "Personalized Financial Planning",
      description:
        "Customized investment strategies tailored to your goals, income, and risk profile."
    },
    {
      icon: "🛡️",
      title: "Transparent Advisory",
      description:
        "Clear recommendations with complete transparency and no hidden surprises."
    },
    {
      icon: "👨‍💼",
      title: "Experienced Experts",
      description:
        "Professional advisors with years of experience in wealth creation and portfolio management."
    },
    {
      icon: "🚀",
      title: "Long-Term Growth",
      description:
        "Focused on sustainable wealth generation and achieving financial independence."
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#011A41] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold text-[#011A41] mt-6">
            Your Trusted Financial Partner
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
            We combine expertise, transparency, and personalized
            strategies to help you achieve your financial goals with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                border
                border-gray-100
                hover:border-[#D4AF37]/40
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#011A41]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                  group-hover:bg-[#D4AF37]
                  group-hover:text-black
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#011A41] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#011A41]">
              500+
            </h3>
            <p className="text-gray-600 mt-2">
              Happy Clients
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#011A41]">
              ₹100Cr+
            </h3>
            <p className="text-gray-600 mt-2">
              Assets Managed
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#011A41]">
              98%
            </h3>
            <p className="text-gray-600 mt-2">
              Client Retention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}