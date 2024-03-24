import { notification } from 'antd';
import { extend } from 'umi-request';

const requestPublicApi = extend({
  errorHandler: (error) => {
    const { response, data } = error;
    notification.error({
      message: `Yêu cầu lỗi ${data?.status}`,
      description: data?.error,
    });
    return response;
  },
});

export default requestPublicApi;
