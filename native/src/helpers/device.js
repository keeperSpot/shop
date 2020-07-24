import { Platform } from 'react-native';
import _reverse from 'lodash/reverse';
import _split from 'lodash/split';
import _join from 'lodash/join';

import DeviceInfo from 'react-native-device-info';

import { mapObjectAsync } from 'common/helpers/funcs';

const extraDeviceInfo = (obj) =>
  mapObjectAsync(obj, async (key, value) => [key, await DeviceInfo[value]()]);


export const domain = () => _join(
  _reverse(
    _split(DeviceInfo.getBundleId(), '.'),
  ),
  '.');

export const deviceInfo = () => ({
  app: domain(),
  appVersion: DeviceInfo.getReadableVersion(),

  os: Platform.OS,
  osVersion: DeviceInfo.getSystemVersion(),

  browser: '',
  browserVersion: '',
});

export const fullDeviceInfo = () =>
  extraDeviceInfo({
    applicationName: 'getApplicationName',
    os: 'getSystemName',
    osVersion: 'getSystemVersion',
    buildId: 'getBuildId',
    brand: 'getBrand',
    buildNumber: 'getBuildNumber',
    bundleId: 'getBundleId',
    carrier: 'getCarrier',
    deviceType: 'getDeviceType',
    iosDeviceToken: 'getDeviceToken',
    androidFirstInstallTime: 'getFirstInstallTime',
    deviceModel: 'getModel',
    readableVersion: 'getReadableVersion',
    uniqueId: 'getUniqueId',
    userAgent: 'getUserAgent',
    version: 'getVersion',
    notch: 'hasNotch',
    emulator: 'isEmulator',
    protected: 'isPinOrFingerprintSet',
    tablet: 'isTablet',
  });

export const isiOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = false;
