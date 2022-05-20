import React from "react";
import Feedbacks from "./Feedbacks";
import SuggestionsHeader from "./SuggestionsHeader";

const Content = () => {
  return (
    <div
      className="flex flex-col gap-y-8
    tablet:gap-y-6 tablet:items-center tablet:px-10
    laptop:items-start
    laptop:pt-24 laptop:px-0  desktop:pl-6 desktop:pr-40 content_cont laptop:pr-12"
    >
      <SuggestionsHeader />
      <Feedbacks />
    </div>
  );
};

export default Content;
