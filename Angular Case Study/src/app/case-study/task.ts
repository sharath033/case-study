export interface ITask{
    taskID:number;
    ownerID:number;
    creatorID:number;
    name:string;
    description:string;
    status:string;
    priority:string;
    notes:string;
    isBookmarked:string;
    createdOn:Date;
    statusChangedOn:Date;
}