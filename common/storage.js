import Storage from 'react-native-storage';

export const getStorage = (storage) => {
  return new Storage({
    size: 1000,
    storageBackend: storage,
    defaultExpires: null,
    enableCache: true,
    sync: {},
  });
};
