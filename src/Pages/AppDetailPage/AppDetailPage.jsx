import { millify } from "millify";
import { useContext } from "react";
import { useLoaderData } from "react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import { AppContext } from "../../Provider/AppContext";

const RatingStars = ({ rating, size = 16 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <img
        key={i}
        src={starIcon}
        alt="star"
        width={size}
        height={size}
        className={i < Math.floor(rating) ? "opacity-100" : "opacity-25"}
      />
    ))}
  </div>
);

export default function AppDetailPage() {
  const app = useLoaderData();

  const { installedApps, handleInstall } = useContext(AppContext);

  const isInstalled = installedApps.find(
    (installedApp) => installedApp.id === app.id,
  );

  const chartData = [...app.ratings].reverse();
  const maxCount = Math.max(...app.ratings.map((r) => r.count));

  return (
    <div className="bg-gray-50 ">
      <div className="max-w-2xl lg:max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex flex-col gap-6 space-y-6 lg:space-y-0">
          <div className=" bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-start gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shrink-0 border border-gray-200"
              />

              <div className="flex-1 min-w-0">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                  {app.title}
                </h1>
                <p className="text-sm text-blue-600 mt-0.5">
                  Developed by {app.companyName}
                </p>

                <div className="flex items-center gap-4 mt-3 flex-wrap">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <img
                        src={downloadIcon}
                        className="w-4 h-4"
                        alt="download"
                      />
                      <span className="text-sm font-semibold text-gray-800">
                        {millify(app.downloads)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 mt-0.5">
                      Downloads
                    </span>
                  </div>

                  <div className="w-px h-8 bg-gray-100" />

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <img src={starIcon} alt="star" width={15} height={15} />
                      <span className="text-sm font-semibold text-gray-800">
                        {app.ratingAvg}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 mt-0.5">
                      Avg Rating
                    </span>
                  </div>

                  <div className="w-px h-8 bg-gray-100" />

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-gray-800">
                        {millify(app.reviews)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 mt-0.5">
                      Reviews
                    </span>
                  </div>

                  <div className="w-px h-8 bg-gray-100" />

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-gray-800">
                        {app.size} MB
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 mt-0.5">Size</span>
                  </div>
                </div>
              </div>
            </div>

            {isInstalled ? (
              <button
                disabled
                className="mt-4 w-full md:w-auto md:px-8 bg-green-500 opacity-60 cursor-not-allowed active:scale-100 transition-all text-white text-sm font-semibold py-2.5 rounded-xl"
              >
                Installed
              </button>
            ) : (
              <button
                onClick={() => handleInstall(app)}
                className="mt-4 w-full md:w-auto md:px-8 bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all text-white text-sm font-semibold py-2.5 rounded-xl"
              >
                Install Now ({app.size} MB)
              </button>
            )}
          </div>

          {/* Description — 1 col on lg, stacks below on smaller screens */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-semibold text-gray-800 mb-3">
              Description
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {app.description}
            </p>
          </div>
        </div>

        {/* Ratings — full width */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-base font-semibold text-gray-800 mb-4">
            Ratings
          </h2>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex flex-col items-center min-w-[72px]">
              <span className="text-4xl md:text-5xl font-bold text-gray-900">
                {app.ratingAvg}
              </span>
              <RatingStars rating={app.ratingAvg} size={18} />
              <span className="text-xs text-gray-400 mt-1 text-center">
                {millify(app.reviews)} reviews
              </span>
            </div>

            <div className="flex-1">
              <ResponsiveContainer width="100%" height={140}>
                <BarChart
                  layout="vertical"
                  data={chartData}
                  margin={{ top: 2, right: 8, bottom: 2, left: 4 }}
                  barSize={10}
                >
                  <XAxis type="number" hide domain={[0, maxCount]} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    width={46}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "#f9fafb" }}
                    formatter={(value) => [value.toLocaleString(), "Reviews"]}
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #e5e7eb",
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    dataKey="count"
                    shape={({ x, y, width, height }) => (
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        rx={4}
                        ry={4}
                        fill={app?.color || "#f97316"}
                      />
                    )}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
