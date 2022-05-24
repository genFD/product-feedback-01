import React from "react";
import Card from "./Card";

const Test = ({ requests, statuses }) => {
  return (
    <main className="mt-8 hidden tablet:grid tablet:grid-cols-3 tablet:gap-x-2">
      {/* {statuses.map((status, index) => {
        return (
          <div key={index} className="basis-1/3">
          {
           requests.map((request)=>{})
          }
            <header>
              <h2 className="font-bold text-Jewel-Cave text-heading-3 capitalize">
                Planned
              </h2>
              <span className="text-body-3 text-Ocean-Night">
                Ideas prioritized for research
              </span>
            </header>
            <ul className="flex flex-col gap-y-4">
              {requests.map((item) => {
                if (item.status === "planned") {
                  return (
                    <li>
                      <Card request={item} />
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        );
      })} */}
      <div>
        <header className="mb-6">
          <h2 className="font-bold text-Jewel-Cave text-heading-3 capitalize">
            Planned
          </h2>
          <span className="text-body-3 text-Ocean-Night">
            Ideas prioritized for research
          </span>
        </header>
        <ul className="flex flex-col gap-y-4">
          {requests.map((item) => {
            if (item.status === "planned") {
              return (
                <li>
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
            In-Progress (3)
          </h2>
          <span className="text-body-3 text-Ocean-Night">
            Ideas prioritized for research
          </span>
        </header>
        <ul className="flex flex-col gap-y-4">
          {requests.map((item) => {
            if (item.status === "in-progress") {
              return (
                <li>
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
            Live (1)
          </h2>
          <span className="text-body-3 text-Ocean-Night">
            Ideas prioritized for research
          </span>
        </header>
        <ul className="flex flex-col gap-y-4">
          {requests.map((item) => {
            if (item.status === "live") {
              return (
                <li>
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

export default Test;
