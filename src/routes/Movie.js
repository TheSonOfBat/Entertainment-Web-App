import Card from "../components/Card";
export default function Movie(props){
    return(
        <main>
            <h1>Movies</h1>
            <section>
                {(props.data.filter((item)=>{return item.category === "Movie"}).map((item)=>{return <Card {...item} key={item.title+"Bookmarked"} toggle={()=>{props.toggleBookmark(item.title)}}/>}))}
            </section>
        </main>
    )
}