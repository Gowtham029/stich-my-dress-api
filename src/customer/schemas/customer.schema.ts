import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
  name: String,
  mobile: { primary: String, secondary: String },
  email: String,
  dob: { type: Date },
  city: String,
  address: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    }
  },
  enableUpdates: Boolean,
});
