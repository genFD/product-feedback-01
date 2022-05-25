import React, { useEffect, useState } from "react";
import AddFeedbackButton from "../components/AddFeedbackButton";
import GobackAndRoadmap from "../components/GobackAndRoadmap";
import RoadmapCards from "../components/RoadmapCard";
import RoadmapCardsLargeScreen from "../components/Test";
import { useGlobalContext } from "../context";

const Roadmap = () => {
  const { requestsList } = useGlobalContext();
  const [requests, setRequests] = useState(requestsList);
  const [value, setValue] = useState(0);

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
      requestsList
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
      <div className="tab-header-mobile h-20 border-b border-b-Fresh-Lavender flex relative transition-all duration-500 mb-6 tablet:hidden">
        {statuses.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              filterItems(item);
              setValue(index);
            }}
            className={`flex basis-1/3 justify-center items-center text-center text-body-3 font-bold capitalize text-opacity-50 text-Jewel-Cave ${
              index === value && "active-btn"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="px-10 pb-20 desktop:px-156 hidden tablet:block">
        <RoadmapCardsLargeScreen requests={requests} statuses={statuses} />
      </div>
      <div className="flex flex-col pb-20 items-center gap-y-4 tablet:hidden">
        <RoadmapCards requests={requests} />
      </div>
    </>
  );
};

export default Roadmap;
