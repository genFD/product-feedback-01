import React from "react";
import SuggestionsHeader from "./SuggestionsHeader";

const Content = () => {
  return (
    <div
      className="
    tablet:flex tablet:flex-col tablet:items-center
    laptop:items-start
    laptop:pt-24 laptop:px-0 tablet:px-10 desktop:pl-6 desktop:pr-40 content_cont laptop:pr-12"
    >
      <SuggestionsHeader />
    </div>
  );
};

export default Content;
