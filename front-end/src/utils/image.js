// Tự động lấy host hiện tại (IP hoặc domain)
const backendHost = window.location.hostname;

const backendPort = 5000;

export const urlBackend =
  backendHost === "localhost"
    ? `http://localhost:${backendPort}`
    : `http://${backendHost}`;

export const getImageUrl = (imgPath) => {
  if (!imgPath) return "";
  if (!imgPath.startsWith("/")) imgPath = "/" + imgPath;
  return `${urlBackend}${imgPath}`;
};
