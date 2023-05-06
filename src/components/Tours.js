import Card from "./Card";
function Tours({tours , removeTour}){
    return(
        <div className="container">
            <div className="cards">
                {
                    tours.map( (tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
            
        </div>
    )
}
export default Tours; 
// when using map function always pass key for unique identification --- good practise