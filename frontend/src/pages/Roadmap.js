import React from "react";
import AddFeedbackButton from "../components/AddFeedbackButton";
import GobackAndRoadmap from "../components/GobackAndRoadmap";

const Roadmap = () => {
  return (
    <>
      <div className="tablet:px-10 tablet:pt-14 desktop:px-156 desktop:pt-78">
        <header className="h-100 w-full flex bg-Raven-Night px-6 items-center justify-between tablet:rounded-default">
          <GobackAndRoadmap />
          <AddFeedbackButton />
        </header>
      </div>
      <div className="tab-header h-20 border-b border-b-Fresh-Lavender flex relative mb-6">
        <div className="flex basis-1/3 justify-center items-center">
          <span className=" text-Jewel-Cave text-center text-body-3 font-bold">
            Planned (2)
          </span>
        </div>
        <div className=" flex basis-1/3 justify-center items-center">
          <span className=" text-Jewel-Cave text-center text-body-3 font-bold">
            In-Progress (3)
          </span>
        </div>
        <div className=" flex basis-1/3 justify-center items-center">
          <span className=" text-Jewel-Cave text-center text-body-3 font-bold">
            Live (1)
          </span>
        </div>
        <div className="bg-Singapore-Orchid h-1 w-32 absolute bottom-0 left-1/3"></div>
      </div>
      <div className="pl-6 mb-6">
        <h2 className="font-bold text-Jewel-Cave text-heading-3">
          In-Progress (3)
        </h2>
        <span className="text-body-3 text-Ocean-Night">
          <span>Features</span> currently being developed
        </span>
      </div>
      <div className=" flex items-center justify-center content">
        <div className="roadmap_card w-80 h-233 pt-6 bg-white rounded-default">
          {/* <div className="h-2 bg-Singapore-Orchid rounded-t-default"></div> */}
          <div className="flex gap-x-2 items-center pl-6 mb-4">
            <span className="block rounded-full w-2 h-2 bg-Singapore-Orchid"></span>
            <span className=" text-Ocean-Night text-body-3">In-progress</span>
          </div>
          <div className="pl-6">
            <h2 className="text-body-3 text-Jewel-Cave font-bold">
              One-click portfolio generation
            </h2>
            <div className="flex gap-y-2 flex-col mb-4">
              <p>
                Add ability to create professional looking portfolio from
                profile.
              </p>
              <div className="ux-tag h-8 rounded-default bg-Cotton-Ball text-center text-body-3 font-semibold text-The-Rainbow-Fish flex items-center justify-center hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
                Feature
              </div>
            </div>
            <div className="flex justify-between pr-6">
              <div className="vote-tag tablet: bg-Cotton-Ball w-69 tablet:w-10 h-8 tablet:h-53 flex tablet:flex-col items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 6l4-4 4 4"
                    stroke="#4661E6"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="text-body-3 text-Jewel-Cave text-center font-bold">
                  99
                </span>
              </div>

              <div className="flex gap-x-1 items-center comm_stats">
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                    fill="#CDD2EE"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="text-heading-3 text-Raven-Night">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
