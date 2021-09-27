import { Schema, model, SchemaTypes } from 'mongoose';

const postSchema = new Schema(
  {
    creator: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postType: {
      type: String,
      required: true,
    },
    meta: {},
    lastModified: {
      type: Date,
      default: Date.now,
    },
    comments: [
      {
        content: {
          type: String,
          required: true,
        },
        creator: {
          type: String,
        },
        moderated: Boolean,
      },
    ],
  },
  { timestamps: true }
);

export const Post = model('Post', postSchema);
