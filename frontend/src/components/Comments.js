import React from "react";
import { useGlobalContext } from "../context";
import Comment from "./Comment";

const Comments = () => {
  const { usersData } = useGlobalContext();
  return (
    <div className="bg-white h-822 w-full rounded-default py-6 px-6 mb-6 tablet:px-8">
      <div className="comments_numb mb-6">
        <h2 className=" text-heading-3  text-Jewel-Cave font-bold">
          4 Comments
        </h2>
      </div>
      <div className="main_comment">
        <Comment />
      </div>
      <div className="h-one bg-Fresh-Lavender w-full mb-6"></div>
      <Comment />
    </div>
  );
};

export default Comments;
