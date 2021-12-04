interface ITaskList{
    _id: String,
    title: String
}

interface ITask{
    _id: String,
    title: String,
    estado: boolean,
    tempo: number,
    taskListId: String
}