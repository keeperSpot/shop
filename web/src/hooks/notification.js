import { useEffect } from 'react';
import { deviceInfo, fullDeviceInfo } from 'helpers/device';
import { register } from 'common/helpers/device';


export const useNotification = () => {
  useEffect(() => {
    const device = deviceInfo();
    window.device = device;

    window.OneSignal.push(async () => {
      const userId = await window.OneSignal.getUserId();
      window.device = { ...device, id: userId };
      await register({ userId, fullDeviceInfo, pushToken: '' })
    });
  }, []);

  return null;
};
