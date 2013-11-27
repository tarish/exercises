var Palindrome = require('./palindrome');

describe("Palindrome", function() {
  var palindrome = new Palindrome();

  it("finds a palindrome", function() {
    expect(palindrome.isPalindrome("abba")).toBeTruthy();
    expect(palindrome.isPalindrome("roar")).toBeFalsy();
  });

  it("finds a palindrome even if the case is different", function() {
    expect(palindrome.isPalindrome("aBbA")).toBeTruthy();
    expect(palindrome.isPalindrome("rOaR")).toBeFalsy();
  });

  it("finds a palindrome between words", function() {
    expect(palindrome.isPalindrome("was it a car or a cat i saw")).toBeTruthy();
    expect(palindrome.isPalindrome("was she for saw")).toBeFalsy();
  });
});
