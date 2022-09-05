// import { useState } from "react";

// export default function useToken() {
export const getToken = () => {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

// const [token, setToken] = useState(getToken());

export const saveToken = (userToken) => {
  localStorage.setItem("token", JSON.stringify(userToken));
  // setToken(userToken.token);
};

// return {
//   saveToken,
//   token,
// };
// }
