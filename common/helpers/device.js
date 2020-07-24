import { registerDeviceAPI } from 'common/api/device';
import { Storage } from 'common/helpers/shared';
import _isEqual from 'lodash/isEqual';

export const register = async ({ userId, pushToken, fullDeviceInfo }) => {
  if (userId === null) return;

  const info = await fullDeviceInfo();
  const mainRegister = async () => {
    const { error } = await registerDeviceAPI(userId, { pushToken, info });
    if (!error) {
      await Storage().save({ key: 'device', id: 'userId', data: userId });
      await Storage().save({ key: 'device', id: 'info', data: info });
      await Storage().save({ key: 'device', id: 'pushToken', data: pushToken });
    }
  };

  try {
    const matchUserId = (await Storage().load({ key: 'device', id: 'userId' })) === userId;
    const matchInfo = _isEqual((await Storage().load({ key: 'device', id: 'info' })), info);
    const matchPushToken = (await Storage().load({ key: 'device', id: 'pushToken' })) === pushToken;
    if (matchUserId && matchInfo && matchPushToken) return;
  } catch (err) {
    // pass
  }

  await mainRegister();
};
