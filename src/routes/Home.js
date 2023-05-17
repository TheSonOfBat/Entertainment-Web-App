import Card from "../components/Card";
import Data from "../data.json";
export default function Home(){
    return(
        <main>
            <h1>Trending</h1>
            <section className="trending--section">
                {(Data.filter((item)=>{return item.isTrending}).map((item)=>{console.log(item.title);return <Card {...item} key={item.title}/>}))}
            </section>
            <h1>Recommended For You</h1>
            <section>
            {(Data.filter((item)=>{return !item.isTrending}).map((item)=>{return <Card {...item} key={item.title}/>}))}
            </section>
        </main>
    )
}