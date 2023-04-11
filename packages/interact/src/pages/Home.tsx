import HomeMarquee from "../components/HomeMarquee";
import AppTitle from "../components/AppTitle";
import Connect from "../components/Connect";
import background from "../assets/img/bg_home.jpg";

export default function Home() {
  return (
    <>
      {/* // Desktop */}
      <div className="hidden md:flex w-full h-full">
        <div
          className="w-1/2 flex h-full bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="w-1/2 flex h-full flex-col justify-between">
          <HomeMarquee />
          <div className="flex flex-col gap-6 items-center">
            <AppTitle />
            <div>
              <Connect />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* // Mobile */}
      <div
        className="relative md:hidden w-full h-full flex flex-col justify-between items-center pb-20 bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <HomeMarquee />
        <div className="flex flex-col gap-6 items-center">
          <AppTitle />
          <div>
            <Connect />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
