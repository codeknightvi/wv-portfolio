import HomeCover from "@pages/home/HomeCover";
import Skills from "@pages/home/Skills";

export default function HomePage() {
  return (
    <>
      <HomeCover />
      <div className="py-5 md:py-20 mx-10">
        <Skills />
      </div>
    </>
  );
}
