interface ITaskList{
    _id: string,
    title: string
}

interface ITask{
    _id: string,
    title: string,
    estado: boolean,
    tempo: number,
    taskListId: string
}