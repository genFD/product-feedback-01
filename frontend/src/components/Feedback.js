import React from "react";

const Feedback = () => {
  return (
    <div className="bg-white min-w-327 h-200 tablet:h-151 tablet:w-689 desktop:w-825 rounded-default p-6 feedback_cont">
      <div className="feedback_content_cont">
        <h2 className="feedback_title text-body-3 text-Raven-Night font-bold mb-2">
          Add tags for solutions
        </h2>
        <p className="feedback_comment text-body-3 text-Ocean-Night mb-2">
          Easier to search for solutions based on a specific stack.
        </p>

        <div
          className="ux-tag h-7 rounded-default bg-Cotton-Ball text-center text-body-3 font-semibold text-The-Rainbow-Fish flex items-center justify-center hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish mb-4
        "
        >
          Enhancement
        </div>
      </div>
      <footer className="tablet:hidden tablet:invisible flex justify-between items-center">
        <div
          className="vote-tag bg-Cotton-Ball w-69 tablet:w-10 h-8 tablet:h-53 flex tablet:flex-col items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish
      
      "
        >
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
        <div>
          <div className=" flex gap-x-1 items-center comm_stats">
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
      </footer>
      <div
        className="vote-tag invisible tablet:visible tablet: bg-Cotton-Ball w-69 tablet:w-10 h-8 tablet:h-53 flex tablet:flex-col items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish
      
      "
      >
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

      <div className="invisible tablet:visible flex gap-x-1 items-center comm_stats">
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
  );
};

export default Feedback;
