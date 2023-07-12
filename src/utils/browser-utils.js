import { device } from 'utils/css-utils';

export function isOldIE() {
  if (typeof navigator === 'undefined') {
    return false;
  }

  return (
    navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1
  );
}

export function isMobile() {
  return !window.matchMedia(device.tablet);
}

export default {
  isOldIE,
  isMobile,
};
