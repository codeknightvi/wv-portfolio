import TypeWriter from "./TypeWtriter";

export default function LandingPage() {
  return (
    <div className="text-2xl md:text-4xl">
      <TypeWriter
        text="Greeting! welcome to John's portfolio website you may proceed :) ==> "
        delay={40}
      />
    </div>
  );
}
