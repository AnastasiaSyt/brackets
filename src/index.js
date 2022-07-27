module.exports = function check(str, bracketsConfig) {

  const bracketsOpen = ['(', '[', '{', '|', '1', '3', '5', '7', '8'];
  const pairsBrackets = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8'
  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const symbolN = str[i];

    if (stack.length !== 0) {
      const topElement = stack[stack.length - 1];
      if (pairsBrackets[symbolN] === topElement) {
        stack.pop();
        continue;
      }
    }

    if (bracketsOpen.includes(symbolN)) {
      stack.push(symbolN);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length -1];

      if (pairsBrackets[symbolN] === topElement) {
        stack.pop();
      } else {
        return false;
      }

    }
  }
  return stack.length === 0;
}