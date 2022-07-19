import { ADD_PERSON } from "../constant";
export const createAddPersonFunction = (person) => ({
  type: ADD_PERSON,
  person,
});
