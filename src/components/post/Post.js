import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
// import profile__picture from "../../assets/torsudee.png";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@material-ui/icons";
import { GoVerified } from "react-icons/go";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h4>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <GoVerified className="post__badge" />} @{username}
              </span>
            </h4>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutline className="chatBubble" fontSize="small" />
          <Repeat className="repeat" fontSize="small" />
          <FavoriteBorder className="favoriteBorder" fontSize="small" />
          <Publish className="publish" fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
