
module.exports = function repeater(str, options) {
  const arr = [String(str)];
  const addArr = [String(options.addition)];
  for (let i = 0; i < Number(options.repeatTimes) - 1; i++) {arr.push(String(str))}
  if (String(options.addition) === "null" || options.addition || String(options.addition) === "false" ) {
    for (let i = 0; i < Number(options.additionRepeatTimes) - 1; i++) {
      addArr.push(String(options.addition))
    }
    return arr.map((item) => item + addArr.join(options.additionSeparator || '|')).join(options.separator || '+');
  }
  return arr.join(options.separator || '+')
};