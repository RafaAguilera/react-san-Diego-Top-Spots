import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';
// import img from './images/1.jpg'

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      topspots: []
    }
  }
  componentWillMount(){
  axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
	.then(response => response.data)
	.then(topspots => this.setState({ topspots }));
  }
  
  render() {

    return (
      <div className='App' style={{ backgroundImage:`url(${`https://thumbs.dreamstime.com/t/black-brick-wall-rectangle-geometric-shapes-vector-seamless-pattern-textile-paint-simple-repetitive-background-fabric-swatch-137559223.jpg`})` }}>
      <div className='container'>
      
      <h1 className="display-1 font-weight-bolder font-italic text-white text-center" >SAN DIEGO TOP SPOTS</h1>
      <h5 className="display-6 font-weight-lighter font-italic text-white text-end pe-2"><em>A list of the 30 places to see in San Diego, Califonia </em></h5> 

      <div className="row bg-transparent" >   
      <div className="col-6 col-md-4 bg-transparent pe-2 pt-2" >
     <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1HqwruRCD3iD0Hg-_qoz8yPPl7a4SBVqO&ehbc=2E312F" width="385" height="420"></iframe>
          </div>
  <div className="col-md-8 bg-transparent" >
<pre>
    {this.state.topspots.map(topspot => (
		<TopSpot
			key={topspot.id}
      id={topspot.id}
			name={topspot.name}
			description={topspot.description}
			location={topspot.location} 
      images={require(`./images/${topspot.id}.png`)}
		/>
	))
}
      </pre>
    </div>


      </div></div>  
      </div>
    );
  }
}

export default App;
