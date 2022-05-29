import React from "react";
import "./Widget.css";
import { TwitterTimelineEmbed, TwitterShareButton } from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        {/* <TwitterTweetEmbed tweetId="1529814087793725441" /> */}
        <TwitterTimelineEmbed
          className="widgets__twitterTimelineEmbed"
          sourceType="profile"
          screenName="theweeknd"
          options={{ height: 500 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "reactjs is awesome", via: "torsuderrick" }}
        />
      </div>
    </div>
  );
}

export default Widget;
