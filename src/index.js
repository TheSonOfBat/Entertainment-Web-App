import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/home",
    element: <p>Home</p>
  },
  {
    path: "/movie",
    element: <p>Movies</p>
  },
  {
    path: "/tv",
    element: <p>TV</p>
  },
  {
    path: "/bookmark",
    element: <p>Bookmark</p>
  },
])

root.render(
  <React.StrictMode>
    <div id="LHS">
      <Nav/>
    </div>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
