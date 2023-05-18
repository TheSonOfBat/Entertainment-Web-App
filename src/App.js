import './App.css';
import Searchbar from './components/Searchbar';
import Nav from './components/Nav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import Data from "./data.json";
import Bookmark from './routes/Bookmark';
import Card from './components/Card';
import TV from './routes/TV';
import Movie from './routes/Movie';

export default function App(){
  let intialData = (localStorage.getItem("savedData"))?JSON.parse(localStorage.getItem("savedData")):Data;
  let [data, updateData] = React.useState(intialData);
  const router = createBrowserRouter([
      {
        path: "/home",
        element: <Home data={data} toggleBookmark={(target)=>toggleBookmark(target)}/>,
      },
      {
        path: "/movie",
        element: <Movie data={data} toggleBookmark={(target)=>toggleBookmark(target)}/>,
      },
      {
        path: "/tv",
        element: <TV data={data} toggleBookmark={(target)=>toggleBookmark(target)}/>,
      },
      {
        path: "/bookmark",
        element: <Bookmark data={data} toggleBookmark={(target)=>toggleBookmark(target)}/>,
      },
    ]);
    const [searchValue, updateSearchValue] = React.useState("");
    
    function handleChange(e){
      updateSearchValue(e.target.value)
    }
    function toggleBookmark(word){
      updateData((prev)=>{
          let newArr = JSON.parse(JSON.stringify(prev));//Shallow Copy === Spread Operator VS Stringify into Parse === Deep Copy (What we need)
          newArr[newArr.findIndex(item=> item.title === word)].isBookmarked = !newArr[newArr.findIndex(item=> item.title === word)].isBookmarked;
          return [...newArr];
      })
      
    }

    React.useEffect(()=>{
      localStorage.setItem("savedData", JSON.stringify(data));
    },[data]);

    return(
    <>
        <div id="LHS">
            <Nav/>
        </div>
        <div id="RHS">
            <Searchbar value={searchValue} onchange={(e)=>{handleChange(e)}}/>
            {
              searchValue===""&&
            [
            <RouterProvider router={router}/>
            ]
            
          }
          {
            searchValue!==""&&
            <>
            <h1>Search Results</h1>
            <section>
              {data.filter((item)=>{
                return item.title.toLowerCase().startsWith(searchValue.toLowerCase()) && (window.location.pathname==="/movie"?item.category==="Movie":window.location.pathname==="/tv"?item.category==="TV Series":window.location.pathname==="/bookmark"?item.isBookmarked:true);
              }).map((item)=>{
                return <Card {...item} key={item.title+"Search"} toggle={()=>{toggleBookmark(item.title)}}/>
              })}
            </section>
            </>
          }
        </div>
    </>
    )
}

//More accurate way to make SVG files change color https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element