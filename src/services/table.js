import {BASE_URL_CATEGORY, BASE_URL_TABLE} from "@/utils/constant";
import requestApi from "@/utils/requestApi";

const TableApi = {
  onCreate: async (params) => {
    return requestApi('/create', {
      method: 'POST',
      prefix: BASE_URL_TABLE,
      data: params,
    });
  },
  onGetList: async (params) => {
    return requestApi('/list', {
      method: 'POST',
      prefix: BASE_URL_TABLE,
      data: params,
    });
  },
  onDelete: async (params) => {
    return requestApi('/delete', {
      method: 'POST',
      prefix: BASE_URL_TABLE,
      data: params,
    });
  },
}

export default TableApi;
