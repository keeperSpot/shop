import React from 'react';

import { useDispatch } from 'react-redux';

import { styles } from 'styles/default';
import { changePrimaryColor } from 'shared/actions/theme';

import { View, Touchable } from 'framework/surface';
import { Title1 } from 'framework/text';
import { useTailwind } from 'hooks/style';

export const Theme = () => {
  const { getColor } = useTailwind();
  const dispatch = useDispatch();

  return (
    <View style={styles.sectionContainer}>
      <Title1>Theme</Title1>
      <View>
        {['gray', 'red', 'green', 'blue']
          .map(color => (
            <View className='flex-row flex-wrap' key={color.toString()}>
              {['500', '600', '700', '800', '900']
                .map(weight => (
                  <Touchable
                    key={weight}
                    onPress={() => dispatch(changePrimaryColor(getColor(`${color}-${weight}`)))}
                    className={`bg-${color}-${weight} h-10 w-10 m-2 rounded-lg`}
                      />
                ))}
            </View>
          ))}
      </View>
    </View>
  );
};
