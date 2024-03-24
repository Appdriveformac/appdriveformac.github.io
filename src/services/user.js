import request from '@/utils/request';
import { BASE_URL_USER } from "@/utils/constant";
import requestApi from "@/utils/requestApi";

export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}
export async function queryCurrentUser() {
  return requestApi('/get-user-info', {
    method: 'GET',
    prefix: BASE_URL_USER,
  });
}

export async function queryUserList() {
  return requestApi('/list-user', {
    method: 'POST',
    prefix: BASE_URL_USER
  });
}

export async function querySalesAdminList() {
  return requestApi('/list-sales-admin', {
    method: 'POST',
    prefix: BASE_URL_USER
  });
}
