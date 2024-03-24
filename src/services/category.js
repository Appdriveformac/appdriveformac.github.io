import {BASE_URL_CATEGORY} from "@/utils/constant";
import requestApi from "@/utils/requestApi";

const CategoryApi = {
  onCreate: async (params) => {
    return requestApi('/create', {
      method: 'POST',
      prefix: BASE_URL_CATEGORY,
      data: params,
    });
  },
  onGetList: async (params) => {
    return requestApi('/list', {
      method: 'POST',
      prefix: BASE_URL_CATEGORY,
      data: params,
    });
  },
  onDelete: async (params) => {
    return requestApi('/delete', {
      method: 'POST',
      prefix: BASE_URL_CATEGORY,
      data: params,
    });
  },
}

export default CategoryApi;
