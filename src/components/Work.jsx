import React from "react";
import WorkItem from "./WorkItem";

const workHistory = [
  {
    year: 2017,
    name: "Hampton Affiliates",
    title: "Transportation Logistics Analyst",
    duration: "7 years",
    details: "Solve problems and move lumber",
  },
  {
    year: 2012,
    name: "Northwest Fencing Center",
    title: "Logisitics and Operations Lead",
    duration: "5 years",
    details:
      "Ran the operations for the premier, internationally recognized fencing center in the Northwest",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Work History
      </h1>
      {workHistory.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          name={item.name}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
