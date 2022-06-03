import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Comment from "./Comment";

const Comments = ({ singleRequest }) => {
  // const { singleRequest, fetchRequest } = useGlobalContext();
  // const { id } = useParams();

  // useEffect(() => {
  //   fetchRequest(id);
  // }, []);
  const { comments } = singleRequest;
  console.log(comments);
  return (
    <div className="bg-white w-full rounded-default py-6 px-6 mb-6 tablet:px-8">
      <div className="comments_numb mb-6">
        <h2 className=" text-heading-3  text-Jewel-Cave font-bold">
          {comments.length} Comments
        </h2>
      </div>
      <div className="main_comment">
        <Comment comments={comments} />
      </div>
      <div className="h-one bg-Fresh-Lavender w-full mb-6"></div>
      <div className="reply_container">
        <Comment />
        <div className="comments_container">
          <div>
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
