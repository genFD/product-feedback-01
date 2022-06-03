import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import CommentsInput from "../components/CommentsInput";
import EditFeedbackButton from "../components/EditFeedbackButton";
import Feedback from "../components/Feedback";
import GobackButton from "../components/GobackButton";
import { useGlobalContext } from "../context";

const serverUrl = "http://localhost:4000/api/feedbacks/";

const FeedbackDetail = () => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchRequest = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}${id}`);
        if (data) {
          setRequest(data);
        } else {
          setRequest(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchRequest();
  }, [id]);

  // console.log(title, description, upvotes, comments);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (!request) {
    return <h2>Couldn't fetch request</h2>;
  }

  const { title, description, category, upvotes, comments } = request;
  return (
    <>
      <div className="pt-6 mb-6 tablet:px-10 tablet:pt-14 laptop:px-156 desktop:px-355 desktop:pt-78">
        <header className="w-full mb-6 flex items-center px-6 justify-between tablet:px-0 laptop:px-4 desktop:px-0 tablet:rounded-default">
          <GobackButton />
          <EditFeedbackButton />
        </header>
        <div className="flex items-center justify-center">
          <div className="bg-white feedback_cont w-327 h-200 tablet:h-151 tablet:w-689 desktop:w-730 rounded-default p-6">
            <div className="content area-b">
              <header className="mb-2">
                <h2 className="text-body-3 text-Raven-Night font-bold">
                  {title}
                </h2>
              </header>
              <p className="text-body-3 text-Ocean-Night mb-2">{description}</p>
            </div>
            <div className="area-a hidden tablet:block ">
              <div className="vote-tag bg-Cotton-Ball w-69 tablet:w-10 h-8 tablet:h-53 flex tablet:flex-col items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
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
                  {upvotes}
                </span>
              </div>
            </div>
            <div className="area-c hidden tablet:block ">
              <div className=" flex gap-x-2 items-center comm_stats">
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                    fill="#CDD2EE"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="text-heading-3 text-Raven-Night">
                  {comments.length}
                </span>
              </div>
            </div>
            <div className="area-c-a-cont flex tablet:hidden">
              <div className="area-a">
                <div className="vote-tag bg-Cotton-Ball w-69 tablet:w-10 h-8 tablet:h-53 flex tablet:flex-col items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
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
                    {upvotes}
                  </span>
                </div>
              </div>
              <div className="area-c">
                <div className=" flex gap-x-2 items-center comm_stats">
                  <svg
                    width="18"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                      fill="#CDD2EE"
                      fillRule="nonzero"
                    />
                  </svg>
                  <span className="text-heading-3 text-Raven-Night">0</span>
                </div>
              </div>
            </div>
            <div className="area-d">
              <div
                className="ux-tag h-30p rounded-default bg-Cotton-Ball text-center text-body-3 font-semibold text-The-Rainbow-Fish flex items-center justify-center hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish mb-4 capitalize
        "
              >
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="px-6 pb-88 tablet:px-10 laptop:px-156 desktop:px-355">
        <Comments  />
        <CommentsInput />
      </main> */}
    </>
  );
};
export default FeedbackDetail;
