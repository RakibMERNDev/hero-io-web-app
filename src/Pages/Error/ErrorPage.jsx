import { useNavigate } from "react-router";
import errorImage from "../../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-400 mx-auto min-h-screen flex flex-col justify-center items-center">
      <img src={errorImage} alt="" />
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

export default ErrorPage;
