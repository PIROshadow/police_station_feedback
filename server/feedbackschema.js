import mongoose from "mongoose";
const districtSchema = new mongoose.Schema({
    districtName: String,
    twoLetterCode: String,
    numberOfTalukas: Number,
    talukaNames: [String],
  });
  
  
const feedbackSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: Number,
      required: true,
    },
    areyousatisfied:{ 
      type:Boolean,
      required:true,
    },
    rating: {
      type: [Number],
      required: true,
    },
    longfeedback: {
      type: String,
    },
    policestation: {type:String},
    taluka: {type:String},
    district: {type: String},
  });
  const policeStationSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    talukaName: String,
    districtName: String,
  });
  export const PoliceStations = mongoose.model('police_station_lists', policeStationSchema);
  export const DistrictModel = mongoose.model('police_stations', districtSchema);
  export const Feedback = mongoose.model('feedbacks', feedbackSchema);