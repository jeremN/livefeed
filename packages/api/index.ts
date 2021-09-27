import { createServer } from './src/infrastructure/server/server';
import { connectToMongoDB } from './src/infrastructure/database/mongoose/database';

const start = async (): Promise<void> => {
  console.debug('A0');
  try {
    console.debug('A1');
    await connectToMongoDB();
    console.debug('A2');
    await createServer();
    console.debug('A3');
  } catch (error) {
    console.error(error);
  }
};

start();
