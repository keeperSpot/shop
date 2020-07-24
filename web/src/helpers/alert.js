import { toast } from 'react-toastify';

export const notify = (title, options = {}) => {
  const { type } = options;
  let notifier = toast;
  if (type) notifier = toast[type];

  notifier(title);
};
