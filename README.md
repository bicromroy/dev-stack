# Dev-Stack Tech Explorer

This is a React + Vite project for Assignment 5

## Features
- Responsive Navbar with Mobile Menu
- Hero Banner with Gradient Theme
- Load Technologies from JSON with Loading State
- Technology Cards with 3-Column Responsive Grid
- Your Stack Sidebar with add/remove functionality
- React Toastify for Alerts
- Responsive Footer

## React Questions - Answers

**1. What is JSX?**  
JSX stands for JavaScript XML. It allows us to write HTML-like code in JavaScript. React uses JSX to describe what the UI should look like.

**2. What is the difference between State and Props?**  
State is data managed inside a component and can be changed. Props are data passed from parent component to child component and are read-only.

**3. What does the useState hook do, and where did you use it in this project?**  
`useState` is a React Hook used to store and update data inside a component.  
In this project I used it for 3 things: `technologies` array, `stack` array, and `loading` state.

**4. What is useEffect used for?**  
`useEffect` is a React Hook used for handling side effects. Example: data fetching, setting up subscriptions, or updating the DOM.  
In this project I used `useEffect` to `fetch('/technologies.json')` when the component first loads.

**5. Why does every item in a .map() list need a unique key prop?**  
The `key` prop helps React identify which items have changed, added, or removed in a list. It improves performance and prevents bugs.  
In this project I used `key={tech.id}` when mapping the technologies.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**  
Conditional rendering means showing different UI based on a condition.  
Example: In the "Your Stack" section, I used `{stack.length === 0 ? <p>Your stack is empty</p> : <StackList />}`. If the stack is empty it shows a message, otherwise it shows the selected items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
We pass data from parent to child using props.  
To send data back to the parent, the parent passes a function as a prop and the child calls that function.  
Example: Parent passes `onAdd={addToStack}` to `TechCard`. When button is clicked, child calls `onAdd(tech)` and parent updates the stack state.
