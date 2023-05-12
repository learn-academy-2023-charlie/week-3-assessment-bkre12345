// ASSESSMENT 3: Coding Practical Questions with Jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Pseudo Code:
// input: a function that takes in a number
// if the number is greater than 2 then the
      // output: an array of Fibonacci sequence numbers with the same length
// if the number is less than 2 then the
      // output: error?
// call the function and ensure the output is correct

const fibonacci = (n) => {
  if (n <= 0) {
    return ("Error: n must be greater than 0")
  }
  if (n > 2) {
    return (fibonacci(n - 1).concat(fibonacci(n - 2)))
}
}

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

describe('fibonacci function', () => {
  it('should throw an error for invalid input', () => {
    expect(() => fibonacci(-1)).toThrow('Input must be a positive integer greater than 2.')
    expect(() => fibonacci(0)).toThrow('Input must be a positive integer greater than 2.')
    expect(() => fibonacci(1)).toThrow('Input must be a positive integer greater than 2.')
  })

  it('should return the Fibonacci sequence of the given length', () => {
    expect(fibonacci(fibLength1)).toEqual([0, 1, 1, 2, 3, 5])
    expect(fibonacci(fibLength2)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.

// Pseudo Code:
// input: a function that takes in an object
  // check if there are any key-value pairs
  // extract the array of the object's values
  // use the sort method to show the array in order from least to greatest
// if the object is not empty then the
      // output: an array of the values sorted from least to greatest that includes ALL values even if there are repeats
// if the object is empty then the
      // output: error?
// call the function and ensure it passes

const leastToGreatest = (object) => {
  if (Object.keys(object).length > 0) {
    return Object.values(object).sort((a, b) => a - b)
    } else {
      return ("Error: The object has no numbers")
}
}

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// // Expected output: [10, 15, 20, 45, 60, 65, 100]


// // b) Create the function that makes the test pass.

describe ('leastToGreatest function'), () => {
  it ('should return the least to greatest', () => {
    expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })  
}

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Pseudo Code:
// input: a function that takes an array of numbers
  // use the reduce method to compute the sum up until the current indexed value and is repeated through iteration until all values are done
  // each sum should still be shown
      // output: an array of the accumulating sum
// if the array is empty
      // output: an empty array
// call the function to ensure it is working

const sumOfAll = (array) => {
  if (array.length === 0) {
    return []
    }
    return array.reduce((sum, num) => {
      return [...sum, num + sum[sum.length - 1]]
      }, [])
      }


// // a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// // Expected output: []

// // b) Create the function that makes the test pass.

describe('sumOfAll function', () => {
  it('should return an empty array if input array is empty', () => {
    expect(sumOfAll(accountTransactions3)).toEqual([]);
  });

  it('should return an array containing the running sum of the input array', () => {
    expect(sumOfAll(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumOfAll(accountTransactions2)).toEqual([250, 161, 261, 165])
  })
})
