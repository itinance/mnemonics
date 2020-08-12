const DEFAULT_COUNT = 12;

function parseCount(
  countStr,
  silent = false,
  defaultCount = DEFAULT_COUNT,
) {
  let count;
  count = parseInt(countStr);
  if (isNaN(count)) {
    if (!silent) {
      console.error(
        'failed to parse count input:', countStr);
    }
  } else if (count < 12 ||
      count > 24 ||
      count % 3 !== 0) {
    count = undefined;
    if (!silent) {
      console.error(
        'invalid count input, may only be 12, 15, 18, 21, or 24:', countStr);
    }
  }
  return count || defaultCount;
}

function convertCountToStrength(count) {
  return count * 32 / 3;
}

export {
  DEFAULT_COUNT,
  parseCount,
  convertCountToStrength,
};

