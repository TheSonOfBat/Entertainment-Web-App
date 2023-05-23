import Card from "../components/Card";
export default function Bookmark(props){
    return(
        <main>
            <h1>Bookmarked Movies</h1>
            <section>
                {(props.data.filter((item)=>{return item.isBookmarked&&item.category === "Movie"}).map((item, index)=>{return <Card {...item} key={item.title+"Bookmarked"} toggle={()=>{props.toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))}/>}))}
            </section>
            <h1>Bookmarked TV Series</h1>
            <section>
                {(props.data.filter((item)=>{return item.isBookmarked&&item.category === "TV Series"}).map((item, index)=>{return <Card {...item} key={item.title+"Bookmarked"} toggle={()=>{props.toggleBookmark(item.title)}} animationDelay={0+(0.075*(index))}/>}))}
            </section>
        </main>
    )
}