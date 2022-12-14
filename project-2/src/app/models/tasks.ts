export class Tasks {

    taskName: string;
    creationDate: string;
    dueDate: string;
    location: string;
    index: number;

    constructor(taskName: string, creationDate: string, dueDate: string, location: string, index: number) {
        this.taskName = taskName;
        this.creationDate = creationDate;
        this.dueDate = dueDate;
        this.location = location;
        this.index = index;
    }

}
