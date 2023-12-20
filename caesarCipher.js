// Implementation for caesarCipher function
function caesarCipher(str, shift) {
    return str
      .split('')
      .map((char) => {
        if (/[A-Za-z]/.test(char)) {
          const isUpperCase = char === char.toUpperCase();
          const source = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
          const index = source.indexOf(char);
          const shiftedIndex = (index + shift) % source.length;
          const shiftedChar = source.charAt(shiftedIndex);
          return isUpperCase ? shiftedChar : shiftedChar.toLowerCase();
        }
        return char;
      })
      .join('');
  }

module.exports = caesarCipher
