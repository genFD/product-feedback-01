import React from "react";
import Feedback from "./Feedback";

const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center desktop:gap-y-5">
      <Feedback />
      <Feedback />
    </div>
  );
};

export default Feedbacks;
