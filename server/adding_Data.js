import dotenv from 'dotenv';
dotenv.config();
import { PoliceStations } from './feedbackschema.js';
import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;

mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true });

const policeStationsData = [
    {
      "name": "Viramgam Rural Police Station",
      "address": "Hansalpur Sereshvar, Gujarat 382150",
      "contact": "Contact details not provided",
      "talukaName": "Viramgam",
      "districtName": "Ahmedabad"
    },
    {
      "name": "Viramgam Police Station",
      "address": "Hansalpur Highway, Viramgam, India",
      "contact": "Contact details not provided",
      "talukaName": "Viramgam",
      "districtName": "Ahmedabad"
    },
    {
      "name": "Sanand GIDC Police Station",
      "address": "Sanand - Viramgam Highway, Setwad, Viramgam, Gujarat 382150",
      "contact": "Contact details not provided",
      "talukaName": "Sanand",
      "districtName": "Ahmedabad"
    },
    {
      "name": "Viramgam Town Police Station",
      "address": "Tower Chowk, Viramgam, Gujarat, India",
      "contact": "Contact details not provided",
      "talukaName": "Viramgam",
      "districtName": "Ahmedabad"
    },
    {
      "name": "Viramgam Railway Police Station",
      "address": "Axar Nagar, Viramgam, Gujarat 382150",
      "contact": "Contact details not provided",
      "talukaName": "Viramgam",
      "districtName": "Ahmedabad"
    }
  ]

async function insertPoliceStations() {
  try {
    await PoliceStations.insertMany(policeStationsData);
    console.log('Police stations data inserted successfully');
  } catch (error) {
    console.error('Error inserting police stations data:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertPoliceStations();
