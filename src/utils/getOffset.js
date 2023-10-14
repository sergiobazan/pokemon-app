export const getOffest = (url) => {
  let first = url?.indexOf("=");
  let last = url?.indexOf("&");
  return parseInt(url?.slice(first + 1, last));
};
