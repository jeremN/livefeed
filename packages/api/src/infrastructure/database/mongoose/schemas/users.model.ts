import { Schema, model, ObjectId, SchemaTypes } from 'mongoose';

const userSchema = new Schema(
  {
    identity: {
      firstname: String,
      lastname: String,
      username: {
        type: String,
        required: true,
      },
      company: String,
      userType: {
        type: String,
        required: true,
      },
    },
    account: {
      type: String,
      required: true,
    },
    streams: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Stream',
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const User = model('User', userSchema);
