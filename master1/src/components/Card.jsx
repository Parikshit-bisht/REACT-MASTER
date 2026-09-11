import React from "react";

const Card = (props) => { 

return (
    <div className="card">
<img src={props.img} alt=""></img> 
<h1>{props.user}</h1>
<h2>{props.age}</h2>
    </div>
)}
export default Card;