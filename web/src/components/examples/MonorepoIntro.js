import React from 'react';

import { GoogleAuthenticate } from './GoogleAuthenticate';
import { Tailwind } from './Tailwind';
import { PushNotification } from './PushNotification';
import { ResetState } from './ResetState';
import { HelloButton } from './HelloButton';
import { SearchBar } from '../elms/searchBar';
import { DropDown } from '../elms/dropdownWithSearch';

const data=[{ "id": "67bbba61-1845-47df-bbcb-0a380fc3cc5d", "name": "google chrome", },{ "id": "67bbba61-1845-47df-bbcb-0a380fc3cc5d", "name": "firefox", },{ "id": "67bbba61-1845-47df-bbcb-0a380fc3cc5d", "name": "safari", },];
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

    <DropDown 
      payload={data}
      qp='name' 
      callBack={x=>{console.log(x)}}
    />
    <SearchBar 
      payload={data} 
      qp='name'
      callBack={x=>{console.log(x)}}
    />
    <HelloButton />
    <ResetState />
    <GoogleAuthenticate />
    <PushNotification />
    <Tailwind />
  </main>
);
