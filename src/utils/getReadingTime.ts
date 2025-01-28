import { fromMarkdown } from "mdast-util-from-markdown";
import * as mdast from "mdast-util-to-string";
import calculateReadingTime from "reading-time";

export const getReadingTime = (text: string): number | undefined => {
  if (!text || !text.length) return undefined;
  try {
    const { minutes } = calculateReadingTime(
      mdast.toString(fromMarkdown(text)),
    );
    if (minutes && minutes > 0) {
      return Math.ceil(minutes);
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
};
