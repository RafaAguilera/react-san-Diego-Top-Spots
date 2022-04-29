import React from 'react';
// import img from './images/1.jpg'
export default props => (

  <div className="card col-6 m-2" style={{width: "40rem"}}>
  <div className="flex-column-reverse col-12 ps-3 pe-3 mt-3 mb-3 text-end">
      <h4 className="card-title text-wrap">{props.name}</h4>
      <p className="card-body text-wrap" >{props.description}</p>
      <a className="btn btn-success" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} role="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
    </svg>  MAP</a>
  </div>
</div> 
);

