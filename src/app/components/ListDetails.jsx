import "../style/components/listDetails.scss"
export default function ListDetails({heading, items}){
    console.log(items)
    return(


    <section className="listdetail">
        <div className="listdetail__topDiv">
            <h3 className="listdetail__heading">{ heading }</h3>
            <p>View All</p>
        </div>
        <div className="listdetail__flexDiv">
            {items.map((element, index)=>{
                return(
                     <div key={element.name + index}  className="listdetail__element">
                <img src={element.images[0].url} className="listdetail__img" alt=""/>
                <div className="listdetail__textDiv">
                    <h3 className="listdetail__elementHeading">{ element.name }</h3>
                    <p className="listdetail__artist"> { element.artist }</p>
                </div>
                <p className="listdetail__elementLastInfo"> {element.lastInfo }</p>
            </div>
                )
            })}
           
            
        </div>
    </section>
    )
}