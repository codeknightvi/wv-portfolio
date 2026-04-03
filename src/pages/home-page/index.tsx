import HomeCover from "@pages/home-page/HomeCover";
import Skills from "@pages/home-page/Skills";

export default function HomePage() {
  return (
    <div>
      <HomeCover />
      <div className="py-5 md:py-20 mx-10">
        <Skills />
      </div>
    </div>
  );
}
