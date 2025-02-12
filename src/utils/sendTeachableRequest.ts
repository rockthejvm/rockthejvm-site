export const sendTeachableRequest = async (
  url: URL,
  apiKey: string,
): Promise<Response> => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      apiKey,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    return new Response("Failed to fetch data from API", { status: 502 });
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      ...Object.fromEntries(response.headers.entries()),
      "Cache-Control": "public, max-age=60",
    },
  });
};
