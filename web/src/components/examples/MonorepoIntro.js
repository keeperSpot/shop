import React from 'react';

import { GoogleAuthenticate } from './GoogleAuthenticate';
import { Tailwind } from './Tailwind';
import { PushNotification } from './PushNotification';
import { ResetState } from './ResetState';
import { HelloButton } from './HelloButton';

export const MonorepoIntro = () => (
  <main style={{ padding: 20 }}>
    <h1>Monorepo Introduction</h1>

    <div>
      <h3>Guides</h3>
      Different guides are available in README.
      <br />
      <a href='https://github.com/Faisal-Manzer/react-and-react-native-monorepo'>
        https://github.com/Faisal-Manzer/react-and-react-native-monorepo
      </a>
    </div>

    <HelloButton />
    <ResetState />
    <GoogleAuthenticate />
    <PushNotification />
    <Tailwind />
  </main>
);
