import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "../firebase/firebase";
import { MdGif } from "react-icons/md";
import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import { IoIosCalendar } from "react-icons/io";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Torsu Derrick",
      username: "torsudee",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://www.lofficielsingapore.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F55010%2F1641262798-1641231749-the-weeknd-new-album-dawn-fm-jim-carrey-lil-wayne.jpeg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=1920&q=75",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <input
            placeholder="What's happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <div className="tweetBox__footer">
          <div className="tweetBox__iconContainer">
            {<IoImageOutline className="tweetBox__icon" />}
            {<MdGif className="tweetBox__icon" />}
            {<BiPoll className="tweetBox__icon" />}
            {<VscSmiley className="tweetBox__icon" />}
            {<IoIosCalendar className="tweetBox__icon" />}
            {<IoLocationOutline className="tweetBox__icon" />}
          </div>
          <Button
            type="submit"
            className="tweetBox__tweetButton"
            onClick={sendTweet}
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
