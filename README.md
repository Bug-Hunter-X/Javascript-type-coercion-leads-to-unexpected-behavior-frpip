# Javascript Type Coercion Bug
This repository demonstrates a common issue in Javascript related to type coercion. When adding a number and a string, Javascript will concatenate them instead of throwing an error. This can lead to unexpected behavior in your code.
## Bug
The bug is in the `foo` function, which adds a number and a string. Javascript treats the number as a string, and concatenates them instead of adding them together.
## Solution
The solution is to explicitly convert the string to a number before adding it to the number. This can be done using the `parseInt()` function. The fixed code is demonstrated in `bugSolution.js`.