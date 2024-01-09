import React from "react";
import classes from "./PostsCard.module.css";
import { useNavigate } from "react-router-dom";

const PostsCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes.main}
      onClick={() => {
        navigate(`/${post.id}`);
      }}
    >
      <p className={classes.title}>{post.title}</p>
    </div>
  );
};

export default PostsCard;
