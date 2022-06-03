import React from "react";
import { useGlobalContext } from "../context";
import Feedback from "./Feedback";

const Feedbacks = () => {
  const { suggestions } = useGlobalContext();

  return (
    <div className="flex pb-6 flex-col gap-y-4 items-center justify-center desktop:gap-y-5">
      {suggestions.map((suggestion) => {
        return <Feedback key={suggestion._id} suggestion={suggestion} />;
      })}
    </div>
  );
};

export default Feedbacks;
