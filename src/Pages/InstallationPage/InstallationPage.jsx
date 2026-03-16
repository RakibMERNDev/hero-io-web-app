import { useContext, useState } from "react";
import { AppContext } from "../../Provider/AppContext";
import downloadIcon from "../../assets/icon-downloads.png";

import starIcon from "../../assets/icon-ratings.png";

import { millify } from "millify";

const InstallationPage = () => {
  const { installedApps, handleUninstallApp } = useContext(AppContext);
  const [sortType, setSortType] = useState("");

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortType === "high-low") {
      return b.downloads - a.downloads;
    }
    if (sortType === "low-high") {
      return a.downloads - b.downloads;
    }
    return 0;
  });


  return (
    <section className="bg-[#FFFFFF] max-w-360 mx-auto min-h-[calc(100vh-24rem)]">
      <div className="text-center mt-5">
        <h3 className="text-5xl font-bold">Your Installed Apps</h3>
        <p className="py-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center w-full mt-6">
        <p className="text-2xl font-semibold">
          {installedApps.length} Apps Found
        </p>

        <select
          className="select appearance-none"
          onChange={(e) => setSortType(e.target.value)}
          defaultValue=""
        >
          <option disabled value="">
            Sort by Downloads
          </option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>

      <div className="flex flex-col gap-6 mt-8">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-sm hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-lg shrink-0">
                <img src={app.image} alt="" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {app?.title}
                </h3>

                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-emerald-500 font-medium">
                  <span className="flex items-center gap-1">
                    <img className="w-6 h-6" src={downloadIcon} />
                    {millify(app.downloads)}
                  </span>
                  <span className="flex items-center gap-1">
                    <img className="w-6 h-6" src={starIcon} alt="" />
                    {app.ratingAvg}
                  </span>
                  <span className="flex items-center gap-1">{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstallApp(app.id)}
              className="bg-[#00c896] hover:bg-[#00b386] text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstallationPage;
