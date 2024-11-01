export function onRequestGet() {
  return new Response(
    JSON.stringify({
      updatedLectureSections: [
        {
          name: "Intro",
          lectures: [],
        },
      ],
    }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}
