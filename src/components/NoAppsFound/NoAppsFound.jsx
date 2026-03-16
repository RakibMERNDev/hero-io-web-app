import { useNavigate } from "react-router";
import appError from "../../assets/App-Error.png";

const NoAppsFound = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-400 mx-auto min-h-[calc(100vh-24rem)] flex flex-col justify-center items-center">
      <img src={appError} alt="" />
      <div className="mt-3">
        <h4 className="text-5xl font-semibold">Oops, page not found!</h4>
        <p className="text-xl text-center mt-3">
          The page you are looking for is not available.
        </p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-gradient-brand py-2 text-white px-3 mt-2 rounded-md hover:cursor-pointer"
      >
        Go Back!
      </button>
    </section>
  );
};

export default NoAppsFound;
