export const config = {
  LOGIN_ENDPOINT:
    process.env.REACT_APP_LOGIN_ENDPOINT || "http://localhost:3001/login",
  GRAPHQL_ENDPOINT:
    process.env.REACT_APP_GRAPHQL_ENDPOINT || "http://localhost:3001/graphql",
};
