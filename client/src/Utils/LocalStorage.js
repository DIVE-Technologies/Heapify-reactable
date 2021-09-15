export const getLocalData = (param) => {
  try {
    return JSON.parse(localStorage.getItem(`${param}`));
  } catch (err) {
    console.log("Error in local storage, ", err);
  }
};

export const setLocalData = (param, data) => {
  try {
    localStorage.setItem(param, JSON.stringify(data));
    return;
  } catch (err) {
    console.log("Error in local storage, ", err);
  }
};

export const clearLocalData = () => {
  try {
    localStorage.clear();
    return;
  } catch (err) {
    console.log("Error in local storage, ", err);
  }
};
