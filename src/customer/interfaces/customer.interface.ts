import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly name: string;
  readonly mobile: { primary: string, secondary: string };
  readonly email: string;
  readonly dob: { type: Date };
  readonly city: string;
  readonly address: string;
  readonly location: {
    type: {
      type: string,
      enum: ['Point']
    },
    coordinates: {
      type: [number],
    }
  };
  readonly enableUpdates: boolean;
}
