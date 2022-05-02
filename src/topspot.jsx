import React from 'react';
// import img from "./images/"
// let images =require("./images/1.jpg");

export default props => (
  <div className="card-group">
<div className="card bg-dark text-white m-2 rounded text-end">
  <img src={`./images/${props.id}.png`} className="card-img" alt="..."/>
  <div className="card-img-overlay ps-2">
    <h4 className="card-title display-6 ps-3 text-wrap text-end"><strong><em>{props.name}</em></strong></h4>
    <p className="card-text ms-5 ps-5 text-wrap text-end fs-6"><em>{props.description}</em></p>
    <a className="btn btn-danger justify-end" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} role="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> MAP</a>
  </div>
</div>
</div> 
);

