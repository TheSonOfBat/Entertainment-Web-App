
export default function Card(props){
    console.log(props.title);
    let image = require(`../assets/thumbnails/${(props.title).replace(/\s+/g, '-').replace("II", '2').replace("’","").replace(":","").toLowerCase()}/regular/large.jpg`);
    console.log(image);
    return(
        <div className={`card ${props.isTrending?"trending":""}`} style={props.isTrending?{backgroundImage: `url(${image})`}:{}}>
            {!props.isTrending&&<img src={image}></img>}
            <div className="card--details">
                <div className="card--specs">
                    <p>{props.year}</p>
                    <p>{props.category}</p>
                    <p>{props.rating}</p>
                </div>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}
