import kickstartReact from './assets/sessions/kickstart-react.jpg';
import debugCode from './assets/sessions/debug-code.jpg';
import blueprintComponent from './assets/sessions/blueprint-component.jpg';
import stateMgmtFlow from './assets/sessions/state-mgmt-flow.jpg';
import hooks from './assets/sessions/hooks.jpg';
import styling from './assets/sessions/styling.jpg';
import dataFetching from './assets/sessions/data-fetching.jpg';
import reactTs from './assets/sessions/react-ts.jpg';
import performance from './assets/sessions/performance.jpg';
import dataStore from './assets/sessions/data-store.jpg';

export const SESSIONS = [
  {
    id: 'sess01',
    title: 'Kickstart with React: Personal Intro',
    summary: 'Tailored guidance for total beginners in React.',
    description:
      "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nNo need to worry about the jargon; I'll break everything down step by step.\n\nWe'll touch on the importance of unidirectional data flow and the component lifecycle.\n\nWe'll set up a new React project together.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
    duration: 1,
    date: '2023-11-01',
    image: kickstartReact,
  },
  {
    id: 'sess02',
    title: 'Debugging Your React Code',
    summary: "Stuck with a React bug? Let's squash it together.",
    description:
      "Every developer, regardless of experience, encounters bugs.\n\nBut, the power lies in knowing how to squash them effectively.\n\nIn our focused session, you'll learn the art of debugging in React.\n\nWe'll start by understanding the common pitfalls and errors that many developers face.\n\nUsing tools like React DevTools, we'll inspect components, props, and state.\n\nTogether, we'll simulate a few bugs and then debug them in real-time.\n\nYou'll learn about error boundaries and their significance in preventing app crashes.\n\nBy the end, not only will we have tackled your current bug(s), but you'll also be equipped with a toolkit of debugging strategies for future challenges.\n\nRemember, in the world of development, debugging is a superpower.",
    duration: 1.5,
    date: '2023-11-03',
    image: debugCode,
  },
  {
    id: 'sess03',
    title: 'React Component Best Practices',
    summary: 'Optimize and refactor your components.',
    description:
      "Bring your existing components and let's refactor them. Learn the best practices to create scalable and reusable components.",
    duration: 1.5,
    date: '2023-11-07',
    image: blueprintComponent,
  },
  {
    id: 'sess04',
    title: 'Effective State Management Tactics',
    summary: 'Strategies to manage state efficiently.',
    description:
      "Discuss your app's state challenges and explore different strategies, from `useState` to `useReducer` or even Redux, to manage state.",
    duration: 2,
    date: '2023-11-09',
    image: stateMgmtFlow,
  },
  {
    id: 'sess05',
    title: 'Custom Hooks Creation',
    summary: 'Craft your custom hooks.',
    description:
      "Explore the power of custom hooks. Work together to create hooks tailored for your application's needs.",
    duration: 1.5,
    date: '2023-11-12',
    image: hooks,
  },
  {
    id: 'sess06',
    title: 'Styling Strategies in React',
    summary: 'Discuss and implement styling solutions.',
    description:
      'From CSS modules to styled-components, discuss the pros and cons of different styling approaches in React and implement the best fit for your project.',
    duration: 2,
    date: '2023-11-15',
    image: styling,
  },
  {
    id: 'sess07',
    title: 'API Integration and Data Fetching',
    summary: 'Fetch, display, and handle data efficiently.',
    description:
      'Walk through integrating APIs, handling asynchronous operations, error handling, and setting up data fetching patterns in your app.',
    duration: 2,
    date: '2023-11-17',
    image: dataFetching,
  },
  {
    id: 'sess08',
    title: 'React with TypeScript: Type Your Code',
    summary: 'Strengthen your code with TypeScript.',
    description:
      'See the benefits of integrating TypeScript into your React projects firsthand. Get guidance on type-checking your components and defining props.',
    duration: 1.5,
    date: '2023-11-20',
    image: reactTs,
  },
  {
    id: 'sess09',
    title: 'Performance Tuning Your React App',
    summary: 'Optimizations to make your app blazing fast.',
    description:
      "Audit your React app's performance. From React's Profiler to code splitting, apply techniques to enhance the app's speed and responsiveness.",
    duration: 2,
    date: '2023-11-23',
    image: performance,
  },
  {
    id: 'sess10',
    title: 'Deep Dive into Redux and Middleware',
    summary: 'Master global state and async actions.',
    description:
      'An in-depth review of your Redux setup. Improve your store, actions, and reducers. Dive into middleware like Redux Thunk for asynchronous actions.',
    duration: 2,
    date: '2023-11-27',
    image: dataStore,
  },
];
