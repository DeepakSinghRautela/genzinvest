import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "src/assets/hero-img1.webp";

export default function Hero() {
  return (
    <>
    <section
      id="home"
      className="
      relative
      py-14
      flex
      items-center
      overflow-hidden
      bg-gradient-to-br
      from-white
      via-[#F8FAFC]
      to-[#F8F5EF]
      "
    >
      {/* Background Effects */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#D4AF37]/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#011A41]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-[#D4AF37]/80
            text-[#011A41]
            font-semibold
            mb-6
            "
          >
            Trusted Wealth Management Partner
          </span>

          <h1 className="text-5xl lg:text-4xl font-bold leading-tight text-[#011A41]">
            Building Financial Confidence 
            <br />
            For The Next Generation
            {/* <span className="text-[#D4AF37]"> Future.</span> */}
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-xl leading-8">
            Modern financial solutions designed around people, guided by trust, and focused on long-term value.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              className="
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
               <Link to="/contact">Get Started</Link>
              
            </button>

            <button
              className="
              border-2
              border-[#D4AF37]
              text-[#011A41]
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#D4AF37]
              hover:text-black
              transition
              "
            >
              <Link to="/services">Explore Services</Link>
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-3xl font-bold text-[#011A41]">
                500+
              </h3>

              <p className="text-gray-500 mt-1">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#011A41]">
                ₹100Cr+
              </h3>

              <p className="text-gray-500 mt-1">
                Assets Managed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#011A41]">
                10+
              </h3>

              <p className="text-gray-500 mt-1">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={heroImg}
            alt="Wealth Management"
            className="
            w-full
            max-w-[550px]
            mx-auto
            drop-shadow-2xl
            "
          />

          {/* Floating Card */}
          <div
            className="
            absolute
            bottom-10
            left-0
            bg-white
            p-5
            rounded-2xl
            shadow-xl
            border
            border-[#D4AF37]/20
            "
          >
            <p className="text-sm text-gray-500">
              Portfolio Growth
            </p>

            <h3 className="text-2xl font-bold text-[#011A41]">
              +18.6%
            </h3>
          </div>

          {/* Floating Card */}
          <div
            className="
            absolute
            top-10
            right-0
            bg-[#011A41]
            text-white
            p-5
            rounded-2xl
            shadow-xl
            "
          >
            <p className="text-sm text-slate-300">
              Assets Managed
            </p>

            <h3 className="text-2xl font-bold text-[#D4AF37]">
              ₹100Cr+
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}