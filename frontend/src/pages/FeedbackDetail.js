import React from "react";
import Comments from "../components/Comments";
import CommentsInput from "../components/CommentsInput";
import EditFeedbackButton from "../components/EditFeedbackButton";
import Feedback from "../components/Feedback";
import GobackButton from "../components/GobackButton";

const FeedbackDetail = () => {
  return (
    <>
      <div className="pt-6 mb-6 tablet:px-10 tablet:pt-14 laptop:px-156 desktop:px-355 desktop:pt-78">
        <header className="w-full flex items-center px-6 justify-between tablet:rounded-default">
          <GobackButton />
          <EditFeedbackButton />
        </header>
      </div>
      <main className="px-6 pb-88 tablet:px-10 laptop:px-156 desktop:px-355">
        <Comments />
        <CommentsInput />
      </main>
    </>
  );
};
export default FeedbackDetail;
