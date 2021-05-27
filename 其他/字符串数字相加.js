/**
 * 两个大数字符串相加，得值
 */

function addBigInt(str1, str2) {
  const newStr1 = reverseString(str1);
  const newStr2 = reverseString(str2);

  const len = newStr1.length  > newStr2.length ? newStr1.length : newStr2.length;
  
  const result = [];
  for(let i=0; i<len; i++) {

    const val1 = Number(newStr1[i] || 0);
    const var2 = Number(newStr2[i] || 0);
    const currentResult = result[i] || 0;

    const val = val1 + var2 + currentResult;

    if(val < 10) {
      result[i] = val;
      continue;
    }
    result[i+1] = 1;
    result[i] = val - 10;
  }

  return result.reverse().join('');
}

function reverseString (str) {
  return str.split('').reverse().join('')
}

module.exports = addBigInt;

// console.log(addBigInt('3455699999999999999999', '10000000000000000000000000'))