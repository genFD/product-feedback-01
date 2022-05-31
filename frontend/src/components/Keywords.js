import React from "react";
import { useGlobalContext } from "../context";
import { Tags } from "../data/headerData";

const Keywords = () => {
  const { requestsList } = useGlobalContext();
  const categories = [
    "All",
    ...new Set(requestsList.map((item) => item.category)),
    "UX",
    "UI",
  ];

  return (
    <div className="flex w-56 h-44 rounded-default bg-white flex-wrap gap-x-2 pt-6 pl-6">
      {Tags.map((tag, index) => (
        <div
          className="ux-tag h-8 rounded-default bg-Cotton-Ball text-center text-body-3 font-semibold text-The-Rainbow-Fish flex items-center justify-center hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish"
          key={index}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
export default Keywords;
