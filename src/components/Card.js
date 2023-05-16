
export default function Card(props){
    console.log(props.title);
    let image = require(`../assets/thumbnails/${(props.title).replace(/\s+/g, '-').replace("II", '2').replace("’","").replace(":","").toLowerCase()}/regular/large.jpg`);
    console.log(image);
    return(
        <div className={`card ${props.isTrending?"trending":""}`} style={props.isTrending?{backgroundImage: `url(${image})`}:{}}>
            <div className="card--details">
                <div className="card--specs">
                    <h3>{props.year}</h3>
                    <h3>{props.category}</h3>
                    <h3>{props.rating}</h3>
                </div>
                {!props.isTrending&&<img src={image}></img>}
            </div>
        </div>
    )
}
