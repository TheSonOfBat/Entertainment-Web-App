import Card from "../components/Card";
export default function Home(props){
    return(
        <main>
            <h1>Trending</h1>
            <section className="trending--section">
                {(props.data.filter((item)=>{return item.isTrending}).map((item)=>{return <Card {...item} key={item.title+"Trending"} toggle={()=>{props.toggleBookmark(item.title)}} trendingDisplay={true}/>}))}
            </section>
            <h1>Recommended For You</h1>
            <section>
                {(props.data.filter((item)=>{return !item.isTrending}).map((item)=>{return <Card {...item} key={item.title+"Recommended"} toggle={()=>{props.toggleBookmark(item.title)}}/>}))}
            </section>
        </main>
    )
}