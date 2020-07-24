import React from 'react';
import { useDispatch } from 'react-redux';

import { resetState } from 'common/actions/demo';

export const ResetState = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux persist</h3>
      Make the state saved to local disk. Users can now start the application where they left. And
      the state is encrypted too.
      <br />
      <button type='button' onClick={() => dispatch(resetState())}>
        Click reset the state.
      </button>
    </div>
  );
};
