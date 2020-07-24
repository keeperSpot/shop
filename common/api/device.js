import api from './index';

export const registerDeviceAPI = (id, { pushToken = null, info = {} }) =>
  api.patch(`/device/register/${id}/`, { pushToken, info }, { secure: false });
