// 4. Test for the caesarCipher function

const caesarCipher = require('./caesarCipher')

test("caesarCipher should shift characters in a string", () => {
  expect(caesarCipher("hello world!", 3)).toBe("khoor zruog!");
  expect(caesarCipher("abcxyz", 1)).toBe("bcdyza");
  expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25)).toBe(
    "ZABCDEFGHIJKLMNOPQRSTUVWXY"
  );
  expect(caesarCipher("", 5)).toBe("");
});
