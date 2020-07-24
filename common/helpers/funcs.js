import _ from 'lodash-es';

export const mapObjectAsync = async (obj, func, onError = () => null) => {
  const newObj = {};

  if (typeof obj === 'object' && obj !== null)
    for (const o in obj)
      if (Object.prototype.hasOwnProperty.call(obj, o)) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const [key, value] = await func(o, obj[o]);
          newObj[key] = value;
        } catch (e) {
          // pass
          newObj[o] = onError(o, obj[o], e);
        }
      }

  return newObj;
};

export const mapObject = (obj, func) => {
  const newObj = {};

  if (typeof obj === 'object' && obj !== null)
    for (const o in obj)
      if (Object.prototype.hasOwnProperty.call(obj, o)) {
        const [key, value] = func(o, obj[o]);
        newObj[key] = value;
      }

  return newObj;
};

export const camelCaseObject = (obj) => {
  if (_.isArray(obj))
    return obj.map(value => camelCaseObject(value));

  if (_.isObject(obj))
    return mapObject(obj, (key, value) => [_.camelCase(key), camelCaseObject(value)]);



  return obj;
};


export const snakeCaseObject = (obj) => {
  if (typeof obj === 'object' && obj !== null)
    return mapObject(obj, (key, value) => [_.snakeCase(key), snakeCaseObject(value)]);

  return obj;
};

export const mergeArrayObject = (arr) => {
  let newObj = {};
  arr.map(ar => {
    newObj = _.merge(newObj, ar);
    return null;
  });
  return newObj;
};


export const rgbaToHex = (rgba) => {
  const inParts = rgba.substring(rgba.indexOf('(')).split(',');
  const r = parseInt(_.trim(inParts[0].substring(1)), 10);
  const g = parseInt(_.trim(inParts[1]), 10);
  const b = parseInt(_.trim(inParts[2]), 10);
  const a = parseFloat(_.trim(inParts[3].substring(0, inParts[3].length - 1))).toFixed(2);
  const outParts = [
    r.toString(16),
    g.toString(16),
    b.toString(16),
    Math.round(a * 255).toString(16).substring(0, 2),
  ];

  // Pad single-digit output values
  outParts.forEach((part, i) => {
    if (part.length === 1) {
      outParts[i] = `0${part}`;
    }
  });

  return (`#${outParts.join('')}`);
}
