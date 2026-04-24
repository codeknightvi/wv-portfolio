import TypeWriter from "./Typewriter";

export default function LandingPage() {
  return (
    <div className="text-2xl md:text-4xl">
      <TypeWriter
        title="Greeting! I’m John — Frontend Developer"
        content="Explore my projects, skills, and experience. :) ==> "
        delay={40}
      />
    </div>
  );
}
