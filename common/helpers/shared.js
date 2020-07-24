export const WindowOrGlobal = (property) => () => {
  if (window) return window[property];
  return global[property];
};

export const Notify = WindowOrGlobal('notify');
export const Storage = WindowOrGlobal('storage');
export const Persistor = WindowOrGlobal('persistor');
export const Device = WindowOrGlobal('device');
export const Btoa = WindowOrGlobal('btoa');
