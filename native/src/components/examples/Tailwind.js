import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { styles } from 'styles/default';
import { useUser } from 'common/hooks/auth';
import { useTailwind } from 'hooks/style';

export const Tailwind = () => {
  const { css } = useTailwind();
  const { user, isAuthenticated } = useUser();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>With tailwindcss</Text>
      <View style={css('max-w-sm bg-white rounded-lg overflow-hidden')}>
        <View style={css('px-6 py-4')}>
          <View>
            <Image
              style={[css('rounded-full self-center'), { height: 160, width: 160 }]}
              source={{
                uri: isAuthenticated
                  ? user.image
                  : 'https://randomuser.me/api/portraits/women/17.jpg',
              }}
              alt="Woman's Face"
            />
          </View>
          <View style={css('mt-4 ')}>
            <Text style={css('text-xl text-center')}>
              {isAuthenticated ? `${user.firstName} ${user.lastName}` : 'Erin Lindford'}
            </Text>
            <Text style={css('text-sm text-gray-600 text-center')}>
              Customer Support Specialist
            </Text>
            <View style={css('mt-4')}>
              <TouchableOpacity style={css('border border-purple-500 rounded-full px-4 py-1')}>
                <Text style={css('text-purple-500 text-center text-base font-semibold')}>
                  Message 
                  {' '}
                  {user.email}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
