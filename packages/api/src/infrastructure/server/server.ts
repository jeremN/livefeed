import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import helmet from 'helmet';
import { config } from '../config/config';

export const createServer = async (): Promise<any> => {
  const server = express();
  const _PORT: number = parseInt(config.port as string, 10);

  server.use(helmet());
  server.use(cors());
  server.use(json());

  server.listen(_PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${_PORT}`);
  });

  return server;
};
