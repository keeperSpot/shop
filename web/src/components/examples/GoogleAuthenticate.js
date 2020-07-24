import React from 'react';
import { useGoogleAuthentication } from 'hooks/auth';
import { useUser } from 'common/hooks/auth';

export const GoogleAuthenticate = () => {
  const { user, isAuthenticated } = useUser();
  const { signIn, signOut, inProgress } = useGoogleAuthentication();

  return (
    <div>
      <h3>Google Sign-in</h3>

      {
        inProgress? (
          <>
            Loading...
            <br />
          </>
        ) : null
      }

      {isAuthenticated ? (
        <div>
          Hello
          {' '}
          {user.firstName}
          <br />
          <button type='button' onClick={signOut}>
            Sign-out
          </button>
        </div>
      ) : (
        <button type='button' onClick={signIn}>
          Click to sign-in
        </button>
      )}
    </div>
  );
};
