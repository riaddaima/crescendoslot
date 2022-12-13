export interface KidI {
    id: number, name: string, gender: string, age: number;
}

export interface KidsI {
  kids: KidI[];
}

export const initialState: KidsI = {
 kids : [{id: 1, name: "youssra", gender: "F", age: 5}, 
        {id: 2, name: "othmane", gender: "M", age: 6}, 
        {id: 3, name: "hajar", gender: "F", age: 7}]
}