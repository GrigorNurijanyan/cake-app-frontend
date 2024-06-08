import {
  fetchFromUrlGETAsync,
  fetchFromUrlDELETEAsync,
  fetchFromUrlPOSTAsync,
  fetchFromUrlPATCHAsync,
} from "../utils/urlHelper";

const URL_PRODUCT = "/product/list";
const URL_PRODUCT_DELETE = "/product/delete";
const URL_PRODUCT_CREATE = "/product/create";
const URL_PRODUCT_UPDATE = "/product/update";

const main = {
  getProductListBE: async (obj) => {
    const result = fetchFromUrlGETAsync(URL_PRODUCT, obj);
    return result;
  },
  deleteProductItemBE: async (id) => {
    const result = fetchFromUrlDELETEAsync(URL_PRODUCT_DELETE + `/${id}`);
    return result;
  },
  createProductBE: async (obj) => {
    const result = fetchFromUrlPOSTAsync(URL_PRODUCT_CREATE, obj);
    return result;
  },
  editProductBE: async (obj, id) => {
    const result = fetchFromUrlPATCHAsync(URL_PRODUCT_UPDATE + `/${id}`, obj);
    return result;
  },
};

const loc = {
  getProductList: async (obj) => {
    const result = await main.getProductListBE(obj);
    return result;
  },
  deleteProductItem: async (id) => {
    const result = await main.deleteProductItemBE(id);
    return result;
  },
  createProduct: async (obj) => {
    const result = await main.createProductBE(obj);
    return result;
  },
  editProduct: async (obj, id) => {
    const result = await main.editProductBE(obj, id);
    return result;
  },
};

export default { ...main, ...loc };
