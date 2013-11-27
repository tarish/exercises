var FizzBuzz = require('./fizzbuzz');

describe("FizzBuzz", function() {
  var fizzbuzz = new FizzBuzz();

  it("prints 1-100 in numbers or words, starting with 1", function() {
    var result = fizzbuzz.printNumbers();
    expect(result).toMatch(/^1/);
    expect(result.split(" ").length).toEqual(100);
  });

  it("prints fizz instead of a number for multiples of 3", function() {
    var result = fizzbuzz.printNumbers();
    expect(result).toContain('1 2 fizz 4');
  });

  it("prints buzz instead of a number for multiples of 5", function() {
    var result = fizzbuzz.printNumbers();
    expect(result).toContain('1 2 fizz 4 buzz');
  });

  it("prints fizzbuzz for numbers that are multiples of both 3 and 5", function() {
  	var result = fizzbuzz.printNumbers();
  	expect(result).toContain('buzz 11 fizz 13 14 fizzbuzz');
  });
});
