import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {
      const url = "https://rtjvm-mailerlite-worker.andrei-023.workers.dev",
        route = "/",
        body = JSON.stringify({
          email,
        }),
        response = await fetch(url + route, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body,
        });

      if (!response.ok) {
        throw new Error(
          "Failed to subscribe to the newsletter. Try again later.",
        );
      }

      return "Thank you for subscribing to the newsletter!";
    },
  }),
};
