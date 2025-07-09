import {
  rendered,
  rendered2,
  threeddesign,
  threeddesign2,
} from "../../../public/Design/TU_work";
import Experience from "@pages/WorkPage/Experience";
import Gallery from "@pages/WorkPage/Gallery/Gallery";
import ProjectJumper from "@pages/WorkPage/ProjectJumper";
import RevealOnScroll from "@hooks/revealOnScroll";

export default function WorkPage() {
  return (
    <>
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
    </>
  );
}
