const urlBackend = "http://localhost:5000";

export const getImageUrl = (imgPath) => {
  if (!imgPath) return "";
  return `${urlBackend}${imgPath}`;
};
