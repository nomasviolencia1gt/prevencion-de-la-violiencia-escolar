import { Document, Schema, model, models } from "mongoose";

// Interface for User document
export interface IIncident extends Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for User
const incidentSchema = new Schema<IIncident>(
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
const Incident =
  models.Incident || model<IIncident>("Incident", incidentSchema);

export default Incident;
