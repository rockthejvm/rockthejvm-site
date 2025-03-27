// import teachable from "@api/teachable";
// import { defineCollection, z } from "astro:content";

// export default defineCollection({
//   // loader: glob({ pattern: "**/*.json", base: "src/data/courseLectures" }),
//   loader: async () => {
//     const meme = teachable
//       .showLecture({ course_id: "course_id", lecture_id: "lecture_id" })
//       .then(({ data }) => console.log(data))
//       .catch((err) => console.error(err));
//   },
//   schema: ({ image }) => z.object({}).strict(),
// });
