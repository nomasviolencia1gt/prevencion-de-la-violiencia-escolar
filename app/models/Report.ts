import { Document, Schema, model, models } from "mongoose";
import { IInjurie } from "./Injuries";
import { IIncident } from "./Incidents";

// Interface for Report document
export interface IReport extends Document {
  age: number;
  grade: string;
  school: string;
  incidentDate: Date;
  description: string;
  witnesses: string;
  incidentType: IIncident["_id"];
  injuries: IInjurie[];
  previousIncidents: string;
  emotionalImpact: string;
  academicImpact: string;
  previousActions: string;
  schoolActions: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for Report
const reportSchema = new Schema<IReport>(
  {
    age: {
      type: Number,
      required: [true, "El dato es requerido."],
    },
    grade: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    school: {
      type: String,
      required: true,
    },
    incidentDate: {
      type: Date,
      required: [true, "El dato es requerido."],
    },
    description: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    witnesses: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    incidentType: {
      type: Schema.Types.ObjectId,
      ref: "Incident",
      required: [true, "El incidente es requerido."],
    },
    injuries: [
      {
        type: Schema.Types.ObjectId,
        ref: "Injurie",
      },
    ],
    previousIncidents: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    emotionalImpact: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    academicImpact: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    previousActions: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    schoolActions: {
      type: String,
      required: [true, "El dato es requerido."],
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

// Create and export the Report model
const Report = models.Report || model<IReport>("Report", reportSchema);

export default Report;
