import React from "react";

const EducationCard = (props) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 lg:px-32 p-5 mt-100"> 
        <div className=" flex flex-col items-start justify-start max-w-[250px] leading-8 ">
          <p className="w-[250px] font-bold ">{props.title}</p>
          <p>Student</p>
          <p>10 Dec 2023</p>
        </div>

        <div className="leading-8">
          <h1 className="capitalize font-bold">certificate of web training</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quisquam debitis ab consectetur, laborum doloremque doloribus
            necessitatibus, accusantium quas explicabo facere ipsum unde totam
            alias. Blanditiis pariatur incidunt voluptates saepe.
          </p>
    <div className="w-full bg-slate-500 h-1 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
