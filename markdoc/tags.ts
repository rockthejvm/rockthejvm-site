import { YouTube } from "astro-embed";

export const youtube = {
  render: YouTube,
  attributes: {
    id: { type: String, required: true },
  },
};
