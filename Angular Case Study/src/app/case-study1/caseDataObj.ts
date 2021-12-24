export class postData{
    taskID!:number;
    ownerID!:number;
    creatorID!:number;
    name!:string;
    description!:string;
    status!:string;
    priority!:string;
    notes!:string;
    isBookmarked!:boolean;
    createdOn!:Date;
    statusChangedOn!:Date;
    

}

export interface respData{
    taskID:number;
    ownerID:number;
    creatorID:number;
    name:string;
    description:string;
    status:string;
    priority:string;
    notes:string;
    isBookmarked:boolean;
    createdOn:Date;
    statusChangedOn:Date;
}