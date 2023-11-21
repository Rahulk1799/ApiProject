export const customMiddleware = (store) => (next) => (action) => {
  // Your custom middleware logic goes here
  next(action); // Pass the action to the next middleware
};
