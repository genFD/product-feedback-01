import React from "react";
import AddFeedbackButton from "../components/AddFeedbackButton";
import GobackAndRoadmap from "../components/GobackAndRoadmap";
import RoadmapCard from "../components/RoadmapCard";

const Roadmap = () => {
  return (
    <>
      <div className="tablet:px-10 tablet:pt-14 desktop:px-156 desktop:pt-78">
        <header className="h-100 w-full flex bg-Raven-Night px-6 items-center justify-between tablet:rounded-default">
          <GobackAndRoadmap />
          <AddFeedbackButton />
        </header>
      </div>
      <div className="tab-header h-20 border-b border-b-Fresh-Lavender flex relative mb-6">
        <div className="flex basis-1/3 justify-center items-center">
          <span className=" text-Jewel-Cave text-center text-body-3 font-bold">
            Planned (2)
          </span>
        </div>
        <div className=" flex basis-1/3 justify-center items-center">
          <span className=" text-Jewel-Cave text-center text-body-3 font-bold">
            In-Progress (3)
          </span>
        </div>
        <div className=" flex basis-1/3 justify-center items-center">
          <span className=" text-Jewel-Cave text-center text-body-3 font-bold">
            Live (1)
          </span>
        </div>
        <div className="bg-Singapore-Orchid h-1 w-32 absolute bottom-0 left-1/3"></div>
      </div>
      <div className="pl-6 mb-6 tablet:pl-10 desktop:px-156 ">
        <h2 className="font-bold text-Jewel-Cave text-heading-3">
          In-Progress (3)
        </h2>
        <span className="text-body-3 text-Ocean-Night">
          <span>Features</span> currently being developed
        </span>
      </div>
      <div className="flex flex-col gap-y-4 tablet:flex-row tablet:flex-wrap tablet:gap-x-4 tablet:items-start tablet:justify-start items-center justify-center content tablet:pl-10 pb-24">
        <RoadmapCard />
        <RoadmapCard />
        <RoadmapCard />
        <RoadmapCard />
        <RoadmapCard />
        <RoadmapCard />
        <RoadmapCard />
      </div>
    </>
  );
};

export default Roadmap;
