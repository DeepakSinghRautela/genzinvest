import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div
          className="
          bg-gradient-to-br
          from-white
          to-[#F8F5EF]
          border
          border-[#D4AF37]/20
          rounded-[32px]
          p-12
          lg:p-16
          shadow-xl
          text-center
          "
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#011A41] font-semibold">
            Start Your Financial Journey
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#011A41] mt-6">
            Ready To Secure Your
            <span className="text-[#D4AF37]"> Financial Future?</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Whether you're planning for retirement, building wealth,
            protecting your family, or growing your investments,
            our experts are here to guide you every step of the way.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-[#011A41]">
                500+
              </h3>
              <p className="text-gray-500 mt-2">
                Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#011A41]">
                ₹100Cr+
              </h3>
              <p className="text-gray-500 mt-2">
                Assets Managed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#011A41]">
                10+
              </h3>
              <p className="text-gray-500 mt-2">
                Years Experience
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              to="/contact"
              className="
              bg-[#011A41]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#02285f]
              transition
              "
            >
              Book Consultation
            </Link>

            <Link
              to="/services"
              className="
              border-2
              border-[#D4AF37]
              text-[#011A41]
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#D4AF37]
              transition
              "
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}