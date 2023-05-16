import React from "react";
import searchIcon from "../assets/icon-search.svg";

export default function Searchbar(props){
    return(
        <div className="searchbar">
            <img src={searchIcon} id="searchbar--icon"></img>
            <input type="text" placeholder="Search for movies or TV series" value={props.value} onChange={props.onchange}></input>
        </div>
    )
}

