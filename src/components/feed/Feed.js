import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import TweetBox from "../tweetbox/TweetBox";
import "./Feed.css";
import db from "../firebase/firebase";
import { HiOutlineSparkles } from "react-icons/hi";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  });

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        {<HiOutlineSparkles className="feed__sparkles" />}
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          avatar={post.avatar}
          image={post.image}
          text={post.text}
          username={post.username}
          verified={post.verified}
        />
      ))}
    </div>
  );
}

export default Feed;
