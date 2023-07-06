# Type of test
- Units test: Focus is on testing the individual building blocks of an application such as a class
or a function or a component.
- Integration tests: Focus is on testing a combination of units and ensuring they work together.
- End to End tests: Focus is on testing the entire application flow and ensuring it works as designed
from start to finish.

# Test Driven Development (TDD): is a software development process where you write tests before
writing the software code.
    1. Create tests that verify the functionality of a specific feature
    2. Write software code that will run the tests successfully when re-executed
    3. Refactor the code for optimization while ensuring the tests continue to pass.

# Code coverage: A metric that can help you understand how much of your sofware code is tested
    - Statement coverage: how many of the statements in the software code have been executed
    - Branches coverage: How many of the branches of the control structures (if statements for instance)
    have been executed
    - Function coverage: How many of the functions defined have been called and finally
    - Line coverage: How many of lines of source code have been tested

# Assertions: 
    - When writing tests, we often need to check that values meeet certain conditions. Assertions
    decide if a test passes or fails
    -exp: expect(obj).toBeInTheDocument(). obj should be a variable in your code, toBeInTheDocument()
    is a MATCHER FUNCTION (see more in Jest docs)