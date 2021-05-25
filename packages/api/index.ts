import express from 'express';

// This is temporary, juste for repo initialization
const app = express();
const _PORT = 8000;

app.listen(_PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${_PORT}`);
});
