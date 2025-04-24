import HomeCover from "@pages/HomePage/HomeCover";
import Skills from "@pages/HomePage/Skills";

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
