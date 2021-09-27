import { Post } from './postEntity';

export interface PostRepository {
  getAll(): Promise<Post[]>;

  getPostById(postId: string): Promise<Post>;

  create(post: Post): Promise<void>;

  update(post: Post): Promise<void>;

  delete(postId: string): Promise<void>;
}
