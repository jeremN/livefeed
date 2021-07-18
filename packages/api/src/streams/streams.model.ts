import { Schema, model, SchemaTypes } from 'mongoose';

const streamSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    postsTotal: Number,
    startDate: String,
    endDate: String,
    options: {
      isModerated: Boolean,
      isLive: Boolean,
      isHidden: Boolean,
      publicReplies: Boolean,
    },
    lang: String,
    media: [
      {
        path: String,
        alt: String,
        sizes: {
          width: Number,
          height: Number,
        },
      },
    ],
    categories: [
      {
        category: String,
      },
    ],
  },
  { timestamps: true }
);

export const Stream = model('Stream', streamSchema);
