import { JsonWebTokenError } from 'jsonwebtoken';
import {model, Schema} from 'mongoose';

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: false
    },
    
    estado:{
        type: Boolean,
        required: true,
        unique: false
       
    },

    tempo:{
        type: Number,
        required: true,
        unique: false,
        default: 0
       
    }, 

    taskListId:{
        type: String,
        required: true,
        unique: false
    }
})
 
export default model("Task", taskSchema);