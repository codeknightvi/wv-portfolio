import { BAT_CAVE_WALLPAPER } from "@config/env";

const HomeCover = () => {
  return (
    <div
      className="bg-cover h-full"
      style={{ backgroundImage: `url(${BAT_CAVE_WALLPAPER})` }}
    >
      <div className="flex justify-between items-center ml-14 md:ml-28 lg:ml-28 py-4">
        <div>
          <h1 className="text-white text-2xl md:text-4xl ">Hello, World !</h1>
        </div>
        <div className="my-6">
          <h1 className="text-white text-sm md:text-4xl">
            I'm Woramongkol Vichayaworanan
          </h1>
          <p className="text-white text-sm md:text-3xl">
            frontend developer based in Bangkok, Thailand.
          </p>
        </div>
        <div className="">
          <img
            className="max-h-screen"
            src="/profile/fotor-ai-2023082910571-removebg.png"
            alt="profilepic"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
