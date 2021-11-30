import { JsonWebTokenError } from 'jsonwebtoken';
import {model, Schema} from 'mongoose';

const taskLIsttSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: false
    }
})
 
export default model("taskList", taskLIsttSchema);