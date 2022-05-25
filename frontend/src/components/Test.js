import React from "react";
import Card from "./Card";

const RoadmapCardsLargeScreen = ({ requests, statuses }) => {
  const planned = requests.filter((item) => item.status === "planned");
  const inProgress = requests.filter((item) => item.status === "in-progress");
  const live = requests.filter((item) => item.status === "live");

  return (
    <main className="mt-8 hidden  tablet:grid tablet:grid-cols-3 tablet:gap-x-2 laptop:gap-x-4 desktop:gap-x-8">
      <div>
        <header className="mb-6">
          <h2 className="font-bold text-Jewel-Cave text-heading-3 capitalize">
            Planned ({planned.length})
          </h2>
          <span className="text-body-3 text-Ocean-Night">
            Ideas prioritized for research
          </span>
        </header>
        <ul className="flex flex-col gap-y-4">
          {requests.map((item) => {
            if (item.status === "planned") {
              return (
                <li key={item.id}>
                  <Card request={item} />
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="">
        <header className="mb-6">
          <h2 className="font-bold text-Jewel-Cave text-heading-3 capitalize">
            In-Progress ({inProgress.length})
          </h2>
          <span className="text-body-3 text-Ocean-Night">
            Currently being developed
          </span>
        </header>
        <ul className="flex flex-col gap-y-4">
          {requests.map((item) => {
            if (item.status === "in-progress") {
              return (
                <li key={item.id}>
                  <Card request={item} />
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="">
        <header className="mb-6">
          <h2 className="font-bold text-Jewel-Cave text-heading-3 capitalize">
            Live ({live.length})
          </h2>
          <span className="text-body-3 text-Ocean-Night">
            Released features
          </span>
        </header>
        <ul className="flex flex-col gap-y-4">
          {requests.map((item) => {
            if (item.status === "live") {
              return (
                <li key={item.id}>
                  <Card request={item} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </main>
  );
};

export default RoadmapCardsLargeScreen;
