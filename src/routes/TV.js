import Card from "../components/Card";
export default function TV(props){
    return(
        <main>
            <h1>TV Series</h1>
            <section>
                {(props.data.filter((item)=>{return item.category === "TV Series"}).map((item)=>{return <Card {...item} key={item.title+"Bookmarked"} toggle={()=>{props.toggleBookmark(item.title)}}/>}))}
            </section>
        </main>
    )
}