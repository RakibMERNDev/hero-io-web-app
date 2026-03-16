import { use } from "react";
import { useNavigate } from "react-router";
import AppCard from "../AppCard/AppCard";

const Trending = ({ appPromise }) => {
  const appsData = use(appPromise);

  const slicedData = appsData.slice(0, 8);

  const navigate = useNavigate();

  return (
    <section className="max-w-360 mx-auto pb-10">
      <div className="pt-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold">Trending Apps</h2>
        <p className="mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-5 lg:mt-10">
        {slicedData.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center mt-10 text-white">
        <button
          className="bg-gradient-brand px-3 py-2 rounded-sm text-center hover:cursor-pointer"
          onClick={() => navigate("/apps")}
        >
          Show All
        </button>
      </div>
    </section>
  );
};

export default Trending;
