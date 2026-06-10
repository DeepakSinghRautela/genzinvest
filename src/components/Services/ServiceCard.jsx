import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {service.title}
        </h3>

        <p className="mt-4 text-gray-600">
          {service.shortDescription}
        </p>

        <Link
          to={`/services/${service.id}`}
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}