export const hexToRgb = (bgColor) => {
  const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return { r, g, b }
};

const runNetwork = function anonymous(input) {
  const net = {
    'layers': [{ 'r': {}, 'g': {}, 'b': {} }, {
      '0': {
        'bias': 6.146894445968656,
        'weights': { 'r': -2.7576379207537967, 'g': -7.44351037747756, 'b': -1.9788795845214806 },
      },
      '1': {
        'bias': 7.4556677293471525,
        'weights': { 'r': 2.7784179264119326, 'g': -9.770979633917472, 'b': -1.4276311677433653 },
      },
      '2': {
        'bias': 10.72647936321485,
        'weights': { 'r': -9.027658766500494, 'g': -5.275698384484019, 'b': -4.085645871889649 },
      },
    }, {
      'black': {
        'bias': 14.520177783196964,
        'weights': { '0': -7.559375187232366, '1': -8.863484376393671, '2': -8.817236539366856 },
      },
    }], 'outputLookup': true, 'inputLookup': true,
  };

  const output = {};
  for (let i = 1; i < net.layers.length; i++) {
    const layer = net.layers[i];

    // eslint-disable-next-line guard-for-in
    for (const id in layer) {
      const node = layer[id];
      let sum = node.bias;

      // eslint-disable-next-line guard-for-in
      for (const iid in node.weights) {
        sum += node.weights[iid] * input[iid];
      }
      output[id] = (1 / (1 + Math.exp(-sum)));
    }
    input = output;
  }

  return output;
};


export const textColorOnBg = (bgColor) => {
  const color = hexToRgb(bgColor);
  const output = runNetwork(color);
  if (output.black > .5) {
    return '#000000';
  }
  return '#ffffff';
};
