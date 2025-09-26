import fetch from "node-fetch";
import redis from "redis";

const client = redis.createClient({ url: "redis://127.0.0.1:6379" });
await client.connect();

client.on("error", (err) => console.error("Redis error:", err));

const apiUrl = "https://api.restful-api.dev/objects";
const cacheKey = "objects";

const fetchObjects = async () => {
  try {
    // 1. Check Redis cache
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log("Serving data from Redis cache:");
      return JSON.parse(cachedData);
    }

    // 2. Fetch from API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // 3. Save response to Redis for 1 hour
    await client.setEx(cacheKey, 3600, JSON.stringify(data));
    console.log("Fetched from API and saved to Redis:");
    return data;
  } catch (err) {
    console.error("Error fetching objects:", err);
  }
};

// Call the function
const data = await fetchObjects();
console.log(data);
await client.quit();
