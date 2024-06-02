import HomeCover from "../component/HomeCover";
import Skills from "../component/Skills";

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
