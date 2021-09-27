import dotenv from 'dotenv';

const envs = dotenv.config();

if (envs.error) {
  throw envs.error;
}

export const config = {
  port: process.env.PORT || 8080,
  mongoUrl: process.env.DB_DEV_URL,
  jwtSecret: '',
};
