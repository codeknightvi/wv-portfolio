import HomeCover from "./HomePage/HomeCover";
import Skills from "./HomePage/Skills";

const HomePage = () => {
  return (
    <>
      <HomeCover />
      <div className="py-5 md:py-20 mx-10">
        <Skills />
      </div>
    </>
  );
};

export default HomePage;
