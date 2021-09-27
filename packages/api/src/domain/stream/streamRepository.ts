import { Stream } from './streamEntity';

export interface StreamRepository {
  getAll(): Promise<Stream[]>;

  getStreamById(streamId: string): Promise<Stream>;

  create(stream: Stream): Promise<void>;

  update(stream: Stream): Promise<void>;

  delete(streamId: string): Promise<void>;
}
