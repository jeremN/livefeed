import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { connect } from './utils/database';

const envs = dotenv.config();

if (envs.error) {
  throw envs.error;
}

if (!process.env.PORT) {
  throw new Error('No PORT configured !');
}

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(cors());
app.use(json());

export const start = async (): Promise<void> => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};
