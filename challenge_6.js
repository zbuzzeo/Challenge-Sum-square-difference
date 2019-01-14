/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers){
  this.naturalNumbers = naturalNumbers;
}

// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()

SumOfASquare.prototype.sumOfSquares = function () {
  const naturals = [];
  const summedSquares = 0;

  for (let i = 1; i <= this.naturalNumbers; i++) {
    naturals.push(i);
  }

  summedSquares = naturals.reduce(function(sum, number) {
    sum += Math.pow(number, 2);
    return sum;
  }, 0);

  return summedSquares;
}
