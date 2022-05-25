import React, { useEffect, useState } from "react";
import AddFeedbackButton from "../components/AddFeedbackButton";
import GobackAndRoadmap from "../components/GobackAndRoadmap";
import RoadmapCards from "../components/RoadmapCard";
import Test from "../components/Test";
import { useGlobalContext } from "../context";
import { data } from "../data";

// const getWidth = () => {
//   return (
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth
//   );
// };
function resize(setwidth) {
  setwidth(window.innerWidth);
}
// const useWindowSize = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     window.addEventListener("resize", resize(setWidth));
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return size;
// };

const Roadmap = () => {
  const { requestsList } = useGlobalContext();
  const [requests, setRequests] = useState(requestsList);

  const repopulateRequests = () => {
    if (window.innerWidth >= 679) {
      setRequests(requestsList);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", repopulateRequests);
    return () => {
      window.removeEventListener("resize", repopulateRequests);
    };
  }, []);

  const statuses = [
    ...new Set(
      data.productRequests
        .map((item) => item.status)
        .filter((status) => status !== "suggestion")
    ),
  ];

  const filterItems = (status) => {
    const newItems = requestsList.filter((item) => item.status === status);
    setRequests(newItems);
  };

  return (
    <>
      <div className="tablet:px-10 tablet:pt-14 desktop:px-156 desktop:pt-78">
        <header className="h-100 w-full flex bg-Raven-Night px-6 items-center justify-between tablet:rounded-default">
          <GobackAndRoadmap />
          <AddFeedbackButton />
        </header>
      </div>
      <div className="tab-header h-20 border-b border-b-Fresh-Lavender flex relative mb-6 tablet:hidden">
        {statuses.map((item, index) => (
          <button
            key={index}
            onClick={() => filterItems(item)}
            className="flex basis-1/3 justify-center items-center"
          >
            <span className=" text-Jewel-Cave text-center text-body-3 font-bold capitalize">
              {item}
            </span>
          </button>
        ))}
        <div className="bg-Singapore-Orchid h-1 w-32 absolute bottom-0 left-1/3"></div>
      </div>

      <div className="hidden tablet:gap-x-4 tablet:items-center tablet:justify-start tablet:pl-10 tablet:mb-6 tablet:mt-8 tablet:pr-10 ">
        {statuses.map((item, index) => {
          return (
            <div
              key={index}
              className="w-80 flex flex-col border justify-start"
            >
              <h2 className="font-bold text-Jewel-Cave text-heading-3 capitalize">
                {item}
              </h2>
              <span className="text-body-3 text-Ocean-Night">
                {item === "planned"
                  ? "Ideas prioritized for research"
                  : item === "in-progress"
                  ? "Currently being developed"
                  : "Released features"}
              </span>
            </div>
          );
        })}
      </div>
      <div className="px-10 pb-20 desktop:px-156 hidden tablet:block">
        <Test requests={requests} statuses={statuses} />
      </div>
      <div className="flex flex-col pb-20 items-center gap-y-4 tablet:hidden">
        <RoadmapCards requests={requests} />
      </div>
    </>
  );
};

export default Roadmap;
