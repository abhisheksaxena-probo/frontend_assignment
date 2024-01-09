import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsCard from "../../components/PostsCard/PostsCard";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);
  return (
    <div className={classes.main}>
      {loading && <p>Loading...</p>}
      {posts.length > 0 &&
        posts.map((items) => <PostsCard key={items.id} post={items} />)}
    </div>
  );
};

export default HomePage;
