"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

export default function Example(props) {
  return (
    <div className="my-4">
      <p>Share on:</p>
      <div className="flex flex-row gap-x-2 my-2">
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
    </div>
  );
}
