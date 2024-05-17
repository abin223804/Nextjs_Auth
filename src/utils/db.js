import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState !== 0) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo connection successfully established");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};
export default connect;
