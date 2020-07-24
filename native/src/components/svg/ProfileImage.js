import React from 'react';
import ProfilePicSvg from 'assets/svgs/profilePic.svg';
import { BaseImage } from './index';


export const ProfileImage = (props) => (
  <BaseImage
    originalWidth={888}
    originalHeight={741.04834}
    image={ProfilePicSvg}
    {...props}
  />
);
