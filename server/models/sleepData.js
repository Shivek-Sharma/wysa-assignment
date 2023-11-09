import { Schema, model } from 'mongoose';

const sleepDataSchema = new Schema({
    sleepGoal: {
        type: String,
        required: true
    },
    sleepProblemDuration: {
        type: String,
        required: true
    },
    userDetails: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}
);

const SleepData = model("SleepData", sleepDataSchema);

export default SleepData;