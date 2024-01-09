import React, { useEffect, useState } from "react";
import classes from "./PostInfoPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostInfoPage = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const getPostInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPostInfo();
  }, [id]);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {post && <h1>{post.title}</h1>}
      {post && <p>{post.body}</p>}
    </div>
  );
};

export default PostInfoPage;
