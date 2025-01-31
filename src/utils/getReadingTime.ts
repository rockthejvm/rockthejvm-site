import { fromMarkdown } from "mdast-util-from-markdown";
import calculateReadingTime from "reading-time";

export default (text: string): number =>
  Math.ceil(calculateReadingTime(toString(fromMarkdown(text))).minutes);
