## Tests

This library comes along with tests to prove the integrity of the results before we release on NPM. 

### Jasmine handles the tests

This project uses the Jasmine testing library because of its zero config approach to writing unit tests.


#### Where are the test files

The test files are in the `spec` directory and are distinguished from other `.js` files is that they have a `.spec.js` ending. Every module in the `src` directory has a test file except for the helper module which is functional but not tested in Jasmine.


#### Structure of the spec file

Inside each spec file, there's a `data` variable which contains an object of the functions to test. The object is structured as so:


```js

```

To extend the test with a new function, add a new node with the same schema:

```js


```


#### Running the tests

Run the tests using the following command:

```bash

# This will call npx jasmine under the hood
npm test

```

#### Customizing the test runner behaviour

The configuration file is at `spec/support/jasmine.json`. Use it to fine tune how Jasmine behaves when running tests such as how hard your tests fail.


### References

See the jasmine docs to see more about the library.