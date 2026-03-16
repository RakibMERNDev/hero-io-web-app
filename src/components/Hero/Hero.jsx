import { Link } from "react-router";
import appStore from "../../assets/appstore.png";
import hero from "../../assets/hero.png";
import playStore from "../../assets/playstore.png";

const Hero = () => {
  return (
    <section className=" pt-3 md:pt-5">
      <div className=" text-center">
        <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-360 mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span>We Build</span>
            <br />
            <span className="text-gradient">Productive</span>
            <span> Apps</span>
          </h1>
          <p className="py-4 text-xs sm:text-sm md:text-base text-gray-500 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div>
            <div className="pt-5 lg:pt-10 flex gap-3 justify-center">
              <button className="flex items-center gap-2 border border-[#d2d2d2] px-2 py-1 rounded-sm">
                <img
                  src={playStore}
                  className="object-cover w-8 h-8 "
                  alt="play-store-logo"
                />{" "}
                <Link
                  to={"https://play.google.com/store/apps?hl=en"}
                  className="text-sm md:text-base"
                >
                  Google Play
                </Link>
              </button>
              <button className="flex items-center gap-2 border border-[#d2d2d2] px-2 py-1 rounded-sm">
                <img
                  src={appStore}
                  className="object-cover w-8 h-8 "
                  alt="app-store-logo"
                />{" "}
                <Link
                  to={"https://www.apple.com/app-store/"}
                  className="text-sm md:text-base"
                >
                  App Store
                </Link>
              </button>
            </div>

            <div className="pt-5 flex justify-center">
              <img src={hero} alt="" />
            </div>
          </div>
          <div className="bg-gradient-brand py-10 text-white full">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Trusted by Millions, Built for You
            </h2>
            <div className="pt-8 flex flex-col md:flex-row justify-center gap-6">
              {cardInfos.map((card) => (
                <div
                  key={card.heading}
                  className="space-y-3 md:space-y-4 text-center"
                >
                  <h6>{card.heading}</h6>
                  <p className="text-3xl lg:text-6xl font-extrabold">
                    {card.counts}
                  </p>
                  <p>{card.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

const cardInfos = [
  {
    heading: "Total Downloads",
    counts: "29.6M",
    des: "21% more than last month",
  },
  {
    heading: "Total Reviews",
    counts: "906K",
    des: "46% more than last month",
  },
  {
    heading: "Active Apps",
    counts: "132+",
    des: "31 more will Launch",
  },
];
