"use client";

import {
  FacebookShareButton,
  LinkedinShareButton,
  PocketShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

export default function Example(props) {
  const { description, title, url, hashTags } = props;
  return (
    <div className="my-4 flex flex-row gap-x-3">
      <p className="my-auto italic">Share on:</p>
      <TwitterShareButton
        title={title}
        url={url}
        hashtags={[...hashTags, "rockthejvm"]}
        related={["@rockthejvm"]}
      >
        {props.twitter}
      </TwitterShareButton>
      <LinkedinShareButton
        title={title}
        summary={description}
        source={"https://rockthejvm.com"}
        url={url}
      >
        {props.linkedin}
      </LinkedinShareButton>
      <FacebookShareButton hashtag="#rockthejvm" url={url}>
        {props.facebook}
      </FacebookShareButton>
      <RedditShareButton title={title}>{props.reddit}</RedditShareButton>
      <PocketShareButton title={title}>{props.pocket}</PocketShareButton>
    </div>
  );
}
