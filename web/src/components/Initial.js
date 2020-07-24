import React from 'react';

import { ToastContainer } from 'react-toastify';
import { useNotification } from 'hooks/notification';

export const Initial = () => {
  useNotification();

  return (
    <>
      <ToastContainer hideProgressBar />
    </>
  );
};
