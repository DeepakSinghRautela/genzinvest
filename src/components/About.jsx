
export default function About() {
  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Hero */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full text-[#D4AF37]  text-4xl font-semibold">
            ABOUT US
          </span>

          <h1 className="text-3xl lg:text-6xl font-bold text-[#011A41] mt-6">
            Building Financial Confidence
            <span className="text-[#D4AF37]">
              {" "}For The Next Generation
            </span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg text-gray-600 leading-8">
            Modern financial solutions designed around people,
            guided by trust, and focused on long-term value.
          </p>
        </div>

        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200"
              alt="Financial Planning"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#011A41] mb-6">
              About GenZ Invest Solutions
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              At GenZ Invest Solutions Private Limited, we believe
              that financial growth should be intentional,
              transparent, and built around people—not products.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              Established with a vision to make investment and
              financial solutions more accessible and meaningful,
              we are committed to helping individuals,
              professionals, families, and emerging investors
              navigate their financial journey with clarity and
              confidence.
            </p>

            <p className="text-gray-600 leading-8">
              We understand that every financial journey is unique.
              That is why our approach begins with listening—
              understanding goals, aspirations, and priorities
              before identifying solutions that align with
              long-term outcomes.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-28">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold text-[#011A41]">
              Why GenZ Invest Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Client interests at the center of every decision",
              "Transparent and meaningful financial conversations",
              "Long-term perspective over short-term market noise",
              "Modern thinking with practical execution",
              "Personalized solutions designed around individual goals"
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#F8F5EF]
                  p-6
                  rounded-2xl
                  border
                  border-[#D4AF37]/10
                  hover:shadow-lg
                  transition
                "
              >
                <div className="w-12 h-12 rounded-full bg-[#011A41] text-[#D4AF37] flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>

                <p className="text-gray-700 leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-28 bg-[#F8F5EF] rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#011A41] mb-6">
            Our Philosophy
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-8">
            We believe wealth is built through informed decisions,
            disciplined actions, and consistency over time—not
            through trends or shortcuts.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-[#011A41] mb-5">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To become a trusted financial solutions partner for
              the next generation of investors by creating
              meaningful relationships and delivering lasting
              value.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-[#011A41] mb-5">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              To simplify financial decision-making through
              accessible, transparent, and client-focused
              solutions that empower individuals to move forward
              with confidence.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-24 text-center">
          <div className="bg-[#011A41] rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Commitment
            </h2>

            <p className="max-w-4xl mx-auto text-slate-300 text-lg leading-8">
              At GenZ Invest Solutions Private Limited, we do not
              measure success by transactions—we measure it by the
              trust we build and the value we create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}