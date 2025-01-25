import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MonitorSchema = new Schema({
  name: String,
  responsible: String,
  updated: { type: Date, default: Date.now() },
});

export const MonitorModel = mongoose.model("MonitorModel", MonitorSchema);
