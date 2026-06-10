export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Retirement Wealth Planning",
      category: "Retirement Planning",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200",
      description:
        "Designed a long-term retirement strategy helping clients build a sustainable retirement corpus.",
      result: "₹2.5 Cr Retirement Corpus"
    },
    {
      id: 2,
      title: "Portfolio Diversification",
      category: "Investment Advisory",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200",
      description:
        "Created a diversified investment portfolio across multiple asset classes.",
      result: "18% Annual Growth"
    },
    {
      id: 3,
      title: "Family Wealth Protection",
      category: "Insurance Planning",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      description:
        "Implemented a comprehensive insurance and wealth protection strategy.",
      result: "100% Risk Coverage"
    },
    {
      id: 4,
      title: "Tax Optimization Strategy",
      category: "Tax Planning",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200",
      description:
        "Helped clients reduce tax liability while maximizing investment efficiency.",
      result: "30% Tax Savings"
    },
    {
      id: 5,
      title: "Education Goal Planning",
      category: "Goal Based Investing",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
      description:
        "Structured a goal-oriented investment roadmap for higher education funding.",
      result: "Goal Achieved in 8 Years"
    },
    {
      id: 6,
      title: "High Net Worth Wealth Management",
      category: "Wealth Management",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      description:
        "Built a customized wealth preservation and growth strategy for HNI clients.",
      result: "₹10Cr+ Managed Assets"
    }
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8F5EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-semibold tracking-[4px] uppercase">
            Featured Projects
          </span>

          <h1 className="text-5xl font-bold text-[#011A41] mt-4">
            Success Stories & Client Achievements
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            Explore how our financial planning, investment advisory,
            retirement solutions, and wealth management strategies
            have helped clients achieve their financial goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-xl
                border
                border-[#D4AF37]/10
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <span className="inline-block bg-[#D4AF37]/10 text-[#011A41] px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-[#011A41] mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="mt-6 p-4 bg-[#F8FAFC] rounded-xl">
                  <p className="text-sm text-gray-500">
                    Result
                  </p>

                  <h4 className="text-xl font-bold text-[#011A41]">
                    {project.result}
                  </h4>
                </div>

                <button
                  className="
                    mt-6
                    w-full
                    bg-[#011A41]
                    hover:bg-[#02285f]
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#011A41] to-[#02285f] rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold">
              Ready To Build Your Financial Future?
            </h2>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Connect with our advisors and discover personalized
              investment and wealth management solutions.
            </p>

            <button className="mt-8 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}