import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";

const AppsPage = () => {
  const data = useLoaderData();


  return (
    <section className="bg-[##FFFFFF] max-w-360 mx-auto my-10">
      <div className="text-center mt-5">
        <h3 className="text-5xl font-bold">Our All Applications</h3>
        <p className="py-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold"> ({data.length}) Apps Found</p>

        <p>Search box</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-5 lg:mt-10">
        {data.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default AppsPage;
