import mongoose from "mongoose";
import chalk from "chalk";

const connect = async () => {
  if (mongoose.connection.readyState !== 0) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(chalk.bgCyan("database connection established"));
  } catch (error) {
    throw new Error(chalk.red("Error connecting to Mongoose"));
  }
};
export default connect;
