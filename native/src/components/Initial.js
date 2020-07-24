import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';

import Analytics from 'appcenter-analytics';
import FlashMessage from 'react-native-flash-message';

import { useGoogleAuthentication } from 'hooks/auth';
import { deviceInfo } from 'helpers/device';
import { useTailwind } from 'hooks/style';

export const Initial = () => {
  const { getCurrentUser } = useGoogleAuthentication();
  const { css } = useTailwind();

  const init = async () => {
    global.device = deviceInfo();
    global.css = css;
    await getCurrentUser();
    await Analytics.trackEvent('SessionStarted');
  };

  useEffect(() => {
    init().finally(() => {
      RNBootSplash.hide();
    });
  }, []);

  return <FlashMessage />;
};
