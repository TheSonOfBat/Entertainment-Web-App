import Card from "../components/Card";
import Data from "../data.json";
import React from "react";
export default function Home(){

    let [data, updateData] = React.useState(Data);

    function toggleBookmark(word){
        console.log(word)
        updateData((prev)=>{
            let newArr = JSON.parse(JSON.stringify(prev));//Shallow Copy === Spread Operator VS Stringify into Parse === Deep Copy (What we need)
            newArr[newArr.findIndex(item=> item.title === word)].isBookmarked = !newArr[newArr.findIndex(item=> item.title === word)].isBookmarked;
            console.log(newArr[newArr.findIndex(item=> item.title === word)].isBookmarked)
            return [...newArr];
        })
    }
    return(
        <main>
            <h1>Trending</h1>
            <section className="trending--section">
                {(data.filter((item)=>{return item.isTrending}).map((item)=>{return <Card {...item} key={item.title+"Trending"} toggle={()=>{toggleBookmark(item.title)}}/>}))}
            </section>
            <h1>Recommended For You</h1>
            <section>
                {(data.filter((item)=>{return !item.isTrending}).map((item)=>{return <Card {...item} key={item.title+"Recommended"} toggle={()=>{toggleBookmark(item.title)}}/>}))}
            </section>
        </main>
    )
}