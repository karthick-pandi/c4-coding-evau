// action types

// Action Creators

export const Auth = "Auth";

export const addAuth = (auth) => ({
  type: Auth,
  payload: auth,
});
