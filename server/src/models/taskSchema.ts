import { time } from 'console';
import {model, Schema} from 'mongoose';
import taskListSchema from './taskListSchema';

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
        type: time,
        required: true,
        unique: false
       
    }, 

    taskListId:{
        type: taskListSchema.findById,
        required: true,
        unique: false
    }
})
 
export default model("taskList", taskSchema);