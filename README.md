# lagacy-api-refactore

This project demonstrates the evolution of a Node.js application originally built using callback functions (Callback Hell) to an improved version utilizing async/await for better readability and maintenance. Additionally, Redis is implemented for caching data to enhance performance and reduce repeated database or API calls.

Features
Callback Hell Example: The initial version of the project uses nested callbacks to handle asynchronous tasks, demonstrating the challenges of Callback Hell.

Refactored Version: The code has been refactored to use async/await, making it more readable, maintainable, and easier to debug.

Redis Caching: Redis is integrated into the refactored version to cache the results of expensive operations, reducing the need for redundant data fetching and improving performance.

Technologies Used
Node.js: JavaScript runtime used for the server-side code.

Async/Await: Refactored the code to use async/await for handling asynchronous operations.

Redis: In-memory data structure store used as a cache to improve performance.

node-fetch: A lightweight module to make HTTP requests.

Redis Client for Node.js: To interact with Redis in the refactored version.
