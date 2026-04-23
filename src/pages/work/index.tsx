import {
  rendered,
  rendered2,
  threeddesign,
  threeddesign2,
} from "../../../public/design/tu-work";
import Experience from "@pages/work/Experience";
import Gallery from "@pages/work/gallery/Gallery";
import ProjectJumper from "@pages/work/ProjectJumper";
import RevealOnScroll from "@hooks/useRevealOnScroll";

export default function WorkPage() {
  return (
    <>
      <Experience />
      <ProjectJumper />
      <div className="flex flex-col gap-y-6 items-center">
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
