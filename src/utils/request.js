/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
const codeMessage = {
  200: 'Thành công',
  201: 'Thêm mới hoặc cập nhập thành công',
  // 202: '一个请求已经进入后台排队（异步任务）。',
  204: 'Xóa thành công',
  400: 'Bad Request',
  401: 'Hết token hoặc chưa đăng nhập',
  // 403: 'Forbidden',
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

const errorHandler = (error) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `Yêu cầu lỗi ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'Không thể kết nối với máy chủ',
      message: 'Mất mạng',
    });
  }

  return response;
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});
export default request;
