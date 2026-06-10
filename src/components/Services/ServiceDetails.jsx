import { useParams } from "react-router-dom";
import { services } from "./services";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = services.find(
    (item) => item.id === id
  );

  if (!service) {
    return (
      <h1 className="text-center mt-20">
        Service Not Found
      </h1>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[400px] object-cover"
      />

      <div className="max-w-5xl mx-auto px-5 py-10">
        <h1 className="text-5xl font-bold">
          {service.title}
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          {service.description}
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold">
            Benefits
          </h2>

          <ul className="mt-5 space-y-3">
            <li>✓ Professional Guidance</li>
            <li>✓ Wealth Creation</li>
            <li>✓ Risk Management</li>
            <li>✓ Long Term Growth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}