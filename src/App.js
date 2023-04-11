import React from 'react';
import Quiz from './Quiz';
import './App.css';


const questions = [
  {
    questionText: 'Which of the following selectors will select all the even-numbered children of an element?',
    answerOptions: [
      { answerText: ':nth-child(odd)', isCorrect: true },
      { answerText: ':odd', isCorrect: false },
      { answerText: ':even', isCorrect: false },
      { answerText: ':nth-child(even)', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is NOT a valid way to include external JavaScript code in an HTML document?',
    answerOptions: [
    { answerText: '<script src="script.js"></script>', isCorrect: false },
    { answerText: '<script type="text/javascript" src="script.js"></script>', isCorrect: false },
    { answerText: '<script href="script.js"></script>', isCorrect: true },
    { answerText: '<script link="script.js"></script>', isCorrect: false },
    ],
    },
    {
      questionText: 'Which of the following is NOT a valid data type in JavaScript?',
      answerOptions: [
      { answerText: 'number', isCorrect: false },
      { answerText: 'boolean', isCorrect: false },
      { answerText: 'string', isCorrect: false },
      { answerText: 'datetime', isCorrect: true },
      ],
      },

  {
    questionText: 'What is the difference between client-side rendering and server-side rendering in web development?',
    answerOptions: [
    { answerText: 'Client-side rendering is faster but less secure, while server-side rendering is slower but more secure.', isCorrect: false },
    { answerText: 'Client-side rendering allows for faster updates and interactivity, while server-side rendering is better for SEO and initial load times.', isCorrect: true },
    { answerText: 'string', isCorrect: false },
    { answerText: 'Client-side rendering is used for static websites, while server-side rendering is used for dynamic websites.', isCorrect: false },
    ],
    },
  
    
  {
    questionText: 'Which of the following is used to make a web page responsive to different screen sizes?',
    answerOptions: [  
     { answerText: 'flexbox', isCorrect: false },
      { answerText: 'media queries', isCorrect: false },
      { answerText: 'grid', isCorrect: false }, 
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
 
{
questionText: 'What does the "this" keyword refer to in JavaScript?',
answerOptions: [
{ answerText: 'The object that called the function', isCorrect: true },
{ answerText: 'The global object', isCorrect: false },
{ answerText: 'The parent function', isCorrect: false },
{ answerText: 'The function itself', isCorrect: false },
],
},
{
  questionText: 'What is the purpose of the useEffect hook in React?',
  answerOptions: [
    { answerText: 'To manage component lifecycle events ', isCorrect: true },
    { answerText: 'To declare state in a functional component', isCorrect: false },
    { answerText: 'To manage routing in a React application', isCorrect: false },
    { answerText: 'To manage global state across an entire application', isCorrect: false },
  ],
},

{
questionText: 'Which of the following is NOT a JavaScript data type?',
answerOptions: [
{ answerText: 'Boolean', isCorrect: false },
{ answerText: 'String', isCorrect: false },
{ answerText: 'Function', isCorrect: false },
{ answerText: 'Integer', isCorrect: true },
],
},


{
questionText: 'What is the purpose of the "strict mode" in JavaScript?',
answerOptions: [
{ answerText: 'To enforce strict data types', isCorrect: false },
{ answerText: 'To enable new syntax features', isCorrect: false },
{ answerText: 'To prevent common programming mistakes', isCorrect: true },
{ answerText: 'To increase the speed of execution', isCorrect: false },
],
},


{
questionText: 'Which of the following is NOT a JavaScript loop statement?',
answerOptions: [
{ answerText: 'for', isCorrect: false },
{ answerText: 'foreach', isCorrect: true },
{ answerText: 'while', isCorrect: false },
{ answerText: 'do-while', isCorrect: false },
],
},


{
questionText: 'What is the difference between "let" and "var" in JavaScript?',
answerOptions: [
{ answerText: 'There is no difference', isCorrect: false },
{ answerText: '"let" can only be used for function-scoped variables', isCorrect: false },
{ answerText: '"var" can only be used for block-scoped variables', isCorrect: false },
{ answerText: '"let" creates block-scoped variables, while "var" creates function-scoped variables', isCorrect: true },
],
},


{
questionText: 'What is the purpose of the "try...catch" statement in JavaScript?',
answerOptions: [
{ answerText: 'To define a function', isCorrect: false },
{ answerText: 'To declare a variable', isCorrect: false },
{ answerText: 'To handle errors', isCorrect: true },
{ answerText: 'To execute code conditionally', isCorrect: false },
],
},
  {
    questionText: 'Which CSS property is used to create a fixed background image?',
    answerOptions: [
      { answerText: 'background-repeat: fixed', isCorrect: false },
      { answerText: 'background-attachment: fixed', isCorrect: true },
      { answerText: 'background-size: fixed', isCorrect: false },
      { answerText: 'None of the above', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is a CSS preprocessor?',
    answerOptions: [
      { answerText: 'SASS', isCorrect: false },
      { answerText: 'Stylus', isCorrect: false },
      { answerText: 'Less', isCorrect: false },    
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
  {
    questionText: 'Which CSS property is used to set the font for an entire document?',
    answerOptions: [ 
      { answerText: 'font-family', isCorrect: true },
      { answerText: 'font-size', isCorrect: false },
     { answerText: 'font-style', isCorrect: false },
      { answerText: 'none of the above', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is NOT a pseudo-class?',
    answerOptions: [
      { answerText: ':hover', isCorrect: false },
      { answerText: ':before', isCorrect: true },
      { answerText: ':visited', isCorrect: false },
      { answerText: ':after', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is used to create a responsive navigation menu?',
    answerOptions: [
      { answerText: 'Media queries', isCorrect: false },
      { answerText: 'Flexbox', isCorrect: false },
      { answerText: 'Grid', isCorrect: false }, 
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the difference between an array and an object in JavaScript? ',
    answerOptions: [
      { answerText: 'An array can only store primitive data types, while an object can store any data type ', isCorrect: false },
      { answerText: ' An array is used to store key-value pairs, while an object is used to store a list of values', isCorrect: false },
      { answerText: 'An array is ordered, while an object is unordered ', isCorrect: true },
      { answerText: 'There is no difference between an array and an object in JavaScript ', isCorrect: false },
    ],
  },
  {
    questionText: 'Which data structure in JavaScript is used to store a collection of unique values? ',
    answerOptions: [
      { answerText: 'Array ', isCorrect: false },
      { answerText: 'Object ', isCorrect: false },
      { answerText: 'Map ', isCorrect: false },
      { answerText: 'Set', isCorrect: true },
    ],
  },
  {
    questionText: 'Which of the following is used to position an element relative to its closest positioned ancestor?',
    answerOptions: [
      { answerText: 'position: static', isCorrect: false },
      { answerText: 'position: relative', isCorrect: true },
      { answerText: 'position: absolute', isCorrect: false },
      { answerText: 'position: fixed', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is used to make a web page load faster?',
    answerOptions: [
      { answerText: 'caching', isCorrect: false },
      { answerText: 'compression', isCorrect: false },
      { answerText: 'minification', isCorrect: false },
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the largest country in the world?',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'Russia', isCorrect: false },
      { answerText: 'USA', isCorrect: false },
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
  {
    questionText: 'What is ReactJS?',
    answerOptions: [
    { answerText: 'A programming language', isCorrect: false },
    { answerText: 'A library for building user interfaces', isCorrect: true },
    { answerText: 'A database management system', isCorrect: false },
    { answerText: 'A web browser', isCorrect: false },
    ],
    },
    
    {
    questionText: 'What is JSX?',
    answerOptions: [
    { answerText: 'A programming language', isCorrect: false },
    { answerText: 'A data exchange format', isCorrect: false },
    { answerText: 'A database management system', isCorrect: false }, 
    { answerText: 'A syntax extension for JavaScript', isCorrect: true },
    ],
    },
    
    {
    questionText: 'What is a component in React?',
    answerOptions: [
    { answerText: 'A collection of HTML elements', isCorrect: false },
    { answerText: 'A programming language', isCorrect: false }, 
    { answerText: 'A reusable piece of code', isCorrect: true },
    { answerText: 'A data structure', isCorrect: false },
    ],
    },
    
    {
    questionText: 'What is the virtual DOM in React?',
    answerOptions: [
    { answerText: 'A browser API', isCorrect: false },
    { answerText: 'A way to improve performance by minimizing DOM manipulations', isCorrect: true },
    { answerText: 'A programming language', isCorrect: false },
    { answerText: 'A data storage mechanism', isCorrect: false },
    ],
    },
    
    {
    questionText: 'What is a state in React?',
    answerOptions: [
    { answerText: 'An object that stores dynamic data for a component', isCorrect: true },
    { answerText: 'A collection of props', isCorrect: false },
    { answerText: 'A browser API', isCorrect: false },
    { answerText: 'A database management system', isCorrect: false },
    ],
    },
    
    {
    questionText: 'What is a prop in React?',
    answerOptions: [
    { answerText: 'A way to pass data from a parent component to a child component', isCorrect: true },
    { answerText: 'An object that stores dynamic data for a component', isCorrect: false },
    { answerText: 'A browser API', isCorrect: false },
    { answerText: 'A database management system', isCorrect: false },
    ],
    },
    {
      questionText: 'What is the purpose of the useContext hook in React?',
      answerOptions: [
        { answerText: 'To provide access to a context object at any level of a React component tree ', isCorrect: true },
        { answerText: 'To manage component lifecycle events', isCorrect: false },
        { answerText: 'To manage global state changes in a React application ', isCorrect: false },
        { answerText: 'To manage local state changes in a functional component', isCorrect: false },
      ],
    },
    {
    questionText: 'What is the purpose of the render method in a React component?',
    answerOptions: [
    { answerText: 'To update the DOM', isCorrect: false },
    { answerText: 'To render the component to the screen', isCorrect: true },
    { answerText: 'To perform calculations', isCorrect: false },
    { answerText: 'To fetch data from a server', isCorrect: false },
    ],
    },
    {
      questionText: 'What is the difference between useMemo and useCallback hooks in React? ',
      answerOptions: [
        { answerText: 'useCallback is used to memoize a function, while useMemo is used to memoize a value ', isCorrect: true },
        { answerText: 'useMemo is used to memoize a function, while useCallback is used to memoize a value  ', isCorrect: false },
        { answerText: 'There is no difference between useMemo and useCallback hooks in React ', isCorrect: false },
        { answerText: 'useMemo is used to manage local state changes in a functional component, while useCallback is used to manage global state changes ', isCorrect: false },
      ],
    },
    {
    questionText: 'What is the purpose of the componentDidMount method in a React component?',
    answerOptions: [
    { answerText: 'To update the DOM', isCorrect: false },
    { answerText: 'To fetch data from a server', isCorrect: false },
    { answerText: 'To handle user input', isCorrect: false }, 
    { answerText: 'To perform actions after the component has mounted', isCorrect: true },
    ],
    },
    {
      questionText: 'What is the time complexity of the push method for arrays in JavaScript? ',
      answerOptions: [
        { answerText: 'O(1)', isCorrect: true },
        { answerText: 'O', isCorrect: false },
        { answerText: 'O(log n) ', isCorrect: false },
        { answerText: 'O(n^2)', isCorrect: false },
      ],
    },
  ]

function App() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
