"use client";

import {
  FacebookShareButton,
  LinkedinShareButton,
  PocketShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

export default function Example({
  description,
  title,
  url,
  hashTags,
  facebook,
  twitter,
  linkedin,
  reddit,
  pocket,
}) {
  return (
    <div className="my-4 flex flex-row gap-x-3">
      <p className="my-auto italic">Share on:</p>
      <TwitterShareButton
        title={title}
        url={url}
        hashtags={[...hashTags, "rockthejvm"]}
        related={["@rockthejvm"]}
      >
        {twitter}
      </TwitterShareButton>
      <LinkedinShareButton
        title={title}
        summary={description}
        source={"https://rockthejvm.com"}
        url={url}
      >
        {linkedin}
      </LinkedinShareButton>
      <FacebookShareButton hashtag="#rockthejvm" url={url}>
        {facebook}
      </FacebookShareButton>
      <RedditShareButton title={title}>{reddit}</RedditShareButton>
      <PocketShareButton title={title}>{pocket}</PocketShareButton>
    </div>
  );
}
