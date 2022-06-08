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

export const searchItemsConvertObject = (item) => {
  return {
    Nm: item.Name,
    id: item.Id,
    MRP: item.UnitSalePrice,
    Ds: item.Discount,
    St: item.Strength,
    GN: item.GenericName,
    image: item.ImagePath,
    category: item.Category,
    supplier: item.Suplier,
    details: item.Details,
  };
};

export const tranformQuery = (text, func) => {
  const duplicateText = text;
  var query = text.split(" ");
  // text.split(' ').each(function () {
  //   text = (this + '').trim();
  //   if (text && text.length > 0) {
  //     query.push(text);
  //   }
  // });

  // if (duplicateText[duplicateText.length - 1] === ' ') {
  //   query[query.length - 1] += ' ';
  // }

  return query;
};

export const gotoTop = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
};
