const ProjectJumper = () => {
  const header = [
    { id: "#3d" },
    { id: "#3d2" },
    { id: "#render" },
    { id: "#render2" },
  ];

  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="m-auto my-10 text-3xl">to...</h1>
      <div className="flex ">
        {header.map((el) => (
          <a
            key={el.id}
            href={el.id}
            className="my-5 px-2 text-xs lg:px-20 lg:text-xl"
          >
            {el.id.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectJumper;
