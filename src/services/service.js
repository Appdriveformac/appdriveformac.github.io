import { BASE_URL_USER } from '@/utils/constant';
import requestApi from '@/utils/requestApi';
import { notification } from 'antd';
import { extend } from 'umi-request';

export async function accountLogin(params) {
  const request = extend({
    prefix: BASE_URL_USER,
    data: params,
    errorHandler: function (error) {
      const { response, data } = error;
      notification.error({
        message: data.data.message,
      });
      return response;
    },
  });
  return request.post('/login');
}

export async function queryCurrentUser() {
  return requestApi('/get-user-info', {
    method: 'GET',
    prefix: BASE_URL_USER,
  });
}
