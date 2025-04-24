import {
  rendered,
  rendered2,
  threeddesign,
  threeddesign2,
} from "../../public/Design/TU_work";
import Experience from "@components/Experience";
import Gallery from "@components/gallery/Gallery";
import ProjectJumper from "@components/ProjectJumper";
import RevealOnScroll from "@hooks/revealOnScroll";

const WorkPage = () => {
  return (
    <div className="mx-16">
      <Experience />
      <ProjectJumper />

      <div className="flex flex-col gap-y-6">
        <RevealOnScroll>
          <Gallery data={threeddesign} id="3d" />
        </RevealOnScroll>
        <RevealOnScroll>
          <Gallery data={threeddesign2} id="3d2" />
        </RevealOnScroll>
        <RevealOnScroll>
          <Gallery data={rendered} id="render" />
        </RevealOnScroll>
        <RevealOnScroll>
          <Gallery data={rendered2} id="render2" />
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default WorkPage;
