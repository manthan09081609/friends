import mongoose from "mongoose";

export const connectDatabase = (url) => {
  try {
    mongoose
      .connect(url)
      .then(() => console.log("Connected to Database"))
      .catch((err) => console.log("Error while connecting to Database", err));
  } catch (error) {
    console.log("Something went Wrong");
  }
};
