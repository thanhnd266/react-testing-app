# REACT TESTING LIBRARY
# What to test?
 - Test component renders
 - Test component renders with props
 - Test component renders in different states
 - Test component reacts to events

# What not to test?
 - Implementation details
 - Third party code
 - Code that is not important from a user point of view

# I. RTL queries: are the methods that Testing Library provides to find elements on the page
 - Every test we write generally involves the following basic steps:
    1. Render the component
    2. Find an element rendered by the component
    3. Assert against the element found in step 2 which will pass or fail the test
 - To find a single element: getBy.., queryBy.., findBy..,...
 - To find multiple elements: getAllBy.., queryAllBy.., findAllBy..,...
 - The suffix in `..` can be one of Role, LabelText, PlaceholderText, Text, DisplayValue, AltText,
    Title and finally TestId.

## getBy: queries to assert if elements are present in the DOM

## getBy...queries (single element)
 - getBy.. class of queries return the matching node for a query, and throw a descriptive error if
    no elements match or if more than one match is found.
 - Suffix (with priority): 1.Role, 2.LabelText, 3.PlaceholderText, 4.Text, 5.DisplayValue, 6.AltText, 
    7.Title and finally 8.TestId.

## getAllBy...queries (multiple elements)
 - getAllBy...queries find multiple elements in the DOM. It returns an array of all matching nodes
    for a query, and throws an error if no elements match.
 - Suffix (with priority): 1.getAllByRole, 2.GetAllByLabelText, 3.GetAllByPlaceholderText, 
    4.getAllByText, 5.getAllByDisplayValue, 6.getAllByAltText, 7.getAllByTitle, 8.getAllByTestId.

## TextMatch: 
 - represents a type which can be either a String/Regex/Function
 - `TextMatch as String` with input: <div>Hello World</div>
   + screen.getByText("Hello World"); (full string match)
   + screen.getByText("llo World", { exact: false }); (substring match)
   + screen.getByText("hello world", { exact: false }); (ignore case)
 - `TextMatch as Regex`:
   + screen.getByText(/World/); (substring match)
   + screen.getByText(/world/i); (substring match, ignore case)
   + screen.getByText(/^hello world$/i); (full string match, ignore case)
 - `TextMatch as Function`:
   + argument: (content, element?: ELement | null) => `Boolean`
   + screen.getByText((content) => content.startsWith('Hello'));

## queryBy & queryAllBy
 1. queryBy: 
   - Returns the matching node for a query. and return null if no elements match.
   - Useful for asserting an element that is not present
   - Throws an error if more than one match is found
 2. queryAllBy: 
   - Returns an array of all matching nodes for a query, and return an empty array if no elements match.

## findBy & findAllBy
 1. findBy: 
   - Returns a `Promise` which resolves when an element is found which matches the given query.
   - The `Promise` is rejected if no element is found or if more than one element is found after a
   default timeout of 1000ms.
 2. findAllBy: 
   - Returns a `Promise` which resolves to an array of elements when any elements are found which
   match the given query.
   - The `Promise` is rejected if no elements are found after a default timeout of 1000ms.

## Manual queries: 
   - Can use regular querySelector DOM Api to find elements
   - Query follow id, class are not recommended
   - Exp: const foo = container.querySelector('[data-foo="bar"]');

# II. User Interactions
   - fireEvent: 
      + is a method from RTL which is used to dispatch DOM events. Exp: we can dispatch the change
      event on an input field using fireEvent.
      + When a user tyoes into a textbox, the element has to be focused, and then keyboard and input
      events are fired and the selection and value on the element are manipulated as they type
   - use-event:
      + Simulate full interactions, which may fire multiple events and do additional checls along the way.
      + Allow you to describe a user interaction instead of a concrete event. It adds visibility and intractablility checks along the way and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g. wouldn't let a user click a hidden element or type in a disabled text box.

   1. Pointer Interactions
      - Convenience API: click(), dblClick(), tripleClick(), hover(), unhover(),
      - Pointer APIs:
         + pointer({ keys: '[MouseLeft]'})
         + pointer({ keys: '[MouseLeft][Mouseright]'})
         + pointer('[MouseLeft][Mouseright]')
         + pointer('[MouseLeft>]')
         + pointer('[/MouseLeft]')
   2. Keyboard interactions
      - Utility API: type(), clear(), selectOptions(), deselectOptions(), upload().
      - Convenience API: tab().
      - Clipboard APIs: copy(), paste(), cut().
      - Keyboard API: 
         + keyboard('foo') //translate to: f, o, o
         + keyboard('{Shift>}A{/Shift}') //translate to: Shift(down), A, Shift(up)

# III. Static analysis testing
   - Process of verifying that your code meets certain expectations without actually running it
   - Static analysis testing:
      + Ensure consistent style and formatting
      + Check for common mistakes and possible bugs
      + Limit the complexity of code
      + Verify type consistency
   - Different:
      + All types of tests run the code and then compare the outcome against known expected outputs to see if everything works OK.
      + Static testing analyses aspects such as readability, consistency, error handling, type checking, and alignment with best practices.
      + Testing checks if your code works or not, whereas static analysis checks if it is written well or not.
   - Tools: TypeScript, ESlint, Prettier, Husky, lint-staged.

   ## ESlint:
      - ESlint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.