import React, { useEffect } from 'react';

import { useSpring } from 'react-spring/native';
import { useTailwind } from 'hooks/style';

export const BaseStyler = ({
  component: Comp,
  animateConfig = {},
  animate = '', animateStyle = {},
  className = '', style = {}, ...props
}) => {
  const { css } = useTailwind();
  const baseStyle = css(className, style);
  const [animatedStyle, animateTo, stopAnimation] =
    useSpring(() => ({ ...css(animate, animateStyle), ...animateConfig }));

  useEffect(() => {
    animateTo(css(animate, animateStyle));
    return () => {
      stopAnimation();
    };
  }, [animate, animateStyle]);

  return <Comp style={[baseStyle, animatedStyle]} {...props} />;
};
