import { JsonWebTokenError } from 'jsonwebtoken';
import {model, Schema} from 'mongoose';

const taskListSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: false
    }
})

export default model("taskListSchema", taskListSchema);