import tvIcon from "../assets/icon-category-tv.svg";
import movieIcon from "../assets/icon-category-movie.svg";
import bookmarkEmptyIcon from "../assets/icon-bookmark-empty.svg";
import bookmarkFullIcon from "../assets/icon-bookmark-full.svg";

export default function Card(props){
    let image = require(`../assets/thumbnails/${(props.title).replace(/\s+/g, '-').replace("II", '2').replace("’","").replace(":","").toLowerCase()}/regular/large.jpg`);
    return(
        <div className={`card ${props.isTrending?"trending":""}`} style={props.isTrending?{backgroundImage: `url(${image})`}:{}}>
            {!props.isTrending&&<img src={image} className="card--image"></img>}
            <div className="card--details">
                <div className="card--specs">
                    <p>{props.year}</p><span></span>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={props.category==="Movie"?movieIcon:tvIcon} style={{marginRight: "5px"}}></img>
                        <p>{props.category}</p>
                    </div><span></span>
                    <p>{props.rating}</p>
                </div>
                <h2>{props.title}</h2>
            </div>
            <div className="card--bookmarkContainer">
                <img src={props.isBookmarked?bookmarkFullIcon:bookmarkEmptyIcon} className="card--bookmark"></img>
            </div>
        </div>
    )
}
