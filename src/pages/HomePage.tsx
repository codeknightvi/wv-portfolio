import HomeCover from "@components/HomeCover";
import Skills from "@components/Skills";

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
