import HomeCover from "@pages/home/HomeCover";
import Skills from "@pages/home/Skills";

export default function HomePage() {
  return (
    <>
      <HomeCover />
      <div className="mx-10 py-5 md:py-20">
        <Skills />
      </div>
    </>
  );
}
