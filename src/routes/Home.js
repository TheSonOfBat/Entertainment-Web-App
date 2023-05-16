import Card from "../components/Card";
import Data from "../data.json";
export default function Home(){
    return(
        <main>
            <h1>Trending</h1>
            <div className="trending--section">
                {(Data.filter((item)=>{return item.isTrending}).map((item)=>{return <Card {...item} key={item.title}/>}))}
            </div>
        </main>
    )
}