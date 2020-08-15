export const createState = (fields) => {
  let obj;
  fields.map((i) => {
    obj = { ...obj, [i.key]: i.defaultValue ? i.defaultValue : '' };
    return null;
  });
  return obj;
};
