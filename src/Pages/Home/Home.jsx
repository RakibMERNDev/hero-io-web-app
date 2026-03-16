import { Suspense } from "react";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";

const appPromise = fetch("/appsData.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="bg-[##F5F5F5]">
      <Hero />
      <Suspense fallback={<span>Loading....</span>}>
        <Trending appPromise={appPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
