import { useState } from "react";

function Card({id, name, info, image, price, removeTour}){
   
    const [readmore,setReadmore]=useState(false);
    
    function readmoreHandler(){ setReadmore(!readmore); }
    const description = readmore ? info : info.substring(0,200)

    return(
        <div className="card">
            <img src={image} alt="photo"  className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-Price">₹  {price}</h4>
                    <h4 className="tour-Name">{name}</h4> 
                </div>
                <div className="description">
                    {description} <span className="readmore" onClick={readmoreHandler} >{readmore?`Show less`:`Read more`}</span>
                </div>
            </div>
            <button onClick={()=>removeTour(id)} className="btn-red">Not interested</button>

        </div>
    )
}
export default Card;