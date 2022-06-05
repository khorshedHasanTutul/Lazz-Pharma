export const paramsUrlGenerator = (params) => {
  const url = "?";
  const paramsStrings = [];

  for (const [key, value] of Object.entries(params)) {
    paramsStrings.push(`${key}=${value}`);
  }

  return url + paramsStrings.join("&");
};

export const sumAProperty = (items = [], path) => {
    return items.reduce((total, product) => (+product[path] + total), 0);
  }