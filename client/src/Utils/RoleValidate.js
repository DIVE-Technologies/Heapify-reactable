import { getLocalData } from "../Utils/LocalStorage";
import { checkAuth } from "./Validation";

export const ReactRoleFlag = () => {
  if (checkAuth()) {
    return getLocalData("heapifyUser")["role"] === "reactable" ? true : false;
  }
};
