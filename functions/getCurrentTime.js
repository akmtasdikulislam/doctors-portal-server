export const getCurrentTime = () => {
  return new Date().toLocaleTimeString("en-US", {
    hour12: false,
  });
};
