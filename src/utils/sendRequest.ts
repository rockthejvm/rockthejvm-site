export const sendRequest = async (apiUrl: string, init?: RequestInit) => {
  // Fetch data from the third-party API
  const apiResponse = await fetch(apiUrl, init);

  // Check if the API response is valid
  if (!apiResponse.ok) {
    return new Response("Failed to fetch data from API", { status: 502 });
  }

  // Clone the API response for modification
  const response = new Response(apiResponse.body, apiResponse);

  // Set Cache-Control header to cache the response for 1 minute
  response.headers.set("Cache-Control", "public, max-age=60"); // Cache for 60 seconds

  return response;
};
