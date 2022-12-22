import { getTime } from "date-fns";

export interface KidI {
    id: number;
    fname: string;
    lname: string;
    gender: string;
    dob: Date;
    age: number;
}

export const initialState: KidI[] = [{
    id: 1,
    fname: "youssra",
    lname: "dahi",
    gender: "F",
    dob: new Date(),
    age: 5
}, {
    id: 2,
    fname: "othmane",
    lname: "dahi",
    gender: "M",
    dob: new Date(),
    age: 6
}, {
    id: 3,
    fname: "hajar",
    lname: "dahi",
    gender: "F",
    dob: new Date(),
    age: 7
}];
