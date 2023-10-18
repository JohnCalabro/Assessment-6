### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

ANSWER: The two main ways of dealing with async code in JS is using then/catch, and 
the second way is async/await. 

- What is a Promise?

ANSWER: A Promise is an object which represents a value in the future. Because async operations take time rather than halting other code in the file while the async function does its thing the other code resumes. The promise object is not the value of the data itself but rather a "promise" there will be a future value. For example, you and your friend go out to eat and your friend forgets their wallet. He or she is unable to pay you back at the moment and asks you to cover the bill, and promises they will pay you back asap. There is no guarantee that friend will pay you back, they could potentially break that promise, this is similar in the world of code, you are promised a response, but there is no guatantee that response will give you the data, the response can fail. 

- What are the differences between an async function and a regular function?

ANSWER: Async functions run while all the other code on the file resumes. A regular function can be called right away and resolves before any code it is above. An aync function however will do its thing while the other code does not stop. Even if the async function is written above the rest of the code, the code at the bottom can resolve first before the async operation is complete. 

- What is the difference between Node.js and Express.js?

ANSWER: Node JS is a way of using JavaScript on the server-side, while Express is a web framework that helps you manage various http requests.

- What is the error-first callback pattern?

ANSWER: Is it a function that will return either an error object, or the actual data in the event the function is a success.

- What is middleware?

ANSWER: middleware is code you can run between the request and response cycle. 

- What does the `next` function do?

ANSWER: the next function runs the next middleware, it must be called to get to the next middleware function, and you must keep using it until you get to the end. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
ANSWER: the code is not really dynamic. The usernames are hardcoded into the query string. Also while having three variables might not seem like such a big deal at first, if more users are added and say we have 1000 users this could get messy pretty quickly, not only will it be annoying to read, it would also effect performance, especially since this is an async operation, and we would be awaiting 1000 promises to resolve.