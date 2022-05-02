import { Auth } from "./actions";

const init = {
  auth: JSON.parse(localStorage.getItem("auth") || null),
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case Auth:
      localStorage.setItem("auth", JSON.stringify(payload) || null);
    case Auth:
      return { ...store, auth: payload };
    default:
      return store;
  }
};
