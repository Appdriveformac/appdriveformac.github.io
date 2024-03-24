/**
 * request
 * api : https://github.com/umijs/umi-request
 */
import { notification } from 'antd';
import { extend } from 'umi-request';

const codeMessage = {
  200: 'Thành công',
  201: 'Thêm mới hoặc cập nhập thành công',
  204: 'Xóa thành công',
  400: 'Bad Request',
  401: 'Hết token hoặc chưa đăng nhập',
  404: 'Not Found',
  406: 'Not Acceptable',
  410: 'Tài nguyên được yêu cầu sẽ bị xóa vĩnh viễn và sẽ không còn nữa.',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Voucher',
  503: 'Service Unavailable',
  504: 'Voucher Time-out',
};
/**
 * 异常处理程序
 */

const errorHandler = async (error) => {
  const {response, data} = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const {status /* , url */} = response;
    // Do lỗi server trả về 403 khi authen fail
    if (response.status === 401) {
      await localStorage.removeItem("token");
      history.push('/user/login');
    } else {
      notification.error({
        message: `Yêu cầu lỗi ${status}`,
        description: errorText,
      });
    }
  } else if (!response) {
    notification.error({
      description: 'Không thể kết nối với máy chủ',
      message: 'Mất mạng',
    });
  }
  return data;
};
/**
 * request
 */
const requestApi = extend({
  errorHandler,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default requestApi;
