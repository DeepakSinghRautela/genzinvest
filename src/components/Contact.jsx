
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-[#F9FAFB] to-[#F8F5EF] py-24 px-5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-4xl font-semibold tracking-[4px] uppercase">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-[#011A41] mt-4">
            Schedule a Free Financial Consultation
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            Our advisors help individuals, families, and businesses make
            smarter financial decisions through personalized wealth management,
            investment planning, retirement solutions, and financial advisory
            services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 text-center">
            <h3 className="text-4xl font-bold text-[#011A41]">500+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 text-center">
            <h3 className="text-4xl font-bold text-[#011A41]">₹100Cr+</h3>
            <p className="text-gray-600 mt-2">Assets Managed</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 text-center">
            <h3 className="text-4xl font-bold text-[#011A41]">10+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Cards */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-[#011A41] mb-8">
              Let's Talk
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#011A41] to-[#02285f] rounded-2xl p-6 shadow-xl border border-[#D4AF37]/20 hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-[#D4AF37] font-semibold text-lg">
                  Email Us
                </h4>
                <p className="text-slate-200 mt-2">
                  contact@genzinvest.in
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#011A41] to-[#02285f] rounded-2xl p-6 shadow-xl border border-[#D4AF37]/20 hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-[#D4AF37] font-semibold text-lg">
                  Call Us
                </h4>
                <p className="text-slate-200 mt-2">
                  +91 8147653737
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#011A41] to-[#02285f] rounded-2xl p-6 shadow-xl border border-[#D4AF37]/20 hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-[#D4AF37] font-semibold text-lg">
                  Office Address
                </h4>
                <p className="text-slate-200 mt-2">
                  261, Kothanur Main Road,
                  1st Cross, Harinagar,
                  Konanakunte,

                  <br />
                  Bangalore, Karnataka,
                  India - 560062
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#011A41] to-[#02285f] rounded-2xl p-6 shadow-xl border border-[#D4AF37]/20 hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-[#D4AF37] font-semibold text-lg">
                  Working Hours
                </h4>
                <p className="text-slate-200 mt-2">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-white to-[#F8F5EF] rounded-3xl shadow-2xl border border-[#D4AF37]/20 p-10">
              <h3 className="text-3xl font-bold text-[#011A41] mb-8">
                Request a Consultation
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all"
                />

                <select
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all"
                >
                  <option>Select Service</option>
                  <option>Investment Products Distribution</option>
                  <option>Financial Information</option>
                  <option>Insurance Products</option>
                  <option>Retirement Planning</option>
                  <option>Tax Planning</option>
                  <option>Wealth Management</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Tell us about your financial goals..."
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all"
                />

                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#011A41] to-[#02285f] hover:from-[#02285f] hover:to-[#033b88] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center text-[#011A41] mb-12">
            Why Choose GenZInvest?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#011A41] to-[#02285f] p-8 rounded-2xl shadow-xl border border-[#D4AF37]/20">
              <h4 className="font-bold text-[#D4AF37] text-xl mb-4">
                Personalized Advice
              </h4>

              <p className="text-slate-200">
                Tailored financial strategies designed around your goals,
                lifestyle, and risk appetite.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#011A41] to-[#02285f] p-8 rounded-2xl shadow-xl border border-[#D4AF37]/20">
              <h4 className="font-bold text-[#D4AF37] text-xl mb-4">
                Transparent Process
              </h4>

              <p className="text-slate-200">
                Complete transparency in recommendations, reporting, and
                portfolio management.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#011A41] to-[#02285f] p-8 rounded-2xl shadow-xl border border-[#D4AF37]/20">
              <h4 className="font-bold text-[#D4AF37] text-xl mb-4">
                Long-Term Growth
              </h4>

              <p className="text-slate-200">
                Focused on building sustainable wealth and achieving financial
                independence.
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=gurugram&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}