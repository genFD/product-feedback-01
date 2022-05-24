import React from "react";

const RoadmapHeader = ({ itemsLength, requestsStatus }) => {
  return (
    <div>
      <h2 className="font-bold text-Jewel-Cave text-heading-3 capitalize">
        {requestsStatus} ({itemsLength})
      </h2>
      <span className="text-body-3 text-Ocean-Night">
        {requestsStatus === "planned"
          ? "Ideas prioritized for research"
          : requestsStatus === "in-progress"
          ? "Currently being developed"
          : "Released features"}
      </span>
    </div>
  );
};

export default RoadmapHeader;
