import mongoose from 'mongoose';

import { config } from '../../config/config';

interface IMongoCfg {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  useCreateIndex: boolean;
  useFindAndModify: boolean;
}

const _MONGODB_URI = `${config.mongoUrl}`;
const _CONNECT_CFG: IMongoCfg = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export const connectToMongoDB = (
  url: string = _MONGODB_URI,
  options: IMongoCfg = _CONNECT_CFG
): Promise<typeof mongoose> =>
  mongoose.connect(url, options, () => {
    console.log('[database]: connected to database');
  });
