import { Schema, model, ObjectId, SchemaTypes } from 'mongoose';

export interface IPost {
  author: ObjectId;
  content: string;
}

const postSchema = new Schema(
  {
    author: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model('Post', postSchema);
