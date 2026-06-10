export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      text: "GenZInvest helped me diversify my portfolio and achieve consistent long-term growth. Their guidance has been invaluable."
    },
    {
      name: "Priya Verma",
      role: "IT Professional",
      text: "The team provided transparent advice and a personalized investment strategy that perfectly matched my financial goals."
    },
    {
      name: "Amit Kumar",
      role: "Retired Executive",
      text: "Their retirement planning solutions gave me confidence and financial security for the future."
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#011A41] font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-[#011A41] mt-5">
            What Our Clients Say
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg">
            Trusted by investors and families who rely on us for
            financial planning, wealth creation, and long-term success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-gray-100
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              relative
              "
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-6xl text-[#D4AF37]/20 font-bold">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-[#D4AF37] text-xl">
                ★★★★★
              </div>

              <p className="text-gray-600 leading-8">
                {item.text}
              </p>

              <div className="mt-8 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-[#011A41] text-[#D4AF37] flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-[#011A41]">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 bg-[#011A41] rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-bold text-white">
            Trusted By 500+ Investors Across India
          </h3>

          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Our mission is to help individuals and families make
            smarter financial decisions through transparency,
            expertise, and personalized guidance.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h4 className="text-[#D4AF37] text-3xl font-bold">
                500+
              </h4>
              <p className="text-white">
                Happy Clients
              </p>
            </div>

            <div>
              <h4 className="text-[#D4AF37] text-3xl font-bold">
                ₹100Cr+
              </h4>
              <p className="text-white">
                Assets Managed
              </p>
            </div>

            <div>
              <h4 className="text-[#D4AF37] text-3xl font-bold">
                98%
              </h4>
              <p className="text-white">
                Client Retention
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}