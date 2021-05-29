import mongoose from 'mongoose';

interface IMongoCfg {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  useCreateIndex: boolean;
  useFindAndModify: boolean;
}

const MONGODB_URI = `${process.env.DB_DEV_URL}`;
const CONNECT_CFG: IMongoCfg = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export const connect = (url = MONGODB_URI, options = CONNECT_CFG) =>
  mongoose.connect(url, options, () => {
    console.log('[database]: connected to database');
  });
