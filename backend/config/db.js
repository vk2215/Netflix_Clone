import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";


export const connectDB = async () => {
	try {
		const uri = ENV_VARS.MONGO_URI;
		if (!uri) {
			throw new Error("MONGO_URI is not defined in .env file");
		}
	
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	
		console.log("✅ MongoDB Connected...");
	} catch (error) {
		console.error("❌ MongoDB Connection Error:", error);
		console.error("🔍 Cause:", error.cause);  // Check deeper cause of error
		process.exit(1); // Exit process with failure
	}
	
};


