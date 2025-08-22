import Link from "next/link"

export default function ImageList({heading, images}){
    console.log(images[0].images[0].url)
    return (
         <section className="imageList">
        <div className="imageList__topDiv">
            <h3 className="imageList__heading">{ heading }</h3>
            <p>View All</p>
        </div>
        <div className="imageList__flexDiv">
            {images.map((element, index)=>{
            return<Link key={element.name +index } href={`detail?id=${element.id}`}> <img key={element.images[0].url} className="imageList__img" src={element.images[0].url} alt=""/></Link>

            })}
            
        </div>
    </section>
    )
}