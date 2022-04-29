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
      <div className='App' style={{ backgroundImage:`url(${`https://i.pinimg.com/originals/61/92/9e/61929e1226edd5be8b74092a7adcab30.jpg`})` }}>
      <div className='container'>
      <h1 className="font-weight-bolder font-italic text-center" >SAN DIEGO TOP SPOTS</h1>
      <h5 className="font-weight-lighter font-italic text-end pe-2">A list of the 30 places to see in San Diego, Califonia </h5> 

      <div className="card-group bg-transparent" >
  <div className="card bg-transparent">
<pre>
    {this.state.topspots.map(topspot => (
		<TopSpot
			key={topspot.id}
			name={topspot.name}
			description={topspot.description}
			location={topspot.location} 
		/>
	))
}
      </pre>
    </div>
   <div className="card bg-transparent col-4">
      
      <div className="ms-3 mt-3">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1HqwruRCD3iD0Hg-_qoz8yPPl7a4SBVqO&ehbc=2E312F" width="600" height="600"></iframe>
          </div>

      </div></div>  
      </div></div> 
    );
  }
}

export default App;
