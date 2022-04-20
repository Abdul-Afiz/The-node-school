module.exports = function repeat(operation, num) {
  if (num < 1) {
    return;
  }

  return repeat(operation, num - 1);
};
