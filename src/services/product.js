import {BASE_URL_CATEGORY, BASE_URL_PRODUCT, BASE_URL_TABLE} from "@/utils/constant";
import requestApi from "@/utils/requestApi";

const ProductApi = {
  onCreate: async (params) => {
    return requestApi('/create', {
      method: 'POST',
      prefix: BASE_URL_PRODUCT,
      data: params,
    });
  },
  onGetList: async (params) => {
    return requestApi('/list', {
      method: 'POST',
      prefix: BASE_URL_PRODUCT,
      data: params,
    });
  },
  onDelete: async (params) => {
    return requestApi('/delete', {
      method: 'POST',
      prefix: BASE_URL_PRODUCT,
      data: params,
    });
  },
}

export default ProductApi;
