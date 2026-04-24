import { WV_BACKGROUND } from "@config/assets";
import { BAT_CAVE_WALLPAPER } from "@config/env";

const HomeCover = () => {
  return (
    <div
      className="bg-cover h-full"
      style={{ backgroundImage: `url(${BAT_CAVE_WALLPAPER})` }}
    >
      <div className="flex justify-between items-center ml-14 md:ml-28 lg:ml-28 py-4 text-white">
        <div>
          <h1 className="text-2xl md:text-4xl ">Hello, World !</h1>
        </div>
        <div className="my-6">
          <h1 className="text-sm md:text-4xl">
            I&apos;m Woramongkol Vichayaworanan
          </h1>
          <p className="text-sm md:text-3xl">
            frontend developer based in Bangkok, Thailand.
          </p>
        </div>
        <div>
          <img
            className="max-h-screen"
            src={WV_BACKGROUND}
            alt="Portrait Profile Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
