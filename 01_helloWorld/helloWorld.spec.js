//require imports code from js file
const helloWorld = require('./helloWorld');

//describe runs the code
describe('Hello World', function() {
  //test describes what should be happening
  test('says "Hello, World!"', function() {
    //expect is the expected result of the test (helloWorld() should output 'Hello, World!')
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
