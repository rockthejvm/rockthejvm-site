"use client";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export default function Example(props) {
  return (
    <div className="my-4 flex flex-row gap-x-2">
      <p className="my-auto">Share on:</p>
      <TwitterShareButton hashtag="rockthejvm" url={props.shareUrl}>
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
