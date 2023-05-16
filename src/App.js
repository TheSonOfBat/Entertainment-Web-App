import './App.css';
import Searchbar from './components/Searchbar';
import Nav from './components/Nav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
      searchRestriction: null
    },
    {
      path: "/movie",
      element: <p>Movies</p>,
      searchRestriction: "Movies"
    },
    {
      path: "/tv",
      element: <p>TV</p>,
      searchRestriction: "TV Series"
    },
    {
      path: "/bookmark",
      element: <p>Bookmark</p>,
      searchRestriction: "Bookmarks"
    },
  ])

export default function App(){
    const [searchValue, updateSearchValue] = React.useState("");
    
    function handleChange(e){
      updateSearchValue(e.target.value)
    }

    return(<>
        <div id="LHS">
            <Nav/>
        </div>
        <div id="RHS">
            <Searchbar value={searchValue} onchange={(e)=>{handleChange(e)}}/>
            {searchValue===""&&<RouterProvider router={router}/>}
        </div>
    </>
    )
}

//More accurate way to make SVG files change color https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element