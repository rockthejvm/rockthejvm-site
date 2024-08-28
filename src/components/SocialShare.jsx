"use client";

import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";

export default function Example(props) {
  return (
    <div className="flex flex-row gap-x-2 my-4">
      <TwitterShareButton hashtag="rockthejvm" url={props.shareUrl}>
        <XIcon size={40} round={true} />
      </TwitterShareButton>
      <FacebookShareButton hashtag="rockthejvm" url={props.shareUrl}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton hashtag="rockthejvm" url={props.shareUrl}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
      <RedditShareButton hashtag="rockthejvm" url={props.shareUrl}>
        <RedditIcon size={40} round={true} />
      </RedditShareButton>
      <EmailShareButton hashtag="rockthejvm" url={props.shareUrl}>
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
      <WhatsappShareButton hashtag="rockthejvm" url={props.shareUrl}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  );
}
