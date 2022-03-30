
const APP_DATA =window.appData.Data.Data;


export const productTypes = {
  special: 0,
  featured: 1,
};

export const getAppData = () => {
  return APP_DATA;
};

export const getCategories = (parentId) => {
  if (parentId) {
    return APP_DATA[1]
      .filter((a) => a[3] === parentId)
      .map((a) => ({ id: a[0], name: a[1], rank: a[2], parentId: a[3] }));
  }

  return APP_DATA[0].map((a) => ({ id: a[0], name: a[1], rank: a[2] }));
};

export const getMedicineTypes = () => {
  return APP_DATA[2].map((a) => ({ id: a[0], name: a[1], rank: a[2] }));
};

export const getProducts = (productType = productTypes.special) => {
  const productsFromAppData = getProductsByType(APP_DATA, productType);

  return productsFromAppData.map((p) => ({
    id: p[0],
    name: p[1],
    genericName: p[2],
    strength: p[3],
    unitSalePrice: p[4],
    discount: p[5],
    imagePath: p[6],
    imageType: p[7],
    category: p[8],
    suplier: p[9],
    totalStock: p[10],
  }));
};

export const getBanner = () => ({
  id: APP_DATA[5][0][0],
  name: APP_DATA[5][0][1],
  image: APP_DATA[5][0][2],
  createdAt: APP_DATA[5][0][3],
});

export const getNotices = () => {
  return APP_DATA[6].map((n) => ({
    id: n[0],
    name: n[1],
    content: n[2],
    status: n[3],
  }));
};

const getProductsByType = (data, productType) => {
  switch (productType) {
    case productTypes.special:
      return data[3];

    case productTypes.featured:
      return data[4];

    default:
      throw new Error("product types not specified");
  }
};
