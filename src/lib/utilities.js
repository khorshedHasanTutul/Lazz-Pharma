export const paramsUrlGenerator = (params) => {
  const url = "?";
  const paramsStrings = [];

  for (const [key, value] of Object.entries(params)) {
    paramsStrings.push(`${key}=${value}`);
  }

  return url + paramsStrings.join("&");
};

export const sumAProperty = (items = [], path) => {
  return items.reduce((total, product) => +product[path] + total, 0);
};

export const humanizeShortDateTime = (enData) => {
  const regex = /\d+/g;
  const timestamp = (enData.match(regex) || []).join("");

  if (typeof +timestamp === "number") {
    const date = new Date(+timestamp);

    return `${date.toLocaleString("en-GB", {
      dateStyle: "short",
    })} ${date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  }

  return "Error parsing date";
};
