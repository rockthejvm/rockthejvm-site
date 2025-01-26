"use client";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export default function Example(props) {
  return (
    <div className="my-4 flex flex-row gap-x-3">
      <p className="my-auto italic">Share on:</p>
      <TwitterShareButton
        title={props.title}
        url={props.shareUrl}
        hashtags={[...props.tags, "rockthejvm"]}
        related={["@rockthejvm"]}
      >
        {props.twitter}
      </TwitterShareButton>
      <FacebookShareButton hashtag="rockthejvm" url={props.shareUrl}>
        {props.facebook}
      </FacebookShareButton>
      <LinkedinShareButton hashtag="rockthejvm" url={props.shareUrl}>
        {props.linkedin}
      </LinkedinShareButton>
    </div>
  );
}
