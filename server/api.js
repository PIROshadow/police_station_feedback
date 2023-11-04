import bcrypt from "bcryptjs";
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import UserSchema from './user.js';

import { DistrictModel, Feedback, PoliceStations } from './feedbackschema.js';
dotenv.config();

const app = express();
const data =[ 'Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Devbhumi Dwarka', 'Dohad', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda', 'Mahesana', 'Mahisagar', 'Morbi', 'Narmada', 'Navsari', 'PanchMahals', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surendranagar', 'Surat', 'Tapi', 'The Dangs', 'Valsad', 'Vadodara' ];
// Middleware
app.use(express.json());

// MongoDB connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

// Routes
app.get('/api/districts', (req, res) => {
  const districts = data.map(district => ({ name: district }));
  res.json(districts);
});

app.get('/api/:district/talukas', async (req, res) => {
  const districtName = req.params.district;
  let districtName_cap = districtName.charAt(0).toUpperCase() + districtName.slice(1);

  try {
     const district = await DistrictModel.findOne({districtName:districtName_cap,});
    
    if (!district) {
      return res.status(404).json({ error: 'District not found' });
    }

    res.json(district.talukaNames);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/:district/:taluka/policestations', async (req, res) => {
  const districtName = req.params.district;
  let districtName_cap = districtName.charAt(0).toUpperCase() + districtName.slice(1);
  const talukaName = req.params.taluka;
  let talukaName_cap = talukaName.charAt(0).toUpperCase() + talukaName.slice(1);
  try {
     const policestations = await PoliceStations.find({talukaName:talukaName_cap,districtName:districtName_cap});
     
    if (!policestations) {
      return res.status(404).json({ error: 'District not found' });
    }

    res.json(policestations);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/:district/:taluka/:policestation', async (req, res) => {
  const policestation = req.params.policestation
  let policestation_cap = policestation.charAt(0).toUpperCase() + policestation.slice(1)
  const taluka = req.params.taluka;
  try {
    const policestation = await PoliceStations.find({name: policestation_cap,talukaName:taluka,});
    
   if (!policestation) {
     return res.status(404).json({ error: 'District not found' });
   }

   res.json(policestation);
 } catch (error) {
   console.error('Error fetching data:', error);
   res.status(500).json({ error: 'Internal server error' });
 }
});
app.post('/api/feedback', async (req, res) => {
  try {
    console.log(req.body);
    const { name, mobile_no, areyousatisfied, rating, layfeedback } = req.body;

    const feedback = new Feedback({
      name,
      mobile_no,
      areyousatisfied,
      rating,
      layfeedback,
    });

    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/auth/register", async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user with the hashed password
    const newUser = new UserSchema({
      ...req.body,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
app.post("/api/auth/login", async (req, res) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Wrong credentials!" });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Wrong credentials!" });
    }

    console.log('Hellos');

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/feedbacks", async (req, res) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    console.log(user);
    
    const feedbacks = await Feedback.find();
console.log(feedbacks);
    res.status(200).json({feedbacks: feedbacks});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const startServer = () => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

// Initialize the application
const initializeApp = async () => {
  await connectToDatabase();
  startServer();
};

initializeApp();
