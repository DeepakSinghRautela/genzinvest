// export default function Services() {
//   const data = [
//     {
//       title: "Portfolio Management",
//       desc: "Expert-driven strategies to maximize returns.",
//     },
//     {
//       title: "Mutual Funds",
//       desc: "Diversified investments for long-term growth.",
//     },
//     {
//       title: "Tax Planning",
//       desc: "Save taxes while growing wealth.",
//     },
//     {
//       title: "Wealth Advisory",
//       desc: "Personalized financial planning solutions.",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-white text-black">
      
//       <h2 className="text-center text-3xl md:text-4xl font-bold">
//         Our Services
//       </h2>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//         {data.map((item, i) => (
//           <div
//             key={i}
//             className="bg-gray-100 p-6 rounded-xl border border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition"
//           >
//             <h3 className="text-xl font-semibold text-black">
//               {item.title}
//             </h3>
//             <p className="text-gray-700 mt-2">{item.desc}</p>
//           </div>
//         ))}
//       </div>



      
//     </section>
//   );
// }


import ServiceCard from "./ServiceCard";
import { services } from "./services";

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-5xl  mb-14 text-[#D4AF37]">
          OUR SERVICES
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}