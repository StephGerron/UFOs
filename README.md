# UFOs



### Writing JavaScript

There are a few important things to remember about JavaScript syntax. We’ll start with the following:

    Case sensitivity
    Semicolons
    Statements and expressions
    Code blocks

JavaScript’s code style, according to coding guidelines and syntax, is camel case or camelCase.

#### Statements and Expressions

When describing JavaScript code, the terms “statements” and “expressions” are both used, and often. Here’s how to distinguish between the two:

    Statements perform actions.
    Expressions create values.

Assigning a variable is an example of a statement. Using arithmetic to create a new value is an expression.
Code Blocks

Code blocks, which we will see more often as we start writing functions, are denoted by curly brackets. Code inside the curly brackets are typically indented two to four spaces. This isn’t required to run the code, but it does make reading it easier and follows the coding guidelines.

### Variables

Before ES6 came along, there was a single way to declare a variable: var. There are specific uses for different variables, and using let and const instead of var helps developers define what the uses are.

#### Create Variables with let

The biggest difference between var and let is that the var declaration is global, meaning it applies to the program instead of being contained in a block of code.

When a developer chooses to use let, it basically means “I might want to use this variable again later to hold different data, but in this code block I’ll only use it once.” In ES6+, let is typically used in place of var. We’ll be using let in this module, but both are encountered out in the wild.

#### Create Variables with const

The const declaration is more specific than let. Instead of being contained within a block of code, const tells JavaScript that the variable won’t be reassigned or redeclared, either in a block of code or within the program as a whole. The following table highlights the key differences of var, let, and const:
