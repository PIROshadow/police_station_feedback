import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import { DistrictModel } from "./police_station.js";
dotenv.config();
const app = express();




const data = [
  "Kachchh",
  "Banaskantha",
  "Patan",
  "Mahesana",
  "Sabarkantha",
  "Gandhinagar",
  "Ahmedabad",
  "Surendranagar",
  "Rajkot",
  "Jamnagar",
  "Porbandar",
  "Junagadh",
  "Amreli",
  "Bhavnagar",
  "Anand",
  "Kheda",
  "PanchMahals",
  "Dohad",
  "Vadodara",
  "Narmada",
  "Bharuch",
  "The Dangs",
  "Navsari",
  "Valsad",
  "Surat",
  "Tapi",
  "Aravalli",
  "Botad",
  "Chhota Udaipur",
  "Devbhumi Dwarka",
  "Gir Somnath",
  "Mahisagar",
  "Morbi",
];

const connect = async () => {
  try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB Atlas!');
  } catch (error) {
      throw error;
  }
}
connect();
app.get("/api/districts", (req, res) => {
  res.json(data);
});
app.get("/api/:district/talukas", async (req, res) => {
  const districtName = req.params.district;
  console.log(DistrictModel);

  try {
    const district = await DistrictModel.findOne({districtName: districtName});

    if (!district) {
      return res.status(404).json({ error: "District not found" });
    }
    res.json(district.talukaNames);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
