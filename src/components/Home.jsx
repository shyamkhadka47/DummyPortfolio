

import hero from "../assets/hero.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center lg:flex-row lg:px-32 px-5 bg-backgroundColor ">
      <div className="flex flex-col items-center text-center lg:text-start w-full space-y-4 lg:items-start lg:w-3/4 ">
        <h1 className="text-5xl leading-tight font-semibold mt-24">
          {" "}
          I'm Shyam Khadka
        </h1>
        <div className="text-5xl leading-tight font-semibold mt-24">
          {" "}
          <span className=" text-brightColor text-5xl leading-tight font-bold ">
            Front-End{" "}
          </span>
          <span> Developer</span>
        </div>
        <p className="w-3/4 leading-8 font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eligendi odio saepe veritatis, nobis, dignissimos corporis ipsa magnam
          nisi ea culpa placeat ullam hic eaque sit praesentium unde
          reprehenderit incidunt?
        </p>
       <Button title={"Hire Me"}/> 
      </div>
      <div className="mt-20">
        <img width={570} src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Home;
