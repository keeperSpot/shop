import React from 'react';
import { Text as RNText } from 'react-native';

import { useThemeColors } from 'common/hooks/theme';
import { animated } from 'react-spring/native';

import { BaseStyler } from 'framework/BaseStyler';
import { useTailwind } from 'hooks/style';

const AnimatedText = animated(RNText);

export const Text =
  ({ primary, textClass = 'font-body text-base', className = '', style, ...props }) => {
    const { primary: primaryColor } = useThemeColors();
    const { css } = useTailwind();

    return (
      <BaseStyler
        component={AnimatedText}
        style={css({ ...(primary ? { color: primaryColor } : {}) }, `${textClass}`, className, style)}
        {...props} />
    );
  };
