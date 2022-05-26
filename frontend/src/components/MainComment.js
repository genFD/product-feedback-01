import React from "react";
import profilePic from "../assets/user-images/image-elijah.jpg";

const MainComment = () => {
  return (
    <div className="bg-white h-822 w-full rounded-default py-6 px-6 mb-6 tablet:px-8">
      <div className="comments_numb mb-6">
        <h2 className=" text-heading-3  text-Jewel-Cave font-bold">
          4 Comments
        </h2>
      </div>
      <div className="comment mb-6">
        <header className="w-full flex justify-between mb-4">
          <div className="flex gap-x-4">
            <img src={profilePic} alt="" className="h-10 w-10 rounded-full" />
            <div className="handle flex flex-col">
              <h3 className="text-Jewel-Cave text-body-3 font-bold">
                Elijah Moss
              </h3>
              <span className=" text-Ocean-Night text-body-3">
                @hexagon.bestagon
              </span>
            </div>
          </div>
          <button className=" text-The-Rainbow-Fish text-body-3 font-semibold">
            Reply
          </button>
        </header>
        <p className="text-Ocean-Night text-body-3">
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </p>
      </div>
      <div className="h-one bg-Fresh-Lavender w-full"></div>
    </div>
  );
};

export default MainComment;
