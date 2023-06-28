import { Document, Schema, model, models } from "mongoose";

// Interface for User document
export interface IInjurie extends Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for User
const injurieSchema = new Schema<IInjurie>(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create and export the User model
const Injurie = models.Injurie || model<IInjurie>("Injurie", injurieSchema);

export default Injurie;
