import React from "react";
import { RoadmapData } from "../data/headerData";

const Roadmap = () => {
  return (
    <div className="w-56 h-44 bg-white text-Raven-Night tablet:block pt-6 px-6 rounded-default">
      <table className="table-fixed table_width">
        <thead className="h-9">
          <tr>
            <th className="w-2/3 text-left">Roadmap</th>
            <th className=" w-1/3">View</th>
          </tr>
        </thead>
        <tbody className="table_width">
          {RoadmapData.map((item) => (
            <tr key={item.id}>
              <td className="">
                <div className="flex gap-x-2 items-center">
                  <div
                    className={`indicator
                      ${
                        item.status === "Planned"
                          ? "bg-Steamed-Salmon"
                          : item.status === "In-Progress"
                          ? "bg-Singapore-Orchid"
                          : item.status === "Live"
                          ? "bg-Blue-Mana"
                          : null
                      }
                      rounded-full`}
                  ></div>
                  {item.status}
                </div>
              </td>

              <td className=" flex justify-center">{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roadmap;
