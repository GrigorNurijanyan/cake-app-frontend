import {
  fetchFromUrlGETAsync,
  fetchFromUrlDELETEAsync,
  fetchFromUrlPOSTAsync,
  fetchFromUrlPATCHAsync,
} from "../utils/urlHelper";

const URL_CATEGORY = "/category/list";
const URL_CATEGORY_DELETE = "/category/delete";
const URL_CATEGORY_CREATE = "/category/create";
const URL_CATEGORY_UPDATE = "/category/update";

const main = {
  getCategoryListBE: async (obj) => {
    const result = fetchFromUrlGETAsync(URL_CATEGORY, obj);
    return result;
  },
  deleteCategoryItemBE: async (id) => {
    const result = fetchFromUrlDELETEAsync(URL_CATEGORY_DELETE + `/${id}`);
    return result;
  },
  createCategoryBE: async (obj) => {
    const result = fetchFromUrlPOSTAsync(URL_CATEGORY_CREATE, obj);
    return result;
  },
  editCategoryBE: async (obj, id) => {
    const result = fetchFromUrlPATCHAsync(URL_CATEGORY_UPDATE + `/${id}`, obj);
    return result;
  },
};

const loc = {
  getCategoryList: async (obj) => {
    const result = await main.getCategoryListBE(obj);
    return result;
  },
  deleteCategoryItem: async (id) => {
    const result = await main.deleteCategoryItemBE(id);
    return result;
  },
  createCategory: async (obj) => {
    const result = await main.createCategoryBE(obj);
    return result;
  },
  editCategory: async (obj, id) => {
    const result = await main.editCategoryBE(obj, id);
    return result;
  },
};

export default { ...main, ...loc };
