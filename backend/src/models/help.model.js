import mongoose from "mongoose";

const helpSchema = new mongoose.Schema(
    {
        clerkId: { type: String, required: true },
        email : {type: String, required: true},
        problem : {type: String, required: true},
        description : {type: String, required: true},
    }
);

const Help = mongoose.model("Help", helpSchema);

export default Help;