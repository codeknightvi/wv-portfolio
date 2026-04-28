import Experience from "@pages/work/Experience";
import Gallery from "@pages/work/gallery/Gallery";
import ProjectJumper from "@pages/work/ProjectJumper";
import RevealOnScroll from "@hooks/useRevealOnScroll";

import { rendered, rendered2, threeddesign, threeddesign2 } from "../../../public/design/tu-work";

export default function WorkPage() {
  return (
    <>
      <Experience />
      <ProjectJumper />
      <div className="flex flex-col items-center gap-y-6">
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
