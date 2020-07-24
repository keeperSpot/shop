import React from 'react';
import { useRatio } from 'common/hooks/theme';
import { useTailwind } from 'hooks/style';

export const BaseImage = ({ height, width, originalHeight, originalWidth, fill, image: Image, className, style, ...props }) => {
  const { css } = useTailwind();
  const { h, f, w } = useRatio({ height, width, originalHeight, originalWidth, fill });

  return (
    <Image height={h} width={w} fill={f} style={css(className, style)} {...props} />
  );
};
