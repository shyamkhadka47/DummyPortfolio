import React from "react";
import Skills from "../layouts/Skills";

const About = () => {
  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div>
        <h1 className=" text-4xl text-center font-bold lg:mt-2 underline underline-offset-[15px] my-10 ">About Me</h1>
      </div>
      <div>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">I'm Shyam Khadka</h2>
          <p className="mt-4 lg:mt-2 w-3/4 leading-8 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ea, tenetur quo earum quod repellat voluptatibus praesentium quaerat
            cum neque deserunt aliquid nulla hic dolores dolorum iste, ab error
            dolore.
          </p>
        </div>
        <div>
            <h2 className="text-3xl font-bold  mb-10">My Skills</h2>
            <div>
                <Skills title={"Html"} width="w-11/12" val="95%"/>
                <Skills title={"CSS"} width="w-4/5" val="85%"/>
                <Skills title={"Javascript"} width="w-2/3" val="70%"/>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
