import { fromMarkdown } from "mdast-util-from-markdown";
import * as mdast from "mdast-util-to-string";
import calculateReadingTime from "reading-time";

export default (text: string): number =>
  Math.ceil(calculateReadingTime(mdast.toString(fromMarkdown(text))).minutes);
