import Link from "next/link";
import "../style/components/hashTagLink.scss"

export default function HashTagLink({tag}){
    return(
    <Link href="ere" className="hashTagLink">#{tag}</Link>
    )
}