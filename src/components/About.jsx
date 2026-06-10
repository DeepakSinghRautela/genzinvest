
export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
              alt="Financial Advisors"
              className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
            />

            {/* Floating Stats Card */}
            <div
              className="
              absolute
              -bottom-8
              -right-6
              bg-[#011A41]
              text-white
              p-6
              rounded-2xl
              shadow-2xl
              border
              border-[#D4AF37]/30
              "
            >
              <h3 className="text-4xl font-bold text-[#D4AF37]">
                ₹100Cr+
              </h3>

              <p className="mt-2 text-sm">
                Assets Managed
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="text-[#D4AF37] font-semibold tracking-[4px] uppercase">
              About GenZInvest
            </span>

            <h2 className="text-5xl font-bold text-[#011A41] mt-4 leading-tight">
              Helping You Build
              <br />
              Wealth With Confidence
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              At GenZInvest, we believe that financial success
              begins with informed decisions. Our team provides
              personalized wealth management, retirement
              planning, investment advisory, insurance
              solutions, and tax-efficient strategies designed
              to help you achieve your financial goals.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Whether you're just starting your investment
              journey or managing a growing portfolio, our
              advisors work closely with you to create
              customized solutions that align with your future
              aspirations.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <p className="font-medium">
                  Personalized Financial Planning
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <p className="font-medium">
                  Wealth Creation Strategies
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <p className="font-medium">
                  Retirement Planning
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <p className="font-medium">
                  Tax Optimization
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              className="
              mt-10
              bg-[#011A41]
              hover:bg-[#02285f]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
              "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-24">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#011A41]">
              500+
            </h3>

            <p className="text-gray-600 mt-2">
              Happy Clients
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#011A41]">
              ₹100Cr+
            </h3>

            <p className="text-gray-600 mt-2">
              Assets Managed
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#011A41]">
              10+
            </h3>

            <p className="text-gray-600 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center shadow-lg">
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