import './App.css';
import Searchbar from './components/Searchbar';
import Nav from './components/Nav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
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

export default function App(){
    const [searchValue, updateSearchValue] = React.useState("");
    
    updateSearchValue(()=>{
        console.log("e")
    })

    return(<>
        <div id="LHS">
            <Nav/>
        </div>
        <div id="RHS">
            <Searchbar value={searchValue} onchange={()=>{updateSearchValue()}}/>
            <RouterProvider router={router}/>
        </div>
    </>
    )
}

//More accurate way to make SVG files change color https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element