import { millify } from "millify";

import { Link } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  const { id, image, title, downloads = "9M", rating = 5 } = app;

  return (
    <Link
      to={`/apps/${id}`}
      className="w-55 rounded-2xl border-2 border-gray-200 p-3 bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
    >
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col px-1 mt-3 gap-0.5">
        <p className="text-sm font-semibold text-gray-800 leading-tight truncate">
          {title}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <img src={downloadIcon} className="w-3 h-3 object-contain" alt="" />
            <span>{millify(downloads)}</span>
          </div>

          <div className="flex items-center gap-0.5">
            <img src={ratingIcon} className="w-3 h-3 object-contain" />
            <span className="text-xs font-semibold text-gray-700">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
