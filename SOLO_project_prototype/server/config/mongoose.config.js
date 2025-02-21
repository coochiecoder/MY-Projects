import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  try { 
    connect(MONGODB_URI, {dbName: 'E_Store'})
    console.log('Connected to MongoDB');
  }
  catch (error) {`DB connection failed------>> ${error}` }
} 