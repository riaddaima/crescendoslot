import { KidI } from "../../pages/Dependents/reducer/state";

export interface DependentResponse extends KidI {
}

export interface DependentRequest extends Omit<KidI, 'id' | 'age'> {
}