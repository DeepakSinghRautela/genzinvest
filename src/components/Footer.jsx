import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#011A41] text-white">
      {/* Gold Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-yellow-400 to-[#D4AF37]" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-[#D4AF37]">
              GenZInvest Solutions
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              GenZInvest Solutions Private Limited is dedicated to helping
              individuals and families build, manage, and protect their wealth
              through personalized financial planning, investment advisory,
              retirement solutions, and wealth management services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#D4AF37] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#D4AF37] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-[#D4AF37] transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#D4AF37] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>Investment Products Distribution</li>
              <li>Financial Information</li>
              <li>Insurance Products</li>
              <li>Retirement Planning</li>
              <li>Tax Planning</li>
              <li>Wealth Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Contact Us
            </h3>

            <div className="mt-5 text-slate-300 space-y-4">
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>contact@genzinvest.in</p>
              </div>

              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+91 8147653737</p>
              </div>

              <div>
                <p className="font-semibold text-white">Registered Address</p>
                <p className="leading-7">
                  261, Kothanur Main Road,1st Cross, Harinagar, Konanakunte, Bangalore, Karnataka,India - 560062
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area */}
     <div className="border-t border-white/10">
  <div className="max-w-7xl mx-auto px-5 py-6">
    <p className="text-center text-yellow-400 text-sm leading-6">SEBI Disclaimer: We are not SEBI Registered Investment Advisers.Investments</p>
    <p className="text-center text-slate-400 text-sm leading-6">
      Investments in securities market are subject to market risks. Read all scheme related documents carefully before investing. We do not provide personalized investment advice. All information provided is for educational and informational purposes only. Please consult a qualified financial advisor before making investment decisions.
    </p>

    <div className="w-full h-px bg-white/10 my-5" />

    <p className="text-center text-slate-400 text-sm">
      © 2026 GenZInvest Solutions Private Limited. All Rights Reserved.
    </p>
  </div>
</div> 
    </footer>
  );
}