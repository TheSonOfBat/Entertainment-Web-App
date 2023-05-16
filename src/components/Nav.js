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
                <a href="/home"><img className="nav--logo" style={window.location.pathname==="/home"?{filter: "brightness(10)"}:{}} src={navHome}></img></a>
                <a href="/movie"><img className="nav--logo" style={window.location.pathname==="/movie"?{filter: "brightness(10)"}:{}} src={navMovie}></img></a>
                <a href="/tv"><img className="nav--logo" style={window.location.pathname==="/tv"?{filter: "brightness(10)"}:{}} src={navTv}></img></a>
                <a href="/bookmark"><img className="nav--logo" style={window.location.pathname==="/bookmark"?{filter: "brightness(10)"}:{}} src={navBookmark}></img></a>
            </div>
            <img src={navAvatar} id="nav--avatar"></img>
        </nav>
    )
}