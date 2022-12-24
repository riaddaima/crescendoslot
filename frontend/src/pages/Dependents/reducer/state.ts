export interface KidI {
    id: number;
    fname: string;
    lname: string;
    gender: string;
    dob: Date;
    age: number;
}

interface KidsState {
  kids: Array<KidI>;
}

export const initialState: KidsState = {
  kids: []
};
