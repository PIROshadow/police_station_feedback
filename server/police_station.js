import mongoose from 'mongoose';

const districtSchema = new mongoose.Schema({
  districtName: String,
  twoLetterCode: String,
  numberOfTalukas: Number,
  talukaNames: [String],
});

export const DistrictModel = mongoose.model('police_station', districtSchema);

