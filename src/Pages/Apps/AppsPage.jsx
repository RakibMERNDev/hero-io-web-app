import { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import NoAppsFound from "../../components/NoAppsFound/NoAppsFound";

const AppsPage = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="bg-[#FFFFFF] max-w-360 mx-auto my-10">
      <div className="text-center mt-5">
        <h3 className="text-5xl font-bold">Our All Applications</h3>
        <p className="py-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
        <p className="text-2xl font-semibold">
          ({filteredApps.length}) Apps Found
        </p>

        <input
          type="text"
          placeholder="Search apps..."
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredApps.length === 0 ? (
        <NoAppsFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-5 lg:mt-10">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AppsPage;
