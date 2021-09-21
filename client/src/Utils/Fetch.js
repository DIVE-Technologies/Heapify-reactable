import Globals from "../config/Globals";

const Fetch = async (url, method, data) => {
  console.log(`${Globals.BASE_URL}${url}`);
  const response = await fetch(`${Globals.BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

export default Fetch;
