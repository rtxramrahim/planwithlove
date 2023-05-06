import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";


const App = () => {
  const [tours,setTour]=useState(data);

  function removeTour(id){
    const newtour = tours.filter( tour => tour.id !== id );
    setTour(newtour);
  }
  function refresh(){
    return(
      setTour(data)
    )
  }

  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={refresh}>Refresh</button>
      </div>
    )
  }
  
  return(
    <div>
      <h2 className="title">Plan with Love</h2>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
