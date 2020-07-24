import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from 'styles/default';

import { useGoogleAuthentication } from 'hooks/auth';
import { useUser } from 'common/hooks/auth';

export const GoogleAuthenticate = () => {
  const { user, isAuthenticated } = useUser();
  const { signIn, signOut, inProgress } = useGoogleAuthentication();

  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Signin with google</Text>
        {inProgress ? <Text>Loading...</Text> : null}

        {isAuthenticated ? (
          <TouchableOpacity onPress={signOut} type='primary'>
            <Text style={styles.sectionDescription}>
              Hello
              {user.firstName}
              {' '}
              [sign-out]
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={signIn} type='primary'>
            <Text style={styles.sectionDescription}>Click to sign-in</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
