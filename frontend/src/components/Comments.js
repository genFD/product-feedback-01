import React from "react";
import { useGlobalContext } from "../context";
import MainComment from "./MainComment";

const Comments = () => {
  const { usersData } = useGlobalContext();
  const testUser = usersData.productRequests[1];
  console.log(testUser);

  return <MainComment />;
};

export default Comments;
