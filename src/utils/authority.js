import { CURRENT } from '@/components/Authorized/renderAuthorize';
import { admin, sale_admin } from '@/utils/role'; // use localStorage to store the authority info, which might be sent from server in actual project.
import { reloadAuthorized } from './Authorized';

export function getAuthority(str) {
  const authorityString =
    typeof str === 'undefined' && localStorage ? localStorage.getItem('authority') : str; // authorityString could be admin, "admin", ["admin"]

  let authority;

  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }

  if (typeof authority === 'string') {
    return [authority];
  } // preview.pro.ant.design only do not use in your production.

  if (!authority) {
    return ['admin'];
  }

  return authority;
}
export function setAuthority(authority, token) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  console.log(authority, token);
  localStorage.setItem('authority', JSON.stringify(proAuthority)); // auto reload
  localStorage.setItem('token', token); // auto reload
  reloadAuthorized();
}
export function isAdmin() {
  return CURRENT && CURRENT.some((item) => item === admin);
}

export function isSaleAdmin() {
  return CURRENT && CURRENT.some((item) => item === sale_admin);
}
