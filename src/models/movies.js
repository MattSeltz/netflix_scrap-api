import { Schema, model } from "mongoose";

const moviesSchema = new Schema({
  title: {
    type: String,
    required:true
  },
  rank: {
    type: String,
    required:true
  },
  length: {
    type: String,
    required:true
  },
  views: {
    type: String,
    required:true
  },
}, { timestamps: true })

export const Movie = model("Movie", moviesSchema)