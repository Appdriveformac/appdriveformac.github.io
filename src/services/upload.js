import requestApi from "@/utils/requestApi";
import {BASE_URL_UPLOAD} from "@/utils/constant";

const UploadApi = {
  uploadImage: async params => {
    const formData = UploadApi.convertJsonToFormData(params);
    return requestApi('/image', {
      method: 'POST',
      prefix: BASE_URL_UPLOAD,
      data: formData,
    });
  },

  convertJsonToFormData: (params) => {
    let formData = new FormData();
    formData.append("file", params);
    return formData;
  },
}

export default UploadApi;
