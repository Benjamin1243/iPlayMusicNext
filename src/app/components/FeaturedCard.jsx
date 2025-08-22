import Link from "next/link"
import "../style/components/featuredCard.scss"
export default function featuredCard({heading, img, type, linkId}){
    return(
        <Link className="featuredCard" href={`detail?id=${linkId}`} style={{backgroundImage: `url(${img})`}}>
   <div className="featuredCard__backgroundDiv"></div>
    <h3 className="featuredCard__heading">{ heading }</h3>
    <p className="featuredCard__text">{type }</p>
</Link>
    )
}