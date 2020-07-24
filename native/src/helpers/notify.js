import { showMessage } from 'react-native-flash-message';

export const notify = (title, options = {}) => {
  const { type, body } = options;
  showMessage({
    message: title,
    description: body,
    type,
  });
};
