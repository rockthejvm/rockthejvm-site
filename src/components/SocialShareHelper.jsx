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
        source={"Rock the JVM"}
        url={url}
      >
        {props.linkedin}
      </LinkedinShareButton>
      <RedditShareButton title={title} url={url}>
        {props.reddit}
      </RedditShareButton>
      <FacebookShareButton hashtag="#rockthejvm" url={url}>
        {props.facebook}
      </FacebookShareButton>
      <PocketShareButton title={title} url={url}>
        {props.pocket}
      </PocketShareButton>
    </div>
  );
}
