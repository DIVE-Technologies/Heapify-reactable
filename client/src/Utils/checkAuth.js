import { getLocalData } from "./LocalStorage";

export const checkAuth = () => {
  const name = getLocalData("heapifyUser");

  if (name !== null) {
    return true;
  } else {
    return false;
  }
};
