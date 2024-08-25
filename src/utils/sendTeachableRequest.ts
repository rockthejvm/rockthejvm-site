export const sendTeachableRequest = async (url: URL, apiKey: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      apiKey: apiKey,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    return new Response("Failed to fetch data from API", { status: 502 });
  }

  response.headers.set("Cache-Control", "public, max-age=60");

  return response;
};
