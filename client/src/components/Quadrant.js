import React from "react";
import {Scatter} from 'react-chartjs-2';
import Drone from "./Drone";

// https://github.com/jerairrest/react-chartjs-2

class Quadrant extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 50,
            y: 47
          }, {
            x: 2,
            y: 2
          }]
        }], labels: []
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{ticks: {min: 0, max: 100, stepSize: 20}}],
          xAxes: [{ticks: {min: 0, max: 100, stepSize: 20}}]
        }
      }
    };
  }

  render() {
    const {drones} = this.props;
    console.log(this.props);
    const DroneListRender = drones.map(drone => (
      <div className="col-xs-6">
        <Drone key={drone.id} id={drone.id} x={drone.x} y={drone.y} quadrant={drone.quadrant}/>
      </div>
    ));
    const {data} = this.state;
    const {options} = this.state;
    const divStyle = {
      width: '250px',
      height: '250px'
    };
    return (
      <div>
        <h2>Quadrant 1</h2>
        <div className="row">{DroneListRender}</div>
        <div style={divStyle}>
          <Scatter data={data} options={options} width={250} height={250}/>
        </div>
      </div>
    )
      ;
  }
}

export default Quadrant;
