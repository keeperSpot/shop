import React, { useContext } from 'react';
import { Tailwind } from 'react-native-tailwindcss/tailwind';
import _ from 'lodash-es';

import { mergeArrayObject } from 'common/helpers/funcs';
import { useThemeColors } from 'common/hooks/theme';

export const TailwindContext = React.createContext({});
export const TailwindProvider = TailwindContext.Provider;
export const TailwindConsumer = TailwindContext.Consumer;


export const useTailwindSetup = () => {
  const { primary } = useThemeColors();

  const tailwind = new Tailwind({
    theme: {
      fontFamily: {
        sans: 'Arial',
        serif: 'Georgia',
        mono: 'Courier New',
        body: 'Nunito-Regular',
        bodyBold: 'Nunito-Bold',
        display: 'Montserrat-Bold',
        displayBold: 'Montserrat-ExtraBold',
        displayExtraBold: 'Montserrat-Black',
      },
      extend: {
        colors: {
          primary,
        },
      },
    },
  });

  const { style: t, converter: c, colors } = tailwind;
  const css = (...args) => {
    return mergeArrayObject(
      _.map(args, (arg) => {
        if (_.isString(arg)) return c(arg);
        if (_.isArray(arg)) return css(...arg);
        if (_.isObject(arg)) return arg;
        return {};
      }));
  };
  const getColor = (colorName) => colors[_.camelCase(colorName)];

  return { t, c, css, getColor };
};

export const useTailwind = () => {
  const { t, c, css, getColor } = useContext(TailwindContext);
  return { t, c, css, getColor };
};
