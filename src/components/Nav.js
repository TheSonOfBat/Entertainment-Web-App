import navLogo from "../assets/logo.svg"
import navHome from "../assets/icon-nav-home.svg"
import navMovie from "../assets/icon-nav-movies.svg"
import navTv from "../assets/icon-nav-tv-series.svg"
import navBookmark from "../assets/icon-nav-bookmark.svg"
import navAvatar from "../assets/image-avatar.png"

export default function Nav(){
    return(
        <nav>
            <img className="nav--logo" src={navLogo}></img>
            <div className="nav--secondaryIcons">
                <a href="/home"><img className={`nav--icon ${window.location.pathname==="/home"?"nav--iconHighlighted":""}`} src={navHome}></img></a>
                <a href="/movie"><img className={`nav--icon ${window.location.pathname==="/movie"?"nav--iconHighlighted":""}`} src={navMovie}></img></a>
                <a href="/tv"><img className={`nav--icon ${window.location.pathname==="/tv"?"nav--iconHighlighted":""}`} src={navTv}></img></a>
                <a href="/bookmark"><img className={`nav--icon ${window.location.pathname==="/bookmark"?"nav--iconHighlighted":""}`} src={navBookmark}></img></a>
            </div>
            <img src={navAvatar} id="nav--avatar"></img>
        </nav>
    )
}

//More accurate way to make SVG files change color https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element